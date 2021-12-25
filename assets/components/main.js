
document.addEventListener("DOMContentLoaded", () => {

  const navBtn = document.getElementById("navbarSupportedContent");
  const navHide = () =>
    document.getElementById("navbarSupportedContent").classList.remove("show");

  navBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navHide();
    }
  });

  letras = document.querySelector(".cabecera__div--h1");
  description = document.querySelector(".descriptionText");
  titulos = document.querySelector(".expandir");

  const maquinaEscribir1 = (text = "", tiempo = "", etiqueta = "") => {
    let arrayCaracteres = text.split("");
    etiqueta.innerHTML = "";
    let cont = 0;
    let escribir = setInterval(function () {
      etiqueta.innerHTML += arrayCaracteres[cont];
      cont++;
      if (cont === arrayCaracteres.length) {
        clearInterval(escribir);
      }
    }, tiempo);
  };

  document.body.addEventListener("click", () => navHide());

  maquinaEscribir1("Heredia Lucas()", 100, letras);
  setTimeout(() => {
    maquinaEscribir1(
      "¡Hola! Bienvenido/a a mi Portafolio.",
      100,
      description
    );
  }, 8000);
});
