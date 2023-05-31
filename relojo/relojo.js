function actualizarReloj() {
    // Obtiene la fecha y hora actual
    var fechaActual = new Date();
  
    // Obtiene las horas, minutos y segundos de la fecha actual
    var horas = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();
  
    // Formatea las horas, minutos y segundos para que tengan siempre dos dígitos
    var formatoHoras = horas.toString().padStart(2, '0');
    var formatoMinutos = minutos.toString().padStart(2, '0');
    var formatoSegundos = segundos.toString().padStart(2, '0');
  
    // Obtiene el elemento del HTML con el id "reloj"
    var relojElement = document.getElementById("reloj");
  
    // Actualiza el contenido del elemento "reloj" con la hora formateada
    relojElement.textContent = formatoHoras + ":" + formatoMinutos + ":" + formatoSegundos;
  }
  
  // Ejecuta la función actualizarReloj cada 1000 milisegundos (1 segundo)
  setInterval(actualizarReloj, 1000);
  
  