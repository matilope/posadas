/* Header 1 */

const h1 = document.querySelector("h1");

// setInterval(() => {
//     let r = Math.floor(Math.random() * 60);
//     let g = Math.floor(Math.random() * 220);
//     let b = Math.floor(Math.random() * 60);
//     h1.style = `color:rgb(${r}, ${g}, ${b});`
// }, 1000);

// De todas formas el internet explorer no lo toma :/
setInterval(function() {
    let r = Math.floor(Math.random() * 60);
    let g = Math.floor(Math.random() * 220);
    let b = Math.floor(Math.random() * 60);
    h1.style.color = "rgb("+r+","+g+","+b+")";
}, 1000);