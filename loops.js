// Creamos un loop para imprimir los números del 1 al 5
console.log('Números del 1 al 5:');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Realizamos algunas operaciones matemáticas con los números del loop
let suma = 0;
let producto = 1;

for (let i = 1; i <= 5; i++) {
  suma += i; // Suma los números del 1 al 5
  producto *= i; // Calcula el producto de los números del 1 al 5
}

// Mostramos los resultados en la consola del navegador
console.log('Suma de los números del 1 al 5: ' + suma);
console.log('Producto de los números del 1 al 5: ' + producto);
