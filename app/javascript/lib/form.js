document.addEventListener(
  'click',
  event => {
    let element = event.target
    if (element.dataset.disableWithSafari) return
    if (element.dataset.disableWith) {
      let $form = $(element).closest('form')
      if ($form.length && element.dataset.disableWith) {
        element.value = element.dataset.disableWith
        element.disabled = true
        event.preventDefault()
        setTimeout(() => $form.submit(), 5)
        element.dataset.disableWithSafari = true
        element.click()
      }
    }
  },
  true
)