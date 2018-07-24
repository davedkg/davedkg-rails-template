function notifySuccess(message) {
  notify('success', message, 3000);
}

function notifyFailure(message) {
  notify('danger', message, 15000);
}

function notify(type, message, timer) {
  $.notify({
    message: message,
  },{
    type: type,
    allow_dismiss: true,
    offset: 10,
    placement: {
    		from: "top",
    		align: "center"
    	},
    timer: timer,
    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-dismissible" role="alert">' +
      // '<h4 data-notify="title" class="alert-heading">{1}</h4>' +
		  '<p data-notify="message" class="mb-0">{2}</p>' +
      '<button data-notify="icon" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + 
	    '</div>'
  });
}