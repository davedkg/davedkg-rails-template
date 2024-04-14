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

  // *** Lifecycle

  connect() {
    const theme = this.storedTheme || this.browserTheme;

    if ("auto" === theme) {
      document.documentElement.setAttribute("data-bs-theme", this.browserTheme);
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }

    this.setDropdownButtonIcon(theme);
    this.setActiveThemeButton(theme);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        this.handlePrefersColorSchemeChanged(e)
      );
  }

  disconnect() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", this.handlePrefersColorSchemeChanged);
  }

  // *** Actions

  changeTheme(event) {
    const theme = event.target.getAttribute("data-bs-theme-value");

    if ("auto" === theme) {
      document.documentElement.setAttribute("data-bs-theme", this.browserTheme);
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }

    this.storedTheme = theme;
    this.setDropdownButtonIcon(theme);
    this.setActiveThemeButton(theme);
  }

  // *** Helpers

  handlePrefersColorSchemeChanged({ matches }) {
    if ("auto" === this.storedTheme) {
      if (matches) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
      }
    }
  }

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
