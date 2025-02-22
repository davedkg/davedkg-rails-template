import { Controller } from "@hotwired/stimulus";

const BS_THEMES = { light: "light", dark: "dark" }
const USER_THEMES = { light: "light", dark: "dark", auto: "auto" }
const USER_THEME_STORAGE_KEY = "USER_THEME"

export default class extends Controller {

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
    this.prefersDarkColorSchemeMediaQuery.addEventListener('change', this.mediaQueryChanged.bind(this))
    this.setBsThemeFromUserTheme(this.userTheme)
  }

  disconnect() {
    this.prefersDarkColorSchemeMediaQuery.removeEventListener('change', this.mediaQueryChanged.bind(this))
  }

  // *** Events

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
