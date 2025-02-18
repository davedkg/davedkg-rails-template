import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "sidebar" ]

  show() {
    this.sidebarTarget.classList.add("show")
    this.sidebarTarget.classList.remove("hide")
  }

  hide() {
    this.sidebarTarget.classList.add("hide")
    this.sidebarTarget.classList.remove("show")
  }
}
