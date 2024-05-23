import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  // *** Getters

  get submitButton() {
    return this.element.querySelectorAll("input[type=submit]")[0];
  }

  // *** Lifecycle

  connect() {
    this.submitButton?.addEventListener("click", (e) =>
      this.submitButtonClicked(e)
    );
  }

  // *** Private Functions

  // Create a delay to allow data-disable-with to work on Safari
  submitButtonClicked(e) {
    const disableWith = e.target.dataset.disableWith;

    if (disableWith) {
      e.preventDefault();

      e.target.value = disableWith;
      e.target.disabled = true;

      setTimeout(() => this.reallySubmitForm(), 10);
    }
  }

  reallySubmitForm() {
    this.element.requestSubmit();
  }
}
