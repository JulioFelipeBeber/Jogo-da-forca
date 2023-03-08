var tecnologias = ["goku", "goten", "vegeta", "trunks", "goten","goku", "bulma", "videl", "freeza", "cell"];
var palavraSecreta =
  tecnologias[Math.floor(Math.random() * tecnologias.length)];
var letrasErradas = [];
var letrasCorretas = [];



document.addEventListener("keydown", (evento) => {
  var codigo = evento.keyCode; // 65 - 90 (intervalo)
  if (isLetra(codigo)) {
    var letra = evento.key;
    if (letrasErradas.includes(letra)) {
      mostrarAvisoLetraRepetida();
    } else {
      if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
      } else {
        letrasErradas.push(letra);
      }
    }
    atualizarJogo();
  }
});

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
}

function mostrarLetrasErradas() {
  var div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "<h3>Letras erradas</h3>";
  letrasErradas.forEach((letra) => {
    div.innerHTML += `<span>${letra}</span>`;
  });
}

function mostrarLetrasCertas() {
  var container = document.querySelector(".palavra-secreta-container");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((letra) => {
    if (letrasCorretas.includes(letra)) {
      container.innerHTML += `<span>${letra}</span>`;
    } else {
      container.innerHTML += `<span>_</span>`;
    }
  });
}

function checarJogo() {
  let mensagem = "";
  var container = document.querySelector(".palavra-secreta-container");
  var partesCorpo = document.querySelectorAll(".forca-parte");

  if (letrasErradas.length === partesCorpo.length) {
    mensagem = "Fim de jogo! Você perdeu!";
  }

  if (palavraSecreta === container.innerText) {
    mensagem = "Parabéns! Você ganhou!";
  }

  if (mensagem) {
    document.querySelector("#mensagem").innerHTML = mensagem;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function desenharForca() {
  var partesCorpo = document.querySelectorAll(".forca-parte");
  for (let i = 0; i < letrasErradas.length; i++) {
    partesCorpo[i].style.display = "block";
  }
}

function mostrarAvisoLetraRepetida() {
  var aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1000);
}

function isLetra(codigo) {
  return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() {
  window.location.reload();
}