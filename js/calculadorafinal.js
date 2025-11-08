let num1 = 0
let num2 = 0

function mostrarDisplay(valor) {
  let elemento = document.getElementById('display')
  elemento.innerText = elemento.innerText + valor
}
function suma() {
  mostrarDisplay('+')
}
function resta(num1, num2) {
  return num1 - num2
}
function multiplicacion(num1, num2) {
  return num1 * num2
}
function division(num1, num2) {
  return num1 / num2
}
function porcentaje(num1, num2) {
  return (num1 * num2) / 100
}
function resultado() {}

function limpiarDisplay() {
  let elemento = document.getElementById('display')
  elemento.innerText = ''
}
