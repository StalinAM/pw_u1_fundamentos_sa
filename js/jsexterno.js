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
function fundamentosJS() {
  /* 3 Tipos de variables */
  var nombre = 'Angelo' //Antigua y obsoleta
  let apellido = 'Silva' //Variable cambiantes
  let apellido2 = 15
  apellido2 = 'Cajamarca'
  let arreglo = [1, 2, 3, 4, 5]
  let diasSemana = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ]
  const IVA = 12.8 //Constante
  console.log('Fundamentos de JavaScript')
  console.log(nombre)
  console.log(IVA)
  console.log(arreglo)

  const arregloDiasSemana = ['Lunes', 'Martes', 'Miércoles']
  arregloDiasSemana.push('Jueves')
  console.log(arregloDiasSemana) //agrega al final
  arregloDiasSemana.unshift('Días')
  console.log(arregloDiasSemana) //agrega al inicio
  console.log(arregloDiasSemana[0])
  console.log('Manejo de nulos, undefined y vacío')
  arregloDiasSemana.push(null)
  arregloDiasSemana.push('')
  console.log(arregloDiasSemana[5])
  console.log(arregloDiasSemana[6])
  console.log(arregloDiasSemana[7])
  const numerosPares = [2, 4, 6, 8]
  const numerosImpares = [1, 3, 5, 7, 9]
  const numerosTotales = numerosImpares.concat(numerosPares)
  console.log(numerosTotales)

  /* Sentencias de control */
  let edad = 19
  if (edad >= 18) {
    console.log('Es mayor de edad')
  } else {
    console.log('Es menor de edad')
  }

  let dia = 'Lunes'
  switch (dia) {
    case 'Lunes':
      console.log('Es lunes')
      break
    case 'Martes':
      console.log('Es martes')
      break
    default:
      console.log('No es ninguno de esos días')
  }

  for (let i = 0; i <= 5; i++) {
    console.log(i)
  }
  const frutas = ['manzana', 'sandia', 'cereza', 'pera']
  for (let fruta of frutas) {
    console.log(fruta)
  }

  /* Manejo de objetos */
  const profesor = {
    nombre: 'Edison',
    apellido: 'Cayambe',
    edad: 36,
    ecuatoriano: true,
    genero: 'M',
    ciudad: 'Quito'
  }
  console.log(profesor.nombre)
  profesor.apellido = 'Teran'
  console.log(profesor)
  /* Comparadores */
  if (profesor.ciudad === 'Quito') {
    console.log('Es de Quito')
  }

  if (profesor.edad !== 36) {
    console.log('Es diferente de 36')
  } else {
    console.log('Es 36')
  }

  for (let clave in profesor) {
    console.log(clave)
    console.log(profesor[clave])
  }

  const e1 = {
    nombre: 'Edison',
    apellido: 'Cayambe',
    edad: 36,
    ecuatoriano: true,
    genero: 'M',
    ciudad: 'Quito'
  }
  const e2 = {
    nombre: 'Edison',
    apellido: 'Cayambe',
    edad: 36,
    ecuatoriano: true,
    genero: 'M',
    ciudad: 'Quito'
  }
  arregloEstudiantes = [
    e1,
    e2,
    {
      nombre: 'Edison',
      apellido: 'Cayambe',
      edad: 36,
      ecuatoriano: true,
      genero: 'M',
      ciudad: 'Quito'
    }
  ]
  console.log(arregloEstudiantes[0])
  console.log(arregloEstudiantes[2])
  /* Desestructuración */
  const ar1 = [1, 2, 3, 4, 5, 6, 7]
  const [p1, p2, p3, p4, p5] = ar1
  console.log(p1)
  console.log(p5)
  const [primero, , , , , , ultimo] = ar1
  console.log(primero)
  console.log(ultimo)
  const [pos1, pos2] = [1, 2, 3, 4, 5, 6, 7]
  console.log(pos1)
  console.log(pos2)
  imprime(ar1)
  const e3 = {
    nombre: 'Edison',
    apellido: 'Cayambe',
    edad: 36,
    ecuatoriano: true,
    genero: 'M',
    ciudad: 'Quito'
  }
  const { nombre: n1, ciudad: c1 } = e3
  console.log(n1)
  console.log(c1)

  const { nombre: n, ciudad: c } = {
    nombre: 'Edison',
    apellido: 'Cayambe',
    edad: 36,
    ecuatoriano: true,
    genero: 'M',
    ciudad: 'Quito'
  }
  console.log(n)
  console.log(c)
  const e4 = {
    nombre: 'Edison',
    apellido: 'Cayambe',
    edad: 36,
    ecuatoriano: true,
    genero: 'M',
    ciudad: 'Quito',
    direccion: {
      calle: 'Av. America',
      barrio: 'La Gasca',
      numeracion: 1234
    }
  }
  console.log(e4.direccion)
  console.log(e4.direccion.barrio)

  const { edad: ed, direccion } = e4
  console.log(ed)
  console.log(direccion)

  const { calle } = e4.direccion
  console.log(calle)
  const {
    direccion: { barrio, calle: c2, numeracion }
  } = e4
  console.log(barrio)
  console.log(c2)
  console.log(numeracion)
}

function imprime([a, b, c]) {
  console.log(a)
  console.log(b)
  console.log(c)
}
