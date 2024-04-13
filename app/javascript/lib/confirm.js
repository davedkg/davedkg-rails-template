import Swal from 'sweetalert2'

Turbo.setConfirmMethod((message, _element) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: message,
      showCancelButton: true,
    }).then((result) => {
      resolve(result.isConfirmed)
    }).catch(error => { reject(error) })
  })
})