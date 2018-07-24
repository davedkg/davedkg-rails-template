$ ->
  $('form').dirtyForms().submit ->
    $(this).find(':submit').addClass('btn-loading').attr('value', 'processing').attr('disabled', true)