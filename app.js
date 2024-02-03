let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else
    {
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento('p','El número secreto es menor...');
        }

        else
        {
            asignarTextoElemento('p','El número secreto es mayor...');
        }

        intentos++;
        limpiarCaja();
    }
    
    return;
}

function condicionesInicial()
{
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja()
{
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);

    //Si ya sorteamos todos los números.
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles...');
    }

    else
    {
        //Si el número generado esta en la lista...
        if(listaNumerosSorteados.includes(numeroGenerado)) 
        {
            return generarNumeroSecreto();
        }

        else
        {
            console.log(listaNumerosSorteados);
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego()
{
    //Limpiar la caja.
    limpiarCaja();

    //Generar el número aleatorio;
    condicionesInicial();

    //Desabilitar el boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesInicial();

//Notas:
//console.log(typeof(numeroDeUsuario)); Utiles para ver que tipo de dato es...
//El === es para validar que el valor sea el mismo de un atributo y de otra, pero ademas verifica que estos sean del mismo tipo.