import { Controller } from "@hotwired/stimulus";
import { Modal } from "bootstrap";

export default class extends Controller {
  connect() {
    new Modal(this.element).show();

    this.element.addEventListener("hidden.bs.modal", () => {
      this.element.remove();
    });
  }
}
