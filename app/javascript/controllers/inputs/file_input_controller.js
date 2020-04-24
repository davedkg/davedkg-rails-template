import { Controller } from "stimulus"

 export default class extends Controller {

   // *** Getters

   get $element() {
     return $(this.element)
   }

   get $label() {
     return this.$element.siblings(".custom-file-label")
   }

   // *** Lifecycle

   connect() {
     this.$element.on('change', (e) => this.fileChanged(e))
     this.$label.html("choose a file...")
   }

   // *** Events

   fileChanged(e) {
     const fileName = e.target.value.split( '\\' ).pop()

     this.$label.html(fileName)
   }

}