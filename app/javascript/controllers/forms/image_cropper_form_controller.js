import { Controller } from "stimulus"
require("croppie")

export default class extends Controller {

  // *** Getters/Setters

  get $form() {
    return $(this.element)
  }

  get $modal() {
    if (0 === $("#image-cropper-modal").length) {
      return this.createModal()
    } else {
      return $("#image-cropper-modal")
    }
  }

  get $fileInput() {
    return this.$form.find("input[type='file']")
  }

  get cropperOptions() {
    return {
      viewport: {
        width: 200,
        height: 200
      },
      boundary: {
        width: 300,
        height: 300
      }
    }
  }

  get formAction() {
    return this.$form.attr("action")
  }

  get formMethod() {
    const _method = this.$form.find("input[name='_method']")

    if (0 === _method.length) {
      return "POST"
    } else {
      return _method.val()
    }
  }

  set cropperFile(file) {
    const reader = new FileReader()

    reader.onload = (e) =>
      this.cropper.croppie('bind', {
        url: e.target.result
      })

    reader.readAsDataURL(file)
  }

  // *** Actions

  submitForm(e) {
    e.preventDefault()

    Rails.fire(this.element, "submit")
  }

  openFileChooser(e) {
    e.preventDefault()

    this.$fileInput.click()
  }

  fileInputChanged(e) {
    const file = e.target.files[0]

    if (file.type.match(/^image\//)) {
      this.cropper     = this.createCropper()
      this.cropperFile = file
      this.openModal()
    } else {
      Toast.error(`Invalid file type: ${file.type}. File must be an image.`)
    }
  }

  // *** Helpers

  uploadFile(file) {
    var formData = new FormData()

    formData.append(this.$fileInput.attr("name"), file)

    Rails.ajax({
      url: this.formAction,
      type: this.formMethod,
      data: formData,
      error: (e) => {
        console.log(`Error: ${this.formMethod} ${this.formAction}`, e)
        Toast.error("An error occured while saving image.")
      }
    })
  }

  openModal() {
    this.$modal.modal("show")
  }

  modalIsClosing() {
    this.cropper.croppie('result', {
      enableExif: true,
      type: 'blob',
      size: 'viewport'
    }).then((file) => {
      this.uploadFile(file)
    })
  }

  createModal() {
    const $modal = $("body").append(''
      + '<div aria-hidden="true" class="modal fade" data-backdrop="static" id="image-cropper-modal" tabindex="-1">'
      + '  <div class="modal-dialog modal-dialog-centered">'
      + '    <div class="modal-content">'
      + '      <div class="modal-header"></div>'
      + '      <div class="modal-body"></div>'
      + '      <div class="modal-footer">'
      + '        <button class="btn btn-primary" type="button" data-dismiss="modal"><i class="fa fa-check"/> Done</button>'
      + '      </div>'
      + '    </div>'
      + '  </div>'
      + '</div>'
    )

    $modal.on('shown.bs.modal',  () => this.cropper.croppie('bind') ) // resize image cropper
    $modal.on('hide.bs.modal',   () => this.modalIsClosing() )
    $modal.on('hidden.bs.modal', () => {
      this.destroyCropper()
      this.destroyModal()
    })

    return $modal
  }

  destroyModal() {
    this.$modal.modal('dispose')
    this.$modal.remove()
  }

  createCropper() {
    return this.$modal.find('.modal-body').croppie(this.cropperOptions)
  }

  destroyCropper() {
    this.cropper.croppie('destroy')
  }

}