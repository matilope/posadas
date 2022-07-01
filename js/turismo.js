/* Turismo estilos */

const fila = document.querySelectorAll(".fila div");

let isIE = /*@cc_on!@*/false || !!document.documentMode; // Para saber si el navegador internet Explorer, devuelve un boolean

for (let i = 0; i < fila.length; i++) {
    if (isIE) { // para que funcione en internet explorer
        fila[i].style.position = "relative";
        fila[i].style.width = "30%";
        fila[i].style.backgroundColor = "#FFF";
        fila[i].style.border = "1px solid #DDD";
        fila[i].style.borderRadius = "4px";
        fila[i].style.boxShadow = "1px 1px 20px #7aa87c";
        fila[i].style.cursor = "pointer";
    } else {
        fila[i].style = "position:relative; width:30%; background-color:#FFF; border:1px solid #DDD; border-radius:4px; box-shadow: 1px 1px 20px #7aa87c; cursor:pointer;";
    }
}

const header = document.querySelectorAll(".fila div h2");

for (let i = 0; i < header.length; i++) {
    header[i].style.position = "absolute";
    header[i].style.top = "40%";
    header[i].style.padding = "10px";
    header[i].style.color = "white";
    header[i].style.fontWeight = "bold";
    header[i].style.margin = "0px";
    header[i].style.borderRadius = "4px";
    header[i].style.backgroundColor = "rgba(0, 128, 0, 0.8)";
}

const span = document.querySelectorAll(".fila div span");

for (let i = 0; i < span.length; i++) {
    span[i].style.position = "absolute";
    span[i].style.top = "55%";
    span[i].style.padding = "10px";
    span[i].style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    span[i].style.color = "white";
    span[i].style.fontWeight = "bold";
    span[i].style.left = "0";
    span[i].style.borderRadius = "4px";
    span[i].style.margin = "1px";
}

const imagen = document.querySelectorAll(".imagen");

for (let i = 0; i < imagen.length; i++) {
    imagen[i].style.borderRadius = "4px";
}

const parrafos = document.querySelectorAll("p");

for (let i = 0; i < 6; i++) { // i < 6 para que no me tome el parrafo del footer
    parrafos[i].style.color = "#777";
    parrafos[i].style.padding = "4px";
}


/* Modal */

const p = document.querySelector(".modal p");

const costanera = document.querySelector("#costanera");
const intereses = document.querySelector("#intereses");
const paseos = document.querySelector("#paseos");
const jardinbotanico = document.querySelector("#jardinbotanico");
const rio = document.querySelector("#rio");
const entretenimiento = document.querySelector("#entretenimiento");

const contenedor_modal = document.querySelector(".contenedor_modal");

// Es para que no me tire error de validacion en la imagen vacia y sin alt
const imgs = document.createElement("img");
const modal = document.querySelector(".modal");
modal.appendChild(imgs);

// Es para que no me tire error de validacion en el h2 vacio
const header2 = document.createElement("h2");
modal.insertBefore(header2, p);

const img = document.querySelectorAll(".modal img");
modal.style.width = "600px";

/* Constante de data para tener el codigo un poco mas ordenado */

const data = [
    {
        h2: "Playa El Brete",
        p: "La playa El Brete es la más cercana a la ciudad, ubicada sobre una de las arterias principales: la avenida Urquiza y Costanera. En la playa, además de disfrutar del sol y del río, podes realizar distintas actividades deportivas como ser voley y fútbol, calistenia (entrenamiento de barras). Además, en las cercanías tenés la opción de alquiler de kayaks (Club Náutico León Seró) y el skate-bike park. Además, a 200 metros del balneario, sobre la avenida Urquiza se encuentra la Reserva Urbana del Arroyo Itá. Una opción de paseo por la naturaleza en el corazón de la ciudad. Mirá los horarios en los que podés visitar la reserva. ¡Y la oferta gastronómica de la mano de los mejores restós! Servicio a la carta, cerveza artesanal, heladerías.",
        img: 'img/turismo/modal/playa.jpg'
    },
    {
        h2: "Monumento a Andresito Guacurarí",
        p: "Monumento a Andresito Guacurarí se encuentra localizado en el segundo tramo de la costanera, a metros de la rotonda de la bajada vieja, una imponente estructura de acero inoxidable. Con 17 metros de alto y 6 toneladas de peso, de cara la ciudad de Posadas y de fondo el río Paraná. Es el punto más fotografiado de la ciudad. Realizado por el artista misionero Gerónimo Rodríguez",
        img: 'img/turismo/modal/andresito.jpg'
    },
    {
        h2: "Parque Provincial Cañadón de Profundidad",
        p: "A 35 kilómetros de la ciudad de Posadas se encuentra el Parque Provincial Cañadón de Profundidad que cuenta con 19 hectáreas de extensión. Es posible disfrutar de un paseo agradable rodeado de la vegetación y paisajes propios del sur de la provincia de Misiones. Cuenta con una cascada que se puede acceder mediante los senderos -de hasta 3000 metros de extensión- que bordea el arroyo y permite adentrarse en la tupida vegetación. Posee una zona para acampar con las instalaciones adecuadas (conexión eléctrica, sanitarios, parrillas, quinchos, mesas y bancos). No posee proveeduría, pero al salir del parque se encuentra el pueblo de Profundidad donde es posible abastecerse con todo lo necesario.",
        img: 'img/turismo/modal/parqueprovincial.jpg'
    },
    {
        h2: "Jardín Botánico Alberto Roth",
        p: "Los jardines botánicos son espacios donde se crean reservas ecológicas para garantizar una mejor calidad de vida, un lugar donde diversas especies de la flora puedan apreciarse, así como un espacio abierto para la investigación y la educación. Dentro del predio del Jardín Botánico Alberto Roth hay una biblioteca, un orquideario, una fuente y distintos senderos. Es uno de los espacios más tradicionales de la ciudad de Posadas y sin dudas un pulmón verde, custodio de la biodiversidad en el sur misionero.",
        img: 'img/turismo/modal/jardinbotanico.jpg'
    },
    {
        h2: "Río Paraná",
        p: "Todos los días de 14:00 a 19:00 horas podés navegar por el río Paraná. El club te proporciona la embarcación y todo el equipo de seguridad náutica, lancha de rescate y guardavidas. Con el protocolo sanitario habilitado, los turnos se establecen por orden de llegada. De lunes a viernes tiene un costo de $150 por persona; sábados, domingos y feriados de $200 la hora de navegación en la bahía El Brete",
        img: 'img/turismo/modal/rioparana.jpg'
    },
    {
        h2: "Parque Del Conocimiento",
        p: "El Parque Del Conocimiento es una entidad pública al servicio de la comunidad, la cual su finalidad es promover el arte, la ciencia y otros hechos culturales de la Provincia de Misiones",
        img: 'img/turismo/modal/parquedelconocimiento.jpg'
    }
];


/* Estilos */
[costanera, intereses, paseos, jardinbotanico, rio, entretenimiento].forEach(function (evento) {
    evento.addEventListener('click', function (e) {
        if (isIE) {
            contenedor_modal.style.display = "block";
            contenedor_modal.style.animation = "fadeIn 1s";
            img[1].style.maxWidth = "100%";
            img[1].style.height = "400px";
            p.style.textAlign = "left";
            modal.style.margin = "40px auto";
        } else {
            contenedor_modal.style = "display:flex; display:-ms-flex; animation: fadeIn 1s; -webkit-animation: fadeIn 1s; -moz-animation: fadeIn 1s; -o-animation: fadeIn 1s; -ms-animation: fadeIn 1s;";
            p.style = "text-align:left;";
            img[1].style = "max-width:100%; max-height:400px;";
        }
    });
})


/* Boton para abrir el modal con la data de cada publicacion */

costanera.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    header2.textContent = data[0].h2;
    p.textContent = data[0].p;
    img[1].src = data[0].img;
    img[1].alt = "Playa El Brete";
});
intereses.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    header2.textContent = data[1].h2;
    p.textContent = data[1].p;
    img[1].src = data[1].img;
    img[1].alt = "Monumento a Andresito Guacurarí";
});
paseos.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    header2.textContent = data[2].h2;
    p.textContent = data[2].p;
    img[1].src = data[2].img;
    img[1].alt = "Parque Provincial Cañadón de Profundidad";
});
jardinbotanico.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    header2.textContent = data[3].h2;
    p.textContent = data[3].p;
    img[1].src = data[3].img;
    img[1].alt = "Jardín Botánico Alberto Roth";
});
rio.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    header2.textContent = data[4].h2;
    p.textContent = data[4].p;
    img[1].src = data[4].img;
    img[1].alt = "Hombre en kayak en el Río Paraná";
});
entretenimiento.addEventListener('click', function (e) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    header2.textContent = data[5].h2;
    p.textContent = data[5].p;
    img[1].src = data[5].img;
    img[1].alt = "Parque del conocimiento";
});


/* Boton para cerrar el modal */

img[0].addEventListener('click', function (e) {
    if (isIE) {
        contenedor_modal.style.animation = "fadeOut 1s";
        setTimeout(function () {
            contenedor_modal.style.display = "none";
        }, 1000); // como no se genera la animacion tengo que cerrar el modal mas rapido para que no parezca lento o colgado.
    } else {
        contenedor_modal.style = "display:flex; display:-ms-flex; animation: fadeOut 2s; -webkit-animation: fadeOut 2s; -moz-animation: fadeOut 2s; -o-animation: fadeOut 2s; -ms-animation: fadeOut 2s;";
        setTimeout(function () {
            contenedor_modal.style.display = "none";
        }, 2000);
    }
});