// Números enteros
let edad = 30; // Tipo: Number

// Números decimales
let altura = 1.75; // Tipo: Number

// Texto (cadenas de caracteres)
let nombre = 'María'; // Tipo: String

// TIPO FUERTE

// TIPO DEBIL

nombre = 44;

// console.log('hola mi nombre es: ', nombre);

// Booleanos (verdadero o falso)
let esEstudiante = true; // Tipo: Boolean

// ESTAN VIENDO AQUI ?!?!?

esEstudiante = false;
esEstudiante = true;
esEstudiante = false;

// Arreglos (colección de datos)
// Tipo: Array
let numeros = [1, 2, 3, 4]; // array es tipo numeros

let otroArray = ['Daniela', 'Sebastian', 'Maria', 'Alexander'];
// Array es tipo string

// Ahora yo quiero hacer un output (mostrar el resultado de otroArray, que hago?)

// console.log('otroArray', otroArray);
// console.log('numeros', numeros);

// OBJETOS !!!!!
// Objetos (colección de propiedades)
let persona = {
  nombre: 'Juan',
  edad: 28,
  estudiante: false,
};

let autoNuevo = {
  marca: 'mazda',
  caja: 'automatico', // tambie puede ser mecanico
  asientos: 4,
  funciona: false,
};

let autoNuevoSegundo = {
  marca: 'lexus', // valor es string
  caja: 'mecanico', // valor estring
  asientos: 6, // valor es numero
  funciona: true, // valor es boolean
};

// llamemos los valores de autoNuevo

console.log('La marca es :', autoNuevo.marca);
console.log('La caje es :', autoNuevo.caja);

console.log('Los asientos es:', autoNuevoSegundo.asientos);

// quiero llamar todo el objeto
// console.log(autoNuevoSegundo);
// console.log(autoNuevo);
//console.log('Yo vivo en', pais);
//let pais = 'Bolivia';

let unoMasTres = 1 + 3 + 4 + 5 + 19;
let unoMasTresExplicacion = '1 mas 3, i maaaaaas numeros :';

console.log(unoMasTresExplicacion);
console.log(unoMasTres);

// Hay tres tipos como declarar una variable

// 1. var

//var edad = 33;

// 2. let

let color = 'rojo';

// 3. const

//const altura = 178;

// ASIGNAR/DECLARAR es =
// Comparar es == o ===

const test = 'hola';
const comparar = 4 === 3;

//console.log('La variable comparar es ',comparar)

let primerNumero = 30;
let segundoNumero = 20;

let resultado = primerNumero + segundoNumero;

let resultadoMasGrande = primerNumero > segundoNumero;

// console.log('resultadoMasGrande', resultadoMasGrande);
console.log(resultadoMasGrande);

// Valor nulo (ausencia de valor)

// Valor indefinido (variable sin valor asignado)
let variableSinValor; // Tipo: Undefined

// Mostrar los tipos de datos en la consola del navegador
// console.log('Edad: ' + typeof edad);
// console.log('Altura: ' + typeof altura);
// console.log('Nombre: ' + typeof nombre);
// console.log('Es Estudiante: ' + typeof esEstudiante);
// console.log('Números: ' + typeof numeros);
// console.log('Persona: ' + typeof persona);
// console.log('Resultado: ' + typeof resultado);
// console.log('Variable sin Valor: ' + typeof variableSinValor);

const uno = true;
const dos = false;
const tres = true;

// if (uno === true) {
//   console.log('Uno es verdad :' + uno);

//   if (dos === true) {
//     console.log('uno, dos es verdad');
//   } else if (dos === true && tres === false) {
//     console.log('Uno, dos son verdad');
//   } else {
//     console.log('Uno, dos y tres son verdad');
//   }
// } else {
//   console.log('uno no es verdad');
// }

const colores = ['rojo', 'verde', 'amarillo', 'uhgzgutg'];
const numero = [13, 34, 4];
const otros = [true, false, true, false];
console.log(otros);
const madre = [false, true, 2, 'letras'];
console.log(madre);
