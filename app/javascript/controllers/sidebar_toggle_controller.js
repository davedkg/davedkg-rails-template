import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["pageWrapper"]

  toggle() {
    console.log('toggle')
    this.pageWrapperTarget.classList.toggle("toggled")
  }

  pin() {
    this.pageWrapperTarget.classList.toggle("pinned")
  }
}
