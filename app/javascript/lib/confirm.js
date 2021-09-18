import Swal from 'sweetalert2'

Rails.confirm = function(message, element) {
  let $element = $(element)

  Swal.fire({
    title: message,
    icon: 'warning',
    showCancelButton: true,
    showDenyButton: false,
    confirmButtonText: 'Continue',
    buttonsStyling: false,
    confirmButtonClass: 'btn btn-primary ml-3',
    cancelButtonClass: 'btn btn-default mr-3',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      let old = Rails.confirm

      Rails.confirm = function() { return true }
      $element.get(0).click()
      Rails.confirm = old
    }
  })

  return false;
}