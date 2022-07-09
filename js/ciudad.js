/* Ciudad estilos */

const fila = document.querySelectorAll(".fila div");

let isIE = /*@cc_on!@*/false || !!document.documentMode; // Para saber si el navegador internet Explorer, devuelve un boolean

for (let i = 0; i < fila.length; i++) {
    fila[i].style.position = "relative";
    fila[i].style.width = "30%";
    fila[i].style.backgroundColor = "rgb(255, 255, 255)";
    fila[i].style.borderRadius = "10px";
    fila[i].style.boxShadow = "1px 1px 20px black";
}

const span = document.querySelectorAll(".fila div span");

for (let i = 0; i < span.length; i++) {
    span[i].style.position = "absolute";
    span[i].style.top = "0";
    span[i].style.padding = "10px";
    span[i].style.color = "white";
    span[i].style.fontWeight = "bold";
    span[i].style.margin = "0px";
    span[i].style.borderRadius = "10px 0px";
    if (span[i].textContent == "Posadas") {
        span[i].style.backgroundColor = "red";
    }
    else if (span[i].textContent == "Policiales") {
        span[i].style.backgroundColor = "black";
    } else {
        span[i].style.backgroundColor = "green";
    }
}

/* Cambiar direccion de la caja con javascript */

// const eventos = document.querySelectorAll(".eventos");

// const estilosEventos = "margin: 20px 0px; background-color: rgb(255 255 255 / 85%); padding: 20px 0px; box-shadow: 1px 1px 20px black;";

// for (let i = 0; i < eventos.length; i++) {
//     if (i % 2 === 0) {
//         eventos[i].style = `flex-direction:row-reverse; ${estilosEventos}`;
//     } else {
//         eventos[i].style = `${estilosEventos}`;
//     }
// }

/* Imagenes */

const imagen = document.querySelectorAll(".imagen");

for (let i = 0; i < imagen.length; i++) {
    imagen[i].style.borderRadius = "10px 0px";
}

/* Header 3 */

const header = document.querySelectorAll(".fila div h3");

for (let i = 0; i < header.length; i++) {
    if (isIE) {
        header[i].style.fontSize = "18px";
        header[i].style.padding = "0px 10px";
        header[i].style.color = "black";
    } else {
        header[i].style = "font-size:18px; padding:0px 10px;"
    }
}

/* Header 2 */

const h2 = document.querySelectorAll("h2");

for (let i = 0; i < h2.length; i++) {
    h2[i].style.fontSize = "30px";
    h2[i].style.display = "inline-block";
    h2[i].style.color = "rgb(0,128,0)";
    h2[0].style.background = "url(img/ciudad/icono_noticias.png) 10% 28% no-repeat";
    h2[1].style.background = "url(img/ciudad/icono_eventos.png) 10% 28% no-repeat";

    let headers = window.matchMedia('(screen and max-width: 480px)');

    (function () {
        if (headers.matches) {
            h2[i].style.width = "166px";
        } else {
            h2[i].style.width = "204px";
        }
    })();
    
    if (isIE) {
        if (headers.matches) {
            h2[i].style.width = "166px";
        } else {
            h2[i].style.width = "204px";
        }
    } else {
        headers.addEventListener("onchange", function (e) {
            if (e.matches) {
                h2[i].style.width = "166px";
            } else {
                h2[i].style.width = "204px";
            }
        });
    }
}

/* Animation scroll */

window.addEventListener("scroll", function () {
    let div = document.querySelectorAll(".contenedor .eventos");
    for (let i = 0; i < div.length; i++) {
        let position = div[i].getBoundingClientRect().top;
        let screen = window.innerHeight;
        if (position < screen) {
            div[i].classList.add("animacion");
        } else {
            div[i].classList.remove("animacion");
        }
    }
});