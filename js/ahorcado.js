const botonIniciarJuego = document.querySelector("#boton1");
const botonAgregarNuevaPalabra= document.querySelector("#boton2");
const pantPrincipal = document.querySelector(".pantallaPrincipal");
const TABLERO = document.querySelector(".tablero");
const botonEmpezarDeNuevo1 = document.querySelector("#boton3");
const botonEmpezarDeNuevo2 = document.querySelector("#boton4");
const botonDesistir = document.querySelector("#boton5");
const FORM = document.querySelector("#form-container");
const INPUT = document.querySelector("#input-main");
const SENDBTN = document.querySelector("#palabra-send");
const botonCancelar = document.querySelector("#cancel");
const botonSalir = document.querySelector("#boton6");
const MOBILE = document.querySelector("#mobile");

botonIniciarJuego.addEventListener("click", function () {
  if (window.matchMedia("(min-width: 600px)").matches) {
    ventanaJuegosp();
    sortearPalabra(LISTAPALABRAS);
    dibujarGuiones();
    verificarTecla();
  } else {
    ventanaJuegospMobile();
    sortearPalabra(LISTAPALABRAS);
    dibujarGuiones();
    verificarTeclaMobile();
  }
});

botonAgregarNuevaPalabra.addEventListener("click", function (e) {
  ventanaJuegomp();
});

botonEmpezarDeNuevo1.addEventListener("click", function () {
  resetsp();
});

botonEmpezarDeNuevo2.addEventListener("click", function () {
  resetmp();
});

botonDesistir.addEventListener("click", function () {
  boton();
});

function boton() {
  outputGuiones.innerHTML = palabraSorteada.split("").join(" ") + " ";
}

/*TABLERO*/

function ventanaJuegospMobile() {
  pantPrincipal.classList.add("hide");
  TABLERO.classList.remove("hide");
  botonEmpezarDeNuevo1.classList.remove("hide");
  botonEmpezarDeNuevo2.classList.add("hide");
}

function verificarTeclaMobile() {
  MOBILE.addEventListener("input", function (e) {
    setTimeout(() => {
      MOBILE.value = "";
    }, 150);
    let letraPresionada = e.data;
    letraSeleccionada = letraPresionada;
    let padron = /[A-Z]/g;
    let resultadoPadron = padron.test(letraPresionada);

    if (resultadoPadron != true) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "INGRESE LETRAS EN MAYUSCULAS",
        showConfirmButton: false,
        timer: 1400,
      });
    } else {
      dibujarPalabra();
      verificarGano();
      verificarPerdio();
    }
  });
}

/*BOTON AGREGAR NUEVA PALABRA*/

SENDBTN.addEventListener("click", function (e) {
  e.preventDefault;
  palabraSorteada = INPUT.value;
  INPUT.focus();
  let pattern = /[^A-Z]/g;
  let patternResult = pattern.test(palabraSorteada);
  if (patternResult == false) {
    dibujarGuiones();
    mostrarTableroJuego();
    verificarTecla();
    verificarTeclaMobile();
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Se paso el limite de letras",
    });
    e.preventDefault;
    INPUT.value = "";
    INPUT.focus();
    INPUT.select();
  }
});

botonCancelar.addEventListener("click", function () {
  document.location.reload(true);
});

botonSalir.addEventListener("click", function () {
  document.location.reload(true);
});

/*TABLERO AGREGAR PALABRA NUEVA*/

function ventanaJuegomp() {
  pantPrincipal.classList.add("hide");
  botonEmpezarDeNuevo1.classList.add("hide");
  FORM.classList.remove("hide");
  INPUT.select();
}

function mostrarTableroJuego() {
  FORM.classList.add("hide");
  TABLERO.classList.remove("hide");
  botonEmpezarDeNuevo2.classList.remove("hide");
}

/*PALABRAS*/

const LISTAPALABRAS = [
  "plato",
  "mesa",
  "azucar",
  "valorar",
  "ritmo",
]; 

/*PALABRAS*/

function resetsp() {
  sortearPalabra(LISTAPALABRAS);
  dibujarGuiones();
  pincel.clearRect(0, 0, 294, 353);
  letraErradaOutput.innerHTML = "";
  letrasIncorrectas = "";
  intentos = 0;
}

function resetmp() {
  document.location.reload(true);
}

/*INICAR JUEGO*/

String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

let letraErradaOutput = document.querySelector("#palabrasEquivocadas");
let outputGuiones = document.querySelector("#letra-guiones");

let palabraSorteada = "";
let palabraGuiones = "";
let letrasIncorrectas = "";
let intentos = 0;

function sortearPalabra(lista) {
  let randomIndex = Math.floor(Math.random() * lista.length);
  return (palabraSorteada = lista[randomIndex].toString().toUpperCase());
}

function dibujarGuiones() {
  let palabraConvertida = palabraSorteada.replace(/[A-Z]/gm, "_ ");
  palabraGuiones = palabraConvertida;
  outputGuiones.innerHTML = palabraGuiones;
}

function verificarTecla() {
  window.addEventListener("keypress", function (e) {
    let letraPresionada = e.key;
    letraSeleccionada = letraPresionada;
    let padron = /[A-Z]/g;
    let resultadoPadron = padron.test(letraPresionada);

    if (resultadoPadron != true) {
      swal.fire({
        position: "center",
        icon: "CUIDADO!",
        title: "SOLO INGRESE LETRAS EN MAYUSCULAS",
      });
    }else{
      dibujarPalabra();
      verificarGano();
      verificarPerdio();
    }
  });
}

function dibujarPalabra() {
  let fallo = true;
  for (const i in palabraSorteada) {
    if (letraSeleccionada == palabraSorteada[i]) {
      palabraGuiones = palabraGuiones.replaceAt(i * 2, letraSeleccionada);
      fallo = false;
    }
  }

  outputGuiones.innerHTML = palabraGuiones;

  if (fallo) {
    dibujarPalo();
    comprobarLetraIncorrecta();

    if (intentos == 2) {
      dibujarPaloDerecha();
      letrasIncorrectas += letraSeleccionada;
    }
    if (intentos == 3) {
      dibujarPaloAbajo();
    }
    if (intentos == 4) {
      dibujarCabeza();
    }
    if (intentos == 5) {
      dibujarCuerpo();
    }
    if (intentos == 6) {
      dibujarBrazoIzq();
    }
    if (intentos == 7) {
      dibujarBrazoDer();
    }
    if (intentos == 8) {
      dibujarPiernaIzq();
    }
    if (intentos == 9) {
      dibujarPiernaDer();
    }
  }
}

function comprobarLetraIncorrecta() {
  if (letrasIncorrectas.includes(letraSeleccionada) == false && intentos < 9) {
    letrasIncorrectas += letraSeleccionada;
    letraErradaOutput.innerHTML += letraSeleccionada
      .replace("CapsLock", "")
      .replace("Enter", "");
    intentos++;
  } else {
    Swal.fire({
      position: "center",
      icon:"Oops",
      title: "YA INGRESASTE ESA LETRA!",
    });
  }
}

function verificarGano() {
  let palabraSorteadaIgualada = palabraSorteada.split("").join(" ") + " ";
  if (palabraSorteadaIgualada == palabraGuiones) {
    Swal.fire({
      title: "BUEN TRABAJO!",
      text: "GANADOR",
      position: "center",
    });
  }
}

function verificarPerdio() {
  if (intentos == 9) {
    swal.fire({
      position: "center",
      text: `Lo siento,la palabra era ${palabraSorteada}`,
      title: "PERDEDOR!",
    });

    boton();
  }
}

/*INICAR JUEGO*/
function ventanaJuegosp() {
  pantPrincipal.classList.add("hide");
  TABLERO.classList.remove("hide");
  botonEmpezarDeNuevo1.classList.remove("hide");
  botonEmpezarDeNuevo2.classList.add("hide");
}