import { Controller } from "@hotwired/stimulus";

const SHOW_STATES = { Yes: "YES", No: "NO" }
const SHOW_SIDEBAR_STORAGE_KEY = "SHOW_SIDEBAR"
export default class extends Controller {
  static targets = [ "sidebar" ]

  // *** Getters/Setters

  get showSidebar() {
    return document.documentElement.dataset.showSidebar
  }

  set showSidebar(showSidebar) {
    document.documentElement.dataset.showSidebar = showSidebar
  }

  // *** Events

  toggle() {
    const newState = SHOW_STATES.Yes === this.showSidebar ? SHOW_STATES.No : SHOW_STATES.Yes

    this.showSidebar = newState
    localStorage.setItem(SHOW_SIDEBAR_STORAGE_KEY, newState)

    if (SHOW_STATES.Yes === newState) {
      this.sidebarTarget.classList.add('show')
    } else {
      this.sidebarTarget.classList.remove('show')
    }
  }
}
