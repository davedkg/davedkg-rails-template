import Swal from 'sweetalert2'

Turbo.setConfirmMethod((message, _element) => {
  return new Promise((resolve, reject) => {
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
      resolve(result.isConfirmed)
    }).catch(error => { reject(error) })
  })
})