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

for (let i = 0; i < h2.length; i++) {
    h2[i].style.textAlign = "left";
    h2[i].style.color = "black";
    h2[4].style.color = "rgb(0, 128, 0)";
    h2[4].style.fontSize = "30px";
    h2[4].style.textAlign = "center";
    h2[4].style.display = "inline-block";
    h2[4].style.background = "url(img/index/icono_visitanos.png) 10% 28% no-repeat";
    h2[4].style.width = "223px";
}

const contenedor = document.querySelectorAll(".contenedor");
contenedor[2].style.position = "relative";