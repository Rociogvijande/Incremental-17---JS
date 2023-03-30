const botonEliminar = document.getElementById('eliminar-cuenta');
botonEliminar.addEventListener('click', confirmarEliminacionCuenta);

function confirmarEliminacionCuenta() {
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar tu cuenta?');
    if (confirmacion) {
    eliminarCuenta();
    }
}

function eliminarCuenta() {
    fetch('/eliminar-cuenta', {
    method: 'POST'
    })
    .then(() => {
    window.location.href = '/inicio-sesion';
    })
;
}

// Lín.1: getElementById para obtener del HTML un elemento.
// Lín.2: Agrega un escuchador de eventos para detectar cuando se haga clic. Cuando se hace clic, se llamará a la función 
// "confirmarEliminacionCuenta".
// Lín.4: creo funcion confirmar

// Lín. 12:la función "fetch" envía una solicitud POST al servidor para eliminar la cuenta del usuario.
//  Una vez que la solicitud se haya completado, se llamará a la función "then" ara redirigir al usuario a la página de inicio de sesión

// El botón "Eliminar cuenta" implementa una función que muestra un mensaje de confirmación al usuario y envía una solicitud 
// asincrónica para eliminar la cuenta del servidor si el usuario lo confirma. 
// se llama a una función de callback para redirigir al usuario a la página de inicio de sesión después de que se 
// haya eliminado la cuenta.