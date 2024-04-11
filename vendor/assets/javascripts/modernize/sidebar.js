document.addEventListener("turbo:load", function () {
  document.querySelectorAll(".sidebartoggler").forEach(function (element) {
    element.addEventListener("click", function () {
      document.querySelectorAll(".sidebartoggler").forEach(function (el) {
        el.checked = true;
      });
      document.getElementById("main-wrapper").classList.toggle("show-sidebar");
      document.querySelectorAll(".sidebarmenu").forEach(function (el) {
        el.classList.toggle("close");
      });
      var dataTheme = document.body.getAttribute("data-sidebartype");
      if (dataTheme === "full") {
        document.body.setAttribute("data-sidebartype", "mini-sidebar");
      } else {
        document.body.setAttribute("data-sidebartype", "full");
      }
    });
  });
});
