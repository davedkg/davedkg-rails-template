document.addEventListener("turbo:before-visit", () => {
  $('#progress-wheel').replaceWith("<div class='progress-wheel' id='progress-wheel' data-turbolinks-animate-persist='true'><div class='spinner-border'></div></div>")
})

document.addEventListener("turbo:render", () => {
  $('#progress-wheel').replaceWith("<div id='progress-wheel'></div>")
})
