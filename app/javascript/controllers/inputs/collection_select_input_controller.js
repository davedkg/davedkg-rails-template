import { Controller } from "stimulus"
require("select2")

export default class extends Controller {

  // *** Getters

  get multiple() {
    if ("true" === this.data.get("multiple") || true === this.data.get("multiple") ) {
      return true
    } else {
      return false
    }
  }

  get $element() {
    return $(this.element)
  }

  // *** Lifecycle

  connect() {
    const $element = this.$element
    const multiple = this.multiple

    $element.select2({
      multiple: multiple
    })

    if (multiple) {
      $element.find("option:eq()").remove()
      $element.val(null).trigger("change")
    }
  }

}