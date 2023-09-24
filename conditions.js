// Función para decidir si alguien recibe una invitación especial
function decidirInvitacion(nombre, edad) {
  if (edad >= 18) {
    console.log(nombre + ', ¡tienes una invitación VIP a la fiesta!');
  } else {
    console.log(nombre + ', te invitamos a nuestra fiesta mágica.');
  }
}

// Invitamos a diferentes personas con diferentes edades
decidirInvitacion('Ana', 25);
decidirInvitacion('María', 16);
