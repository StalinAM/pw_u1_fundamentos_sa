function guardar() {
  validarCampos()
}
function validarCampos() {
  let nombre = document.getElementById('id_nombre').value
  let apellido = document.getElementById('id_apellido').value
  let fecha = document.getElementById('id_fecha').value
  let email = document.getElementById('id_email').value
  let password = document.getElementById('id_password').value

  limpiarMensajes()
  if (nombre === '') {
    mostrarMensaje('Nombre es obligatorio')
    mostrarAsterisco('id_error_nombre')
    return
  }

  if (!validar(nombre, /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)) {
    mostrarMensaje('Nombre no es válido')
    mostrarAsterisco('id_error_nombre')
    return
  }
  if (apellido === '') {
    mostrarMensaje('Apellido es obligatorio')
    mostrarAsterisco('id_error_apellido')
    return
  }
  if (!validar(apellido, /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)) {
    mostrarMensaje('Apellido no es válido')
    mostrarAsterisco('id_error_apellido')
    return
  }
  if (fecha === '') {
    mostrarMensaje('Fecha es obligatoria')
    mostrarAsterisco('id_error_fecha')
    return
  }
  if (email === '') {
    mostrarMensaje('Email es obligatorio')
    mostrarAsterisco('id_error_email')
    return
  }
  if (!validar(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    mostrarMensaje('Email no es válido')
    mostrarAsterisco('id_error_email')
    return
  }
  if (password === '') {
    mostrarMensaje('Password es obligatorio')
    mostrarAsterisco('id_error_password')
    return
  }
  if (!validar(password, /^.{8,}$/)) {
    mostrarMensaje('Password no es válido. Debe tener al menos 8 caracteres')
    mostrarAsterisco('id_error_password')
    return
  }
}
function mostrarMensaje(msg) {
  let mensaje = document.getElementById('id_msg_error')
  mensaje.innerText = msg
  mensaje.style.display = 'block'
}
function mostrarAsterisco(id) {
  document.getElementById(id).innerText = '*'
}
function limpiarMensajes() {
  document.getElementById('id_msg_error').style.display = 'none'

  document.querySelectorAll('.error_asterisco').forEach(function (elem) {
    elem.innerText = ''
  })
}

function validar(texto, patron) {
  return patron.test(texto)
}
