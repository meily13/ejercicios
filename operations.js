let edadAna = 30;
let edadMaria = '32';

let esMayor = edadAna <= edadMaria;
// El operador ">" verifica si Ana es mayor que María

//console.log('el resultado si es mayor:', esMayor)

let sonIguales = edadAna !== edadMaria;
//console.log('el resultado si es mayor:', sonIguales)

// El operador "===" verifica si las edades son iguales

// Mostramos los resultados en la consola del navegador

// Salida: ¿Ana es mayor que María? false
//console.log('¿Ana es mayor que María?', esMayor);
// Salida: ¿Las edades son iguales? false
//console.log('¿Las edades son iguales?', sonIguales);

// Usando operadores para combinar resultados
// El operador "&&" combina las condiciones
let esMayorYNoIguales = esMayor && !sonIguales;

// Mostramos el resultado combinado
//console.log('¿Ana es mayor y no tienen edades iguales?', esMayorYNoIguales);
// Salida: ¿Ana es mayor y no tienen edades iguales? false

const colorVerde = true;
const colorRojo = false;
const colorNegro = false;

// && --> AND
// || --> OR

const dosColoresPresents = colorVerde && colorRojo && colorNegro;
const dosColoresOr = colorRojo || colorVerde;

//console.log('dosColoresOr',dosColoresOr)

// si todos los colores son verdad, voy a mandar un mail a miles de pintores

if (dosColoresOr) {
  console.log('uno de los dos colores es presente');
} else {
  console.log('ambos no son presentes');
}
