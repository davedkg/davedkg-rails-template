import { Controller } from "stimulus"
require("select2")

 export default class extends Controller {

   // *** Lifecycle

   connect() {
     $(this.element).select2()
   }

 }