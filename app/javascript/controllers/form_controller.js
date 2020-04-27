import { Controller } from "stimulus"

 export default class extends Controller {

   // *** Getters

   get $submitButton() {
     return $(this.element).find(':submit')
   }

   get isRemote() {
     return (this.element.dataset.remote || false)
   }

   // *** Lifecycle

   connect() {
     this.$submitButton.on("click", (e) => this.submitButtonClicked(e))
   }

   // *** Private Functions

   // Create a delay to allow data-disable-with to work on Safari
   submitButtonClicked(e) {
     const disableWith = e.target.dataset.disableWith

     if (disableWith) {
       e.preventDefault()

       e.target.value    = disableWith
       e.target.disabled = true

       setTimeout(() => this.reallySubmitForm(), 10)
     }
   }

   reallySubmitForm() {
     if (this.isRemote) {
       Rails.fire(this.element, "submit")
     } else {
       this.element.submit()
     }
   }

 }