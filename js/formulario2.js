function guardarFormulario() {
  let cardholder_name = document.getElementById('id_cardholder_name').value
  let card_number = document.getElementById('id_card_number').value
  let exp_date = document.getElementById('id_exp_date').value
  let cvv = document.getElementById('id_cvv').value
  limpiarMensajes()
  if (cardholder_name === '') {
    mostrarMensaje(
      'El nombre del titular es obligatorio',
      'error_cardholder_name'
    )
    return
  }
  if (card_number === '') {
    mostrarMensaje('El número de tarjeta es obligatorio', 'error_card_number')
    return
  }
  if (exp_date === '') {
    mostrarMensaje('La fecha de expiración es obligatoria', 'error_exp_date')
    return
  }
  if (cvv === '') {
    mostrarMensaje('El CVV es obligatorio', 'error_cvv')
    return
  }
  mostrarDatosTarjeta(card_number, cardholder_name, exp_date)
}
function mostrarMensaje(msg, id) {
  let mensaje = document.getElementById(id)
  mensaje.innerText = msg
  mensaje.style.display = 'block'
}
function limpiarMensajes() {
  document.querySelectorAll('.error-message').forEach(function (elem) {
    elem.innerText = ''
  })
}

function mostrarDatosTarjeta(number, name, date) {
  let cardholder_name = document.getElementById('card_holder')
  let card_number = document.getElementById('card_number')
  let exp_date = document.getElementById('valid_thru')
  cardholder_name.innerText = name
  card_number.innerText = number
  exp_date.innerText = date
}
