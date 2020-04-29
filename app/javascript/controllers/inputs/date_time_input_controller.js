import { Controller } from "stimulus"
import flatpickr from "flatpickr"

 export default class extends Controller {

   // *** Getters

   get type() {
     return this.data.get("type")
   }

   get config() {
     switch(this.type) {
       case "date":
         return {
           altFormat: "l, F j, Y",
           altInput: true,
           dateFormat: "Y-m-d",
           disableMobile: true
         }
       case "time":
         return {
           altFormat: "h:i K",
           altInput: true,
           dateFormat: "H:i",
           disableMobile: true,
           enableTime: true,
           noCalendar: true
         }
       default: // datetime
         return {
           altFormat: "l, F j, Y @ h:i K",
           altInput: true,
           dateFormat: "Y-m-d H:i",
           disableMobile: true,
           enableTime: true
         }
     }
   }

   // *** Lifecycle

   connect() {
     this.picker = flatpickr(this.element, this.config)
   }

   disconnect() {
     this.picker.destroy()
     this.picker = null
   }

}