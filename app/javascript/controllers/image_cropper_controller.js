import { Controller } from "stimulus"
require("croppie")

export default class extends Controller {

  // *** Getters/Setters

  get $modal() {
    if (0 === $("#image-cropper-modal").length) {
      return this.createModal()
    } else {
      return $("#image-cropper-modal")
    }
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

  set cropperFile(file) {
    const reader = new FileReader()

    reader.onload = (e) =>
      this.cropper.croppie('bind', {
        url: e.target.result
      })

    reader.readAsDataURL(file)
  }

  // *** Actions

  // TODO what happens if its not a valid image
  // TODO accept="image/jpeg" on input
  inputChanged(e) {
    this.cropper     = this.createCropper()
    this.cropperFile = e.target.files[0]
    this.showModal()
  }

  // *** Helpers

  showModal() {
    this.$modal.modal("show")
  }

  closingModal() {
    this.cropper.croppie('result', {
      type: 'blob',
      size: 'viewport'
    }).then((file) => {
      // $(this.element).val(file) FIXME
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

    $modal.on("shown.bs.modal",  () => this.cropper.croppie('bind') )
    $modal.on('hide.bs.modal',   () => this.closingModal() )
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