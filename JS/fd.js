<<<<<<< HEAD
function animarElemento() {
    const elemento = document.querySelector('.elemento');
    let posicion = 0;
    
    function actualizar() {
      posicion += 1;
      elemento.style.transform = `translateX(${posicion}px)`;
      if (posicion < 300) { // Condición para detener la animación
        requestAnimationFrame(actualizar);
      }
    }
  
    requestAnimationFrame(actualizar);
  }
  
  animarElemento();
=======
function animarElemento() {
    const elemento = document.querySelector('.elemento');
    let posicion = 0;
    
    function actualizar() {
      posicion += 1;
      elemento.style.transform = `translateX(${posicion}px)`;
      if (posicion < 300) { // Condición para detener la animación
        requestAnimationFrame(actualizar);
      }
    }
  
    requestAnimationFrame(actualizar);
  }
  
  animarElemento();
>>>>>>> a4a97cf72ae8b71aa11a02d8450cfe1274952147
  