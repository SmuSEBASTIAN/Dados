function pedirCantidadGiros() {
    let cantidad = prompt("Cuantas veces quieres lanzar el dado");
    cantidad = parseInt(cantidad);
    return cantidad;
}

function generarNumeroAlAzar(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function lanzarDados() {
    const ValorDado1 = [];
    const ValorDado2 = [];

    let i = pedirCantidadGiros();
    while (i > 0) {
        const dado1 = generarNumeroAlAzar(1, 6);
        const dado2 = generarNumeroAlAzar(1, 6);
        ValorDado1.push(dado1);
        ValorDado2.push(dado2);
        i--;
    }
    return { ValorDado1, ValorDado2 };
}

function calcularResultado(ValorDado1, ValorDado2) {
    const resultadoSuma = ValorDado1.map((valor, indice) => {
        const suma = valor + ValorDado2[indice];
        return {
            ValorDado1: valor,
            ValorDado2: ValorDado2[indice],
            Total: suma,
        };
    });

    return resultadoSuma;
}

const lanzamientosDados = lanzarDados();
const resultado = calcularResultado(lanzamientosDados.ValorDado1, lanzamientosDados.ValorDado2);
console.table(resultado);
