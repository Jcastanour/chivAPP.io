// Función para cargar los datos en reservation.html
function cargarDatosReserva() {
    // Obtener datos del localStorage
    var origen = localStorage.getItem('origen');
    var destino = localStorage.getItem('destino');
    var fecha = localStorage.getItem('fecha');
    var pasajeros = localStorage.getItem('tpasajeros');
    var total = localStorage.getItem('total');

    console.log('estoy dentro');
    // Mostrar los datos en los elementos de reserva
    document.getElementById('origenReserva').textContent = origen;
    document.getElementById('destinoReserva').textContent = destino;
    document.getElementById('fechaReserva').textContent = fecha;
    document.getElementById('cantidadPasajerosReserva').textContent = pasajeros;
    document.getElementById('precioReserva').textContent = total;
}

document.addEventListener("DOMContentLoaded", function() {
    cargarDatosReserva();
});