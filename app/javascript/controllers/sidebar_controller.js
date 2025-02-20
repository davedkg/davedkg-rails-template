import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "sidebar", "body" ]

  show() {
    this.bodyTarget.classList.add("sidebar-shown")
    this.bodyTarget.classList.remove("sidebar-hidden")
    this.sidebarTarget.classList.add("show")
    this.sidebarTarget.classList.remove("hide")
  }

  hide() {
    this.bodyTarget.classList.remove("sidebar-shown")
    this.bodyTarget.classList.add("sidebar-hidden")
    this.sidebarTarget.classList.add("hide")
    this.sidebarTarget.classList.remove("show")
  }
}
