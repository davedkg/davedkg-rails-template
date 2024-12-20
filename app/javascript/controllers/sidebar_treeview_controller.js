import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]

  click() {
    this.element.classList.toggle('active')
    this.menuTarget.classList.toggle('menu-open')
  }
}
