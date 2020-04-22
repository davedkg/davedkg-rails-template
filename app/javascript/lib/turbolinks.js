document.addEventListener( 'turbolinks:load', function() {
  TurbolinksAnimate.init({ element: document.querySelector('.turbolinks-animate') })
})

document.addEventListener('turbolinks:before-visit', () => {
  $html = $("<div class='page-loader__spinner' data-turbolinks-animate-persist='true'><svg viewBox='25 25 50 50'><circle cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'></circle></svg></div>").fadeOut()
  $('#page-loader').html($html)
  $html.fadeIn()
})

