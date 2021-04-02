import { Controller } from "stimulus"
require("jquery-sparkline")

export default class extends Controller {

  get color() {
    return this.data.get("color") || "white"
  }

  get values() {
    return this.data.get("values").split(",")
  }

  get config() {
    return {
      type: 'bar',
      barColor: this.color,
      height: '40px'
    }
  }

  // *** Lifecycle

  connect() {
    $(this.element).sparkline(this.values, this.config)
  }

}