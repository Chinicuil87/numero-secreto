let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Ganaste acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        // El usuario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor')
        }else{
            asignarTextoElemento('p', 'El número es mayor')
        }  
        intentos ++; 
        lipiarCaja();     
    }
    return;
}

function lipiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generadorNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si ya se sortiaron todos los numeros.
    if  (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortiaron todos los cambios posibles.');
    }else{
        // si numero gnerado esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generadorNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesInicales() {
    asignarTextoElemento('h1','JUEGO DEL NÚMERO SECRETO');
    asignarTextoElemento('p',`Indica un número de 1 al ${numeroMaximo}`);
    numeroSecreto = generadorNumeroSecreto();
    intentos = 1;
}

function nuevoJuego() {
    //lipiar caja.
    lipiarCaja();
    //indicar mensaje de intervalo.
    //generar el numero aleatorio.
    //inicializar el numero de intentos.
    condicionesInicales();
    //Deshabilitar el boton.
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesInicales();
