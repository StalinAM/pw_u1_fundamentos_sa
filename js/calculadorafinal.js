let expresion = ''

const $ = (id) => document.getElementById(id)
const setDisplay = (valor) => {
  $('display').innerText = valor
}
const getDisplayValue = () => $('display').innerText

function agregarNumero(valor) {
  if (getDisplayValue() === '0') {
    expresion = ''
    setDisplay('')
  }
  expresion += valor
  setDisplay(expresion)
}

function agregarOperacion(op) {
  if (expresion === '' || /[+\-*/%]$/.test(expresion)) return
  expresion += op
  setDisplay(expresion)
}

function suma() {
  agregarOperacion('+')
}
function resta() {
  agregarOperacion('-')
}
function multiplicacion() {
  agregarOperacion('*')
}
function division() {
  agregarOperacion('/')
}
function porcentaje() {
  agregarOperacion('%')
}

function resultado() {
  const res = calcularExpresion(expresion)
  setDisplay(res)
  expresion = res === 'Error' ? '' : res.toString()
}

function limpiarDisplay() {
  setDisplay('0')
  expresion = ''
}

function retroceso() {
  if (expresion.length > 0) {
    expresion = expresion.slice(0, -1)
    setDisplay(expresion === '' ? '0' : expresion)
  }
}

function calcularExpresion(expresion) {
  expresion = expresion.replace(/%/g, '/100')
  const tokens = expresion.match(/\d+\.?\d*|[+\-*/]/g)
  if (!tokens) return 'Error'
  // Multiplicación y división primero
  let stack = []
  let i = 0
  while (i < tokens.length) {
    const token = tokens[i]
    switch (token) {
      case '*': {
        const prev = parseFloat(stack.pop())
        const next = parseFloat(tokens[++i])
        stack.push(prev * next)
        break
      }
      case '/': {
        const prev = parseFloat(stack.pop())
        const next = parseFloat(tokens[++i])
        if (next === 0) return 'Error'
        stack.push(prev / next)
        break
      }
      default:
        stack.push(token)
    }
    i++
  }
  // Suma y resta
  let result = parseFloat(stack[0])
  i = 1
  while (i < stack.length) {
    const op = stack[i]
    const num = parseFloat(stack[i + 1])
    switch (op) {
      case '+':
        result += num
        break
      case '-':
        result -= num
        break
    }
    i += 2
  }
  return isNaN(result) ? 'Error' : parseFloat(result.toFixed(3))
}
