export default class Letras {
    constructor() {
        this.letras = document.querySelector('.cabecera__div--h1--p1');
        this.description = document.querySelector('.descriptionText');
        this.titulos = document.querySelector('.expandir');

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

        // const maquinaEscribir2 = (text = '',tiempo = '200', etiqueta = '') => {
        //     let arrayCaracteres = text.split('');
        //     etiqueta.innerHTML = '';
        //     let i = 0;
        //     let j = text.length;
        //     let escribir = setInterval(function(){
        //       if (i === arrayCaracteres.length) {
        //         etiqueta.innerHTML = text.substring(0,j);
        //         j--;
        //         if (j === 0) {
        //           etiqueta.innerHTML = '';
        //           i = 0;
        //           j = text.length;
        //         }
        //       } else {
        //         etiqueta.innerHTML += arrayCaracteres[i];
        //         i++;
        //       }
        //     }, tiempo);
        //   }

          maquinaEscribir1('Heredia Lucas()', 100, this.letras);
          maquinaEscribir1('¡Hola! Bienvenido/a a mi pequeño Portafolio.<br/> Me llamo Lucas y soy Desarrollador de Software.<br />Espero sea de tu agrado y disfrutes navegándolo.<br/>¡Un Saludo! Y espero nos veamos pronto.', 100, this.description);
          // maquinaEscribir2('Acerca de Mi', 100, this.titulos);
    }
};

