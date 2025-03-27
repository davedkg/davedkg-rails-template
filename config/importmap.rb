# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@popperjs/core", to: "bootstrap.bundle.min.js", preload: true
pin "bootstrap", to: "bootstrap.bundle.min.js", preload: true
pin "autosize", preload: true # @6.0.1
pin "sweetalert", preload: true # @2.1.2
pin "process", preload: true # @2.1.0
pin "turbo_power", preload: true # @0.7.1
