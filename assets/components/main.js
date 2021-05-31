// import Letras from './_headerLetras.js';
// import  NavHide from './_navHide.js';


document.addEventListener('DOMContentLoaded', () => {
    
    // const letras = new Letras();
    // const navHide = new NavHide();

    const navBtn = document.getElementById('navbarSupportedContent');
    const navHide = () => document.getElementById('navbarSupportedContent').classList.remove('show');
   
    navBtn.addEventListener ('click', (e) => {
            
        if(e.target.classList.contains('nav-link')) {
            navHide();
        }
    });

    
    
    letras = document.querySelector('.cabecera__div--h1--p1');
    titulos = document.querySelector('.expandir');
    
    const maquinaEscribir1 = (text = '',tiempo = '', etiqueta = '') => {
        let arrayCaracteres = text.split('')
        etiqueta.innerHTML = ''
        let cont = 0
        let escribir = setInterval(function(){
            etiqueta.innerHTML += arrayCaracteres[cont]
            cont++
            if (cont === arrayCaracteres.length) {
                clearInterval(escribir)
            }
        }, tiempo)
    }
    
    
    document.body.addEventListener('click', () => navHide());
    maquinaEscribir1('Heredia Lucas()', 100, this.letras);
});
