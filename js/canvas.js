const canvas = document.querySelector("#ahorcado");
const pincel = canvas.getContext("2d");

function dibujarBase() {
    pincel.beginPath();
    pincel.lineWidth = "5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(0, 355);
    pincel.lineTo(294, 355);
    pincel.stroke();
  }
  dibujarBase();
  
  function dibujarPalo() {
    pincel.beginPath();
    pincel.lineWidth = "4.5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(80, 3);
    pincel.lineTo(80, 355);
    pincel.stroke();
  }
  
  function dibujarPaloDerecha() {
    pincel.beginPath();
    pincel.lineWidth = "4.5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(80, 5);
    pincel.lineTo(258, 5);
    pincel.stroke();
  }
  
  function dibujarPaloAbajo() {
    pincel.beginPath();
    pincel.lineWidth = "4.5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(258, 3);
    pincel.lineTo(258, 55);
    pincel.stroke();
  }
  
  function dibujarCabeza() {
    pincel.beginPath();
    pincel.arc(258, 85, 30, 0, 2 * 3.14);
    pincel.lineWidth = "4.5";
    pincel.moveTo(258, 3);
    pincel.stroke();
  }
  
  function dibujarCuerpo() {
    pincel.beginPath();
    pincel.lineWidth = "4.5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(258, 115);
    pincel.lineTo(258, 255);
    pincel.stroke();
  }
  
  function dibujarBrazoIzq() {
    pincel.beginPath();
    pincel.lineWidth = "4.5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(258, 115);
    pincel.lineTo(226, 175);
    pincel.stroke();
  }
  
  function dibujarBrazoDer() {
    pincel.beginPath();
    pincel.lineWidth = "4.5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(258, 115);
    pincel.lineTo(290, 175);
    pincel.stroke();
  }
  
  function dibujarPiernaIzq() {
    pincel.beginPath();
    pincel.lineWidth = "4.5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(258, 254);
    pincel.lineTo(226, 315);
    pincel.stroke();
  }
  
  function dibujarPiernaDer() {
    pincel.beginPath();
    pincel.lineWidth = "4.5";
    pincel.strokeStyle = "#ec0e0e";
    pincel.moveTo(258, 254);
    pincel.lineTo(290, 315);
    pincel.stroke();
  }