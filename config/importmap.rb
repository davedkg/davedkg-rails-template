# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "nifty", to: "nifty.js"
pin "bootstrap" # @5.3.3
pin "@popperjs/core", to: "https://unpkg.com/@popperjs/core@2.11.8/lib/index.js"
