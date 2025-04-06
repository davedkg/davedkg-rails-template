import { Controller } from "@hotwired/stimulus";

const BS_THEMES = { light: "light", dark: "dark" }
const USER_THEMES = { light: "LIGHT", dark: "DARK", auto: "AUTO" }
const USER_THEME_STORAGE_KEY = "USER_THEME"

export default class extends Controller {

  static targets = [ "light", "dark", "auto" ]

  // *** Getters

  get bsTheme() {
    return document.documentElement.dataset.bsTheme
  }

  set bsTheme(bsTheme) {
    document.documentElement.dataset.bsTheme = bsTheme
  }

  get userTheme() {
    return localStorage.getItem(USER_THEME_STORAGE_KEY) || USER_THEMES.auto
  }

  set userTheme(userTheme) {
    localStorage.setItem(USER_THEME_STORAGE_KEY, userTheme)
  }

  get prefersDarkColorSchemeMediaQuery() {
    return window.matchMedia('(prefers-color-scheme: dark)')
  }

  // *** Lifecycle

  connect() {
    this.updateForUserTheme(this.userTheme)
    this.prefersDarkColorSchemeMediaQuery.addEventListener('change', this.mediaQueryChanged.bind(this))
  }

  disconnect() {
    this.prefersDarkColorSchemeMediaQuery.removeEventListener('change', this.mediaQueryChanged.bind(this))
  }

  // *** Events

  changeTheme(event) {
    event.preventDefault()

    const userTheme = event.target.dataset.theme

    this.userTheme = userTheme
    this.updateForUserTheme(userTheme)
  }

  mediaQueryChanged(event) {
    if (USER_THEMES.auto === this.userTheme) {
      if (event.matches) {
        this.bsTheme = USER_THEMES.dark
      } else {
        this.bsTheme = USER_THEMES.light
      }
    }
  }

  // *** Helpers

  updateForUserTheme(userTheme) {
    this.setBsThemeFromUserTheme(userTheme)
    this.updateDropdownItemsForUserTheme(userTheme)
  }

  updateDropdownItemsForUserTheme(userTheme) {
    switch(userTheme) {
      case USER_THEMES.light:
        if (this.hasLightTarget) this.lightTarget.classList.add("active")
        if (this.hasDarkTarget) this.darkTarget.classList.remove("active")
        if (this.hasAutoTarget) this.autoTarget.classList.remove("active")
        break
      case USER_THEMES.dark:
        if (this.hasLightTarget) this.lightTarget.classList.remove("active")
        if (this.hasDarkTarget) this.darkTarget.classList.add("active")
        if (this.hasAutoTarget) this.autoTarget.classList.remove("active")
        break
      case USER_THEMES.auto:
        if (this.hasLightTarget) this.lightTarget.classList.remove("active")
        if (this.hasDarkTarget) this.darkTarget.classList.remove("active")
        if (this.hasAutoTarget) this.autoTarget.classList.add("active")
        break
    }
  }

  setBsThemeFromUserTheme(userTheme) {
    switch(userTheme) {
      case USER_THEMES.light:
        this.bsTheme = BS_THEMES.light
        break
      case USER_THEMES.dark:
        this.bsTheme = BS_THEMES.dark
        break
      case USER_THEMES.auto:
        this.bsTheme = this.prefersDarkColorSchemeMediaQuery.matches ? BS_THEMES.dark : BS_THEMES.light
        break
    }
  }
}
