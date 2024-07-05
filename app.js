let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let NumeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //para "coger" lo ingresado por el usuario;
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el número en ' + intentos + ((intentos > 1) ? ' intentos' : ' intento'));
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (numeroDeUsuario < numeroSecreto) {  //El usuario no acerto
        asignarTextoElemento('p', "El número secreto es más grande");
    } else {
        asignarTextoElemento('p', "El número secreto es más pequeño");
    }
    limpiarCaja();
    intentos++;
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == NumeroMaximo) {
        asignarTextoElemento("p", "Ya se asignaron todos los números posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function IniciarElementos() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${NumeroMaximo}`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar el intervalo de números
    IniciarElementos();
    //Deshabilitar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    //Reiniciar el número de intentos
    return;

}

IniciarElementos();