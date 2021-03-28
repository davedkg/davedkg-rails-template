document.addEventListener( 'turbolinks:load', function() {
  TurbolinksAnimate.init({ element: document.querySelector('.turbolinks-animate') })
})

document.addEventListener("turbolinks:before-visit", () => {
  $('#progress-wheel').replaceWith("<div class='progress-wheel' id='progress-wheel' data-turbolinks-animate-persist='true'><div class='spinner-border'></div></div>")
})

document.addEventListener("turbolinks:render", () => {
  $('#progress-wheel').replaceWith("<div id='progress-wheel'></div>")
})
