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
      offset: { y: 84, x: 0 },
      template:
        '<div data-notify="container" class="col-xs-12 col-sm-10 col-md-6 col-xl-4 alert alert-{0} alert-dismissible fade show" role="alert">' +
      		'<button type="button" aria-hidden="true" class="close" data-notify="dismiss" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' +
      		'<span data-notify="icon"></span> ' +
      		'<span data-notify="title">{1}</span> ' +
      		'<span data-notify="message">{2}</span>' +
      		'<div class="progress" data-notify="progressbar">' +
      			'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
      		'</div>' +
      		'<a href="{3}" target="{4}" data-notify="url"></a>' +
      	'</div>'
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