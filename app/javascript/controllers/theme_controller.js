import { Controller } from "@hotwired/stimulus";

const BS_THEMES = { light: "light", dark: "dark" }
const USER_THEMES = { light: "light", dark: "dark", auto: "auto" }
const USER_THEME_STORAGE_KEY = "USER_THEME"
const USER_THEME_ICON_CLASSES = { light: "bi-sun-fill", dark: "bi-moon-stars-fill", auto: "bi-circle-half" }

export default class extends Controller {

  static targets = [ "light", "dark", "auto", "dropdownToggle" ]

  // *** Getters

  get bsTheme() {
    return document.body.dataset.bsTheme
  }

  set bsTheme(bsTheme) {
    document.body.dataset.bsTheme = bsTheme
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
    this.prefersDarkColorSchemeMediaQuery.addEventListener('change', this.mediaQueryChanged.bind(this))

    this.updateForUserTheme(this.userTheme)
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
    this.updateDropdownToggleForUserTheme(userTheme)
  }

  updateDropdownToggleForUserTheme(userTheme) {
    switch(userTheme) {
      case USER_THEMES.light:
        this.dropdownToggleTarget.classList.add(USER_THEME_ICON_CLASSES.light)
        this.dropdownToggleTarget.classList.remove(USER_THEME_ICON_CLASSES.dark)
        this.dropdownToggleTarget.classList.remove(USER_THEME_ICON_CLASSES.auto)
        break
      case USER_THEMES.dark:
        this.dropdownToggleTarget.classList.remove(USER_THEME_ICON_CLASSES.light)
        this.dropdownToggleTarget.classList.add(USER_THEME_ICON_CLASSES.dark)
        this.dropdownToggleTarget.classList.remove(USER_THEME_ICON_CLASSES.auto)
        break
      case USER_THEMES.auto:
        this.dropdownToggleTarget.classList.remove(USER_THEME_ICON_CLASSES.light)
        this.dropdownToggleTarget.classList.remove(USER_THEME_ICON_CLASSES.dark)
        this.dropdownToggleTarget.classList.add(USER_THEME_ICON_CLASSES.auto)
        break
    }
  }

  updateDropdownItemsForUserTheme(userTheme) {
    switch(userTheme) {
      case USER_THEMES.light:
        this.lightTarget.classList.add("active")
        this.darkTarget.classList.remove("active")
        this.autoTarget.classList.remove("active")
        break
      case USER_THEMES.dark:
        this.lightTarget.classList.remove("active")
        this.darkTarget.classList.add("active")
        this.autoTarget.classList.remove("active")
        break
      case USER_THEMES.auto:
        this.lightTarget.classList.remove("active")
        this.darkTarget.classList.remove("active")
        this.autoTarget.classList.add("active")
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
