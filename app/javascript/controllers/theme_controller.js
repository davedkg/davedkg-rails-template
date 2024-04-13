import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "lightButton",
    "darkButton",
    "autoButton",
    "dropdownButtonIcon",
  ];

  // *** Getters/Setters

  get browserTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  get storedTheme() {
    return localStorage.getItem("theme");
  }

  set storedTheme(theme) {
    localStorage.setItem("theme", theme);
  }

  set currentTheme(theme) {
    this.storedTheme = theme;

    document.documentElement.setAttribute("data-bs-theme", theme);
    this.setActiveThemeButton(theme);
    this.setDropdownButtonIcon(theme);
  }

  // *** Lifecycle

  connect() {
    this.currentTheme = this.storedTheme || this.browserTheme;
  }

  // *** Actions

  changeTheme(event) {
    this.currentTheme = event.target.getAttribute("data-bs-theme-value");
  }

  // *** Helpers

  setDropdownButtonIcon(theme) {
    if ("auto" === theme) {
      this.dropdownButtonIconTarget.classList.remove("fa-sun");
      this.dropdownButtonIconTarget.classList.remove("fa-moon");
      this.dropdownButtonIconTarget.classList.add("fa-circle-half-stroke");
    } else if ("dark" === theme) {
      this.dropdownButtonIconTarget.classList.remove("fa-sun");
      this.dropdownButtonIconTarget.classList.add("fa-moon");
      this.dropdownButtonIconTarget.classList.remove("fa-circle-half-stroke");
    } else {
      this.dropdownButtonIconTarget.classList.add("fa-sun");
      this.dropdownButtonIconTarget.classList.remove("fa-moon");
      this.dropdownButtonIconTarget.classList.remove("fa-circle-half-stroke");
    }
  }

  setActiveThemeButton(theme) {
    if ("auto" === theme) {
      this.lightButtonTarget.classList.remove("active");
      this.darkButtonTarget.classList.remove("active");
      this.autoButtonTarget.classList.add("active");
    } else if ("dark" === theme) {
      this.lightButtonTarget.classList.remove("active");
      this.darkButtonTarget.classList.add("active");
      this.autoButtonTarget.classList.remove("active");
    } else {
      this.lightButtonTarget.classList.add("active");
      this.darkButtonTarget.classList.remove("active");
      this.autoButtonTarget.classList.remove("active");
    }
  }
}
