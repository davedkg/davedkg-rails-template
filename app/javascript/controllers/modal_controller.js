import { Controller } from "stimulus"

 export default class extends Controller {
   connect() {
     let $modal = $(this.element)

     $modal.modal()

     $modal.on("hidden.bs.modal", () => $modal.remove())
   }
 }