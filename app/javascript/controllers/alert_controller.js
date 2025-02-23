import { Controller } from "@hotwired/stimulus";

const DISMISSABLE_TIMEOUT = 3000

export default class extends Controller {
  connect() {
    if (this.element.classList.contains("alert-dismissible")) {
      setTimeout(() => {
        new bootstrap.Alert(this.element).close();
      }, DISMISSABLE_TIMEOUT);
    }
  }
}
