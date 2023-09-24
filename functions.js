// Definimos una función para saludar
function saludar(nombre) {
  // console.log('¡Hola, ' + nombre + '!');
}

// Llamamos a la función con diferentes nombres
saludar('Ana'); // Salida: ¡Hola, Ana!
saludar('María'); // Salida: ¡Hola, María!

// Definimos una función para calcular el cuadrado de un número
function calcularCuadrado(numero) {
  return numero * numero;
}

// Usamos la función para calcular cuadrados
let resultado1 = calcularCuadrado(3); // Resultado: 9
let resultado2 = calcularCuadrado(5); // Resultado: 25

// Mostramos los resultados en la consola del navegador
//console.log('El cuadrado de 3 es: ' + resultado1);
//console.log('El cuadrado de 5 es: ' + resultado2);
//console.log('El cuadrado de 0 es: ' + resultado2);

function sumar(parametro1, parametro2, parametro3) {
  //console.log(parametro1);
  //console.log(parametro2);
  //console.log(parametro3);

  const laSuma = parametro1 + parametro2 + parametro3;

  return laSuma;
}

const resultadoFinal = sumar(4, 5, 20);

//console.log('resultadoFinal', resultadoFinal);

if (resultadoFinal > 15) {
  //console.log('Es mas grande !!!!')
} else if (resultadoFinal > 25) {
  //console.log('Es mas grande todavia !!!!')
} else {
  //console.log('Es menos de 15')
}

const lamparaEncendida = false;
const lamparaEnchufada = true;
const lamparaQuemada = false; // <---- esta falta

if (lamparaEncendida === false) {
  // Primer bloque si esta encendido
  console.log('La lampara esta encendida');

  if (lamparaEnchufada === true) {
    // segundo bloque si esta enchufada
    console.log('La lampara esta enchufada');

    if (lamparaQuemada === true) {
      console.log('La lampara esta quemada');
    } else {
      console.log('Comprar nueva lampra');
    }
  } else {
    console.log('Necesitamos enchufar la lampara');
  }
}
