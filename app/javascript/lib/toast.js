import { Toast } from "bootstrap";

document.addEventListener("turbo:load", function () {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
});
