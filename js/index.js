/* Index estilos */

const fila = document.querySelectorAll("main:nth-of-type(1) .fila div");

for (let i = 0; i < fila.length; i++) {
    fila[i].style.backgroundColor = "white";
    fila[i].style.padding = "10px";
    fila[i].style.borderRadius = "10px";
    fila[i].style.boxShadow = "1px 1px 10px black";
    fila[0].style.animation = "slide-left 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)";
    fila[1].style.animation = "slide-right 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)";
    fila[2].style.animation = "slide-left 3s cubic-bezier(0.455, 0.03, 0.515, 0.955)";
    fila[3].style.animation = "slide-right 3s cubic-bezier(0.455, 0.03, 0.515, 0.955)";
}

const h2 = document.querySelectorAll("h2");

for (let i = 0; i < 4; i++) {
    h2[i].style.textAlign = "left";
    h2[i].style.color = "black";
}

const contenedor = document.querySelectorAll(".contenedor");
contenedor[2].style.position = "relative";