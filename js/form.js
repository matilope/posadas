const form = document.querySelector("form");
const nombre = document.querySelector("input#nombre");
const correo = document.querySelector("input#correo");
const actividad = document.getElementById('actividad').options;
const fechaInicio = document.querySelector("input#fechaIda");
const fechaFin = document.querySelector("input#fechaVuelta");
const imagen = document.querySelector("input#imagen");
const mensaje = document.querySelector("textarea#mensaje");

const lista = document.querySelectorAll(".contenedor_modal div ul li");
const contenedor_modal = document.querySelector(".contenedor_modal");
const modal = document.querySelector(".modal");

let isIE = /*@cc_on!@*/false || !!document.documentMode; // Para saber si el navegador internet Explorer, devuelve un boolean
let selected = [];

function MostrarModal() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    //const actividades = Array.from(actividad).map(e => e.value);

    // Los primeros 5 no hace falta validarlos ya que son required, aunque el usuario podria sacar este atributo desde "inspeccionar elemento"
    // IMPORTANTE ACLARACION ABAJO
    // Para que funcione en internet explorer los tengo que concatenar, no me permite usar el backtick.

    lista[0].innerHTML = "<span style='color:rgb(0,128,0);'>Nombre:</span> " + nombre.value;
    lista[1].innerHTML = "<span style='color:rgb(0,128,0);'>Correo:</span> " + correo.value;
    lista[2].innerHTML = "<span style='color:rgb(0,128,0);'>Actividades:</span> ";

    for (let j = 0; j < selected.length; j++) {
        let span = document.createElement("span");
        lista[2].appendChild(span);
        span.innerHTML = selected[j] + ", ";
        /* Para que el ultimo aparezca con el . y no con la , */
        if (j + 1 === selected.length) {
            span.innerHTML = selected[j] + ".";
        }
    }

    lista[3].innerHTML = "<span style='color:rgb(0,128,0);'>Fecha de inicio:</span> " + fechaInicio.value;
    lista[4].innerHTML = "<span style='color:rgb(0,128,0);'>Fecha de finalizado:</span> " + fechaFin.value;
    if (mensaje.value !== "" && mensaje.value !== null && mensaje.value !== undefined) {
        lista[5].innerHTML = "<span style='color:rgb(0,128,0);'>Mensaje:</span> " + mensaje.value;
    }
    if (imagen.value.length < 1 || !imagen.value) {
        lista[6].innerHTML = "<span style='color:rgb(0,128,0);'>Imagen:</span> <img style='width:100%; margin-top:8px;' src='img/imagen_rota.png' alt='Imagen rota' />";
    } else if (isIE) {
        // Nota -> solo sirve si subis una imagen que se encuentra dentro de la carpeta img del trabajo practico, y tambien aclaro que en internet explorer te da el value de exactamente donde viene el archivo, obviamente porque es mas inseguro
        lista[6].innerHTML = "<span style='color:rgb(0,128,0);'>Imagen:</span> <img style='width:100%; margin-top:8px;' src='" + imagen.value + "' alt='Imagen del DNI del usuario' />"; // para que funcione en internet explorer
    } else {
        lista[6].innerHTML = "<span style='color:rgb(0,128,0);'>Imagen:</span> <img style='width:100%; margin-top:8px;' src='img/" + imagen.value.replace('C:\\fakepath\\', '') + "' alt='Imagen del DNI del usuario' />";
    }

    setTimeout(function () { // Se utilizaron estas funciones en todo el proyecto en vez de las arrow functions para que funcionen en internet explorer
        if (isIE) {
            contenedor_modal.style.display = "block"; // Para que funcione en internet explorer y el block es para que se vea mejor y centrado, con flex no se centra en IE
            contenedor_modal.style.animation = "fadeOut 2s";
        } else {
            contenedor_modal.style = "display:flex; display:-ms-flex; animation:fadeOut 2s; -webkit-animation:fadeOut 2s; -moz-animation:fadeOut 2s; -o-animation:fadeOut 2s; -ms-animation:fadeOut 2s;";
        }

    }, 2000);

    setTimeout(function () {
        contenedor_modal.style.display = "none";
        selected = [];
    }, 4000);
}

form.addEventListener('submit', function (e) {

    if (isIE) {
        contenedor_modal.style.display = "block";
        contenedor_modal.style.animation = "fadeIn 1s";
        modal.style.margin = "40px auto";
    } else {
        contenedor_modal.style = "display:flex; display:-ms-flex; animation: fadeIn 1s; -webkit-animation: fadeIn 1s; -moz-animation: fadeIn 1s; -o-animation: fadeIn 1s; -ms-animation: fadeIn 1s;";
    }

    for (let i = 0; i < actividad.length; i++) {
        if (actividad[i].selected) {
            selected.push(actividad[i].value);
        }
    }
    MostrarModal();
});