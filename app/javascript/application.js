// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from '@hotwired/turbo'
import "@popperjs/core"
import * as bootstrap from "bootstrap"
import swal from "sweetalert"
import TurboPower from 'turbo_power'

import "controllers"

TurboPower.initialize(Turbo.StreamActions)

// redirect_to while inside a turbo-frame
document.addEventListener("turbo:frame-missing", (event) => {
  const { detail: { response, visit } } = event;
  event.preventDefault();
  visit(response.url);
});

Turbo.config.forms.confirm = (message, _element) => {
  return new Promise((resolve, reject) => {
    swal({
      title: message,
      icon: "warning",
      buttons: ["Cancel", "Yes"]
    })
      .then((result) => {
        resolve(result || false);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
