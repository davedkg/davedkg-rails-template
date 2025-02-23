import { Controller } from "@hotwired/stimulus";

const TOGGLE_STATES = { Yes: "yes", No: "no" }
const TOGGLE_STATE_STORAGE_KEY = "SIDEBAR_TOGGLED"
export default class extends Controller {
  static targets = [ "sidebar" ]

  // *** Getters/Setters

  get sidebarToggled() {
    return document.documentElement.dataset.sidebarToggled
  }

  set sidebarToggled(sidebarToggled) {
    document.documentElement.dataset.sidebarToggled = sidebarToggled
  }

  // *** Events

  toggle() {
    const newState = TOGGLE_STATES.Yes === this.sidebarToggled ? TOGGLE_STATES.No : TOGGLE_STATES.Yes

    this.sidebarToggled = newState
    localStorage.setItem(TOGGLE_STATE_STORAGE_KEY, newState)

    this.sidebarTarget.classList.toggle('show')
    this.sidebarTarget.classList.toggle('hide')
  }
}
