
function pedirCantidadGiros() {
    let cantidad = prompt("Cuantas veces quieres lanzar el dado");
    cantidad = parseInt(cantidad);
    return cantidad;
  }

function generarNumeroAlAzar(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

    