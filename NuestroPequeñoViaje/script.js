const portada = document.getElementById("portada");
const hoja1 = document.getElementById("hoja1");
const hoja2 = document.getElementById("hoja2");

document.getElementById("startButton").addEventListener("click", () => {
    portada.style.display = "none";
    hoja1.style.display = "flex";
});

document.getElementById("continuar").addEventListener("click", () => {
    hoja1.style.display = "none";
    hoja2.style.display = "flex";
});