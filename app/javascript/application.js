// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "@popperjs/core"
import * as bootstrap from "bootstrap"
import Swal from "sweetalert2"

import "controllers"

// redirect_to while inside a turbo-frame
document.addEventListener("turbo:frame-missing", (event) => {
  const { detail: { response, visit } } = event;
  event.preventDefault();
  visit(response.url);
});

Turbo.config.forms.confirm = (message, _element) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: message,
      showCancelButton: true,
    })
      .then((result) => {
        resolve(result.isConfirmed);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
