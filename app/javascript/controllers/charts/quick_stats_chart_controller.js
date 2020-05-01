import { Controller } from "stimulus"
require("jquery-sparkline")

export default class extends Controller {

  get values() {
    return this.data.get("values").split(",")
  }

  get config() {
    return {
      type: 'bar',
      barColor: 'white',
      height: '40px'
    }
  }

  // *** Lifecycle

  connect() {
    $(this.element).sparkline(this.values, this.config)
  }

}