import { Controller } from "stimulus"
import { CHART_COLORS } from "../../constants/charts"
require("jquery-sparkline")

export default class extends Controller {

  // *** Getters

  get height() {
    return this.data.get("height") || "40px"
  }

  get colors() {
    return CHART_COLORS
  }

  get values() {
    return this.data.get("values").split(",")
  }

  get config() {
    return {
      type: 'pie',
      height: this.height,
      sliceColors: this.colors,
    }
  }

  // *** Lifecycle

  connect() {
    $(this.element).sparkline(this.values, this.config)
  }

}