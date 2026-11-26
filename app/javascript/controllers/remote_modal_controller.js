import { Controller } from "@hotwired/stimulus";
import { Dialog } from "bootstrap";

export default class extends Controller {
  connect() {
    new Dialog(this.element).show();

    this.element.addEventListener("hidden.bs.dialog", () => {
      this.element.remove();
    });
  }
}
