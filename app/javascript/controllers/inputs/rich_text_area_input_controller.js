import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    var button = this.element.parentNode.querySelector(".trix-button-group--file-tools")
    if (button) {
      button.parentNode.removeChild(button)
    }
    this.element.addEventListener("trix-file-accept", function(e) { e.preventDefault() })
  }

}