const Toast = {
  success: function (message) {
    return this.show(message, "success");
  },
  warning: function (message) {
    return this.show(message, "warning");
  },
  error: function (message) {
    return this.show(message, "danger");
  },
  info: function (message) {
    return this.show(message, "info");
  },
  show: function (body, type) {
    return alert(body);
  },
};

window.Toast = Toast;
