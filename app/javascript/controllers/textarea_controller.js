import { Controller } from "stimulus"
import autosize from "autosize"

 export default class extends Controller {

   // *** Lifecycle

   connect() {
     autosize(this.element)
   }

   disconnect() {
     autosize.destroy(this.element)
   }

 }