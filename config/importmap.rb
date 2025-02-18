# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@popperjs/core", to: 'bootstrap.bundle.min.js', preload: true
pin "bootstrap", to: "bootstrap.bundle.min.js", preload: true
pin "autosize" # @6.0.1
pin "sweetalert2" # @11.15.0
