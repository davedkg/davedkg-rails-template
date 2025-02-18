import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "sidebar", "main" ]

  show() {
    this.mainTarget.classList.add("sidebar-shown")
    this.mainTarget.classList.remove("sidebar-hidden")
    this.sidebarTarget.classList.add("show")
    this.sidebarTarget.classList.remove("hide")
  }

  hide() {
    this.mainTarget.classList.remove("sidebar-shown")
    this.mainTarget.classList.add("sidebar-hidden")
    this.sidebarTarget.classList.add("hide")
    this.sidebarTarget.classList.remove("show")
  }
}
