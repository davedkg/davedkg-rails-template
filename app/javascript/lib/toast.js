require("bootstrap-notify")

Toast =  {
  defaults: function() {
    return {
      placement: {
        from: "top",
        align: "center"
      },
      z_index: 1100,
      delay: 3000,
      allow_dismiss: true,
    }
  },
  success: function(message) {
    return this.show(message, 'success')
  },
  warning: function(message) {
    return this.show(message, 'warning')
  },
  error: function(message) {
    return this.show(message, 'danger')
  },
  info: function(message) {
    return this.show(message, 'info')
  },
  show: function(message, type) {
    return $.notify({
      message: message
    }, Object.assign({ type: type }, this.defaults()));
  }
}

window.Toast = Toast