import { Controller } from "stimulus"
import flatpickr from "flatpickr"

 export default class extends Controller {

   // *** Getters

   get $inputGroup() {
     return $(this.element).parent()
   }

   get type() {
     return this.data.get("type")
   }

   get inline() {
     console.log(this.data.get("inline"))
     if ("true" === this.data.get("inline") || true === this.data.get("inline")) {
       return true
     } else {
       return false
     }
   }

   get config() {
     switch(this.type) {
       case "date":
         return {
           altFormat: "l, F j, Y",
           altInput: true,
           dateFormat: "Y-m-d",
           disableMobile: true,
           inline: this.inline
         }
       case "time":
         return {
           altFormat: "h:i K",
           altInput: true,
           dateFormat: "H:i",
           disableMobile: true,
           enableTime: true,
           inline: this.inline,
           noCalendar: true
         }
       default: // datetime
         return {
           altFormat: "l, F j, Y @ h:i K",
           altInput: true,
           dateFormat: "Y-m-d H:i",
           disableMobile: true,
           enableTime: true,
           inline: this.inline
         }
     }
   }

   // *** Lifecycle

   connect() {
     this.picker = flatpickr(this.element, this.config)

     if (this.inline) {
       const $inputGroup = this.$inputGroup

       $inputGroup.find(".input-group-prepend").remove()
       $inputGroup.find(".input").css("display", "none")
     }
   }

   disconnect() {
     this.picker.destroy()
     this.picker = null
   }

}