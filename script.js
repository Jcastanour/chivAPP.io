// Varialbes index.html
const form = document.getElementById('search-form');
const origenSelect = document.getElementById('origen');
const destinoSelect = document.getElementById('destinos');
const fechaSelect = document.getElementById('departure-date');
const origenImage = document.getElementById('origen-image').querySelector('img');
const destinoImage = document.getElementById('destino-image').querySelector('img');
const imageSection = document.getElementById('image-section');
const preciotiquete = document.getElementById('precio-tiquete');
const pasajeros = document.getElementById('passengers');
const preciopasajero = document.getElementById('precio-pasajeros');
let origenName = document.getElementById('origen-name');
let destinoName = document.getElementById('destino-name');
let totalpreciopasajeros;

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('search-form');
    const button = form.querySelector('button');
    const inputs = form.querySelectorAll('input, select');

    function checkForm() {
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
            }
        });
        button.disabled = !allFilled;
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkForm);
    });

    checkForm(); 
});


const dateInput = document.getElementById('departure-date');

// Obtener la fecha actual en formato YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// Establecer la fecha mínima en el campo de entrada
dateInput.setAttribute('min', today);
dateInput.setAttribute('value', today);

function calcularPrecioChiva(origen, destino) {
    // Matriz de precios entre destinos en COP
    const preciosChiva = {
        "Medellín": {
            "Urrao": 40000,
            "San Jeronimo": 10000,
            "Guatapé": 30000,
            "Santa Fe de Antioquia": 15000,
            "Jardín": 35000
        },
        "Urrao": {
            "Medellín": 40000,
            "San Jeronimo": 50000,
            "Guatapé": 60000,
            "Santa Fe de Antioquia": 45000,
            "Jardín": 50000
        },
        "San Jeronimo": {
            "Medellín": 10000,
            "Urrao": 50000,
            "Guatapé": 35000,
            "Santa Fe de Antioquia": 20000,
            "Jardín": 45000
        },
        "Guatapé": {
            "Medellín": 30000,
            "Urrao": 60000,
            "San Jeronimo": 35000,
            "Santa Fe de Antioquia": 50000,
            "Jardín": 60000
        },
        "Santa Fe de Antioquia": {
            "Medellín": 15000,
            "Urrao": 45000,
            "San Jeronimo": 20000,
            "Guatapé": 50000,
            "Jardín": 40000
        },
        "Jardín": {
            "Medellín": 35000,
            "Urrao": 50000,
            "San Jeronimo": 45000,
            "Guatapé": 60000,
            "Santa Fe de Antioquia": 40000
        }
    };

    // Verificar si los destinos existen en la matriz
    if (preciosChiva[origen] && preciosChiva[origen][destino]) {
        return preciosChiva[origen][destino];
    } else {
        return "Ruta no encontrada.";
    }
}

// Función para mostrar la imagen según la selección
function mostrarImagenes() {

    // Obtener el valor seleccionado de los selectores
    const origenSeleccionado = origenSelect.value;
    const destinoSeleccionado = destinoSelect.value;

    origenName.textContent = origenSeleccionado;
    destinoName.textContent = destinoSeleccionado;

    // Lógica para mostrar las imágenes según la selección
    // Aquí puedes ajustar según cómo tengas las imágenes y sus rutas
    if (origenSeleccionado === 'Urrao') {
        origenImage.src = 'images/urrao.jpg'; // Ruta de la imagen de Urrao
        origenImage.alt = 'Imagen de Urrao';
    } else if (origenSeleccionado === 'San Jeronimo') {
        origenImage.src = 'images/san-jeronimo.jpg'; // Ruta de la imagen de San Jeronimo
        origenImage.alt = 'Imagen de San Jeronimo';
    } else if (origenSeleccionado === 'Guatapé') {
        origenImage.src = 'images/guatape.jpg'; // Ruta de la imagen de Guatapé
        origenImage.alt = 'Imagen de Guatapé';
    } else if (origenSeleccionado === 'Santa Fe de Antioquia') {
        origenImage.src = 'images/santa-fe.jpg'; // Ruta de la imagen de Santa Fe de Antioquia
        origenImage.alt = 'Imagen de Santa Fe de Antioquia';
    } else if (origenSeleccionado === 'Jardín') {
        origenImage.src = 'images/jardin.jpg'; // Ruta de la imagen de Jardín
        origenImage.alt = 'Imagen de Jardín';
    } else if (origenSeleccionado === 'Medellín') {
        origenImage.src = 'images/medellin.jpg'; // Ruta de la imagen de Jardín
        origenImage.alt = 'Imagen de Medellín';
    } else {
        // Si no hay selección de origen, puedes manejar esto según tus necesidades
        origenImage.src = '';
        origenImage.alt = '';
    }

    // Lógica para el destino (puedes adaptar según tus necesidades)
    if (destinoSeleccionado === 'Urrao') {
        destinoImage.src = 'images/urrao.jpg'; // Ruta de la imagen de Urrao
        destinoImage.alt = 'Imagen de Urrao';
    } else if (destinoSeleccionado === 'San Jeronimo') {
        destinoImage.src = 'images/san-jeronimo.jpg'; // Ruta de la imagen de San Jeronimo
        destinoImage.alt = 'Imagen de San Jeronimo';
    } else if (destinoSeleccionado === 'Guatapé') {
        destinoImage.src = 'images/guatape.jpg'; // Ruta de la imagen de Guatapé
        destinoImage.alt = 'Imagen de Guatapé';
    } else if (destinoSeleccionado === 'Santa Fe de Antioquia') {
        destinoImage.src = 'images/santa-fe.jpg'; // Ruta de la imagen de Santa Fe de Antioquia
        destinoImage.alt = 'Imagen de Santa Fe de Antioquia';
    } else if (destinoSeleccionado === 'Jardín') {
        destinoImage.src = 'images/jardin.jpg'; // Ruta de la imagen de Jardín
        destinoImage.alt = 'Imagen de Jardín';
    } else if (destinoSeleccionado === 'Medellín') {
        destinoImage.src = 'images/Medellin.jpg'; // Ruta de la imagen de Jardín
        destinoImage.alt = 'Imagen de Medellín';
    } else {
        // Si no hay selección de origen, puedes manejar esto según tus necesidades
        origenImage.src = '';
        origenImage.alt = '';
    }
    
    const numpasajeros = pasajeros.value;
    let precioviaje = calcularPrecioChiva(origenSeleccionado,destinoSeleccionado);
    totalpreciopasajeros = precioviaje * numpasajeros;

    totalpreciopasajeros = totalpreciopasajeros.toLocaleString('es-CO', { style: 'currency', currency: 'COP',minimumFractionDigits: 0, maximumFractionDigits: 0 });
    precioviaje = precioviaje.toLocaleString('es-CO', { style: 'currency', currency: 'COP',minimumFractionDigits: 0, maximumFractionDigits: 0 });
    preciotiquete.textContent = `Precio tiquete: ${precioviaje}`;

    preciopasajero.textContent = `Precio TOTAL: ${totalpreciopasajeros} (${numpasajeros} pasajeros)`

    if (origenImage.src || destinoImage.src) {
        imageSection.style.display = 'flex';
    } else {
        imageSection.style.display = 'none'; // Ocultar la sección si no hay imágenes que mostrar
    }
}

function reserva() {
    // Obtener valores del formulario
    var origen = origenSelect.value;
    var destino = destinoSelect.value;
    var fecha = fechaSelect.value;
    var tpasajeros = pasajeros.value;
    var total = totalpreciopasajeros

    // Guardar datos en localStorage para usar en reservation.html
    localStorage.setItem('origen', origen);
    localStorage.setItem('destino', destino);
    localStorage.setItem('fecha', fecha);
    localStorage.setItem('tpasajeros', tpasajeros);
    localStorage.setItem('total', total);

    // Redirigir al usuario a la página de reserva
    window.location.href = 'pestañas/reservation.html';
}

