import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    new bootstrap.Modal(this.element).show();

    this.element.addEventListener("hidden.bs.modal", () => {
      this.element.remove();
    });
  }
}