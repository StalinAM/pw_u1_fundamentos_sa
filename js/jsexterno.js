function cambiarColor(idElemento, color) {
  document.getElementById(idElemento).style.backgroundColor = color
}
function agregarElemento(idElementoPadre, html) {
  document.getElementById(idElementoPadre).innerHTML += html
}
function eliminarElemento(idElemento) {
  document.getElementById(idElemento).remove()
}
function ocultarElemento(idElemento) {
  document.getElementById(idElemento).style.display = 'none'
}
function mostrarElemento(idElemento) {
  document.getElementById(idElemento).style.display = 'block'
}
function evaluarOperacion(tipo) {
  let num1 = parseFloat(document.getElementById('id_n1').value)
  let num2 = parseFloat(document.getElementById('id_n2').value)
  let resultado = 0
  if (tipo === '+') {
    resultado = sumar(num1, num2)
  }
  if (tipo === '-') {
    resultado = restar(num1, num2)
  }
  if (tipo === '*') {
    resultado = multiplicar(num1, num2)
  }
  if (tipo === '/') {
    resultado = dividir(num1, num2)
  }
  document.getElementById('id_resultado').innerText = resultado
}
function sumar(num1, num2) {
  return num1 + num2
}
function restar(num1, num2) {
  return num1 - num2
}
function multiplicar(num1, num2) {
  return num1 * num2
}
function dividir(num1, num2) {
  return num1 / num2
}
