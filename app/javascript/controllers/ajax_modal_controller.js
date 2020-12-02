import { Controller } from "stimulus"

export default class extends Controller {
  success(event) {
    let [data, status, xhr] = event.detail
    let $modal = $(xhr.response).appendTo('body')

    $modal.modal()

    $modal.on("hidden.bs.modal", () => $modal.remove())
  }

  error(event) {
    console.log("modal:error", event)
    Toast.error("Unable to load modal.")
  }
}