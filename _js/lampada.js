const lampada = document.getElementById('lampada');
const bt_liga = document.getElementById('bt_liga');
const bt_desliga = document.getElementById('bt_desliga');
const bt_troca = document.getElementById('bt_troca');

function estaQuebrada() {
  return lampada.src.indexOf('quebrada') > -1;
}

function lampadaLiga() {
  if (!estaQuebrada()) {
    lampada.src = '_img/ligada.jpg';
  }
}

function lampadaDesliga() {
  if (!estaQuebrada()) {
    lampada.src = '_img/desligada.jpg';
  }
}

function lampadaQuebra() {
  lampada.src = '_img/quebrada.jpg';
}

function lampadaTroca() {
  if (estaQuebrada()) {
    lampada.src = '_img/desligada.jpg';
  }
}

bt_liga.addEventListener('click', lampadaLiga);
bt_desliga.addEventListener('click', lampadaDesliga);
bt_troca.addEventListener('click', lampadaTroca);
lampada.addEventListener('mouseover', lampadaLiga);
lampada.addEventListener('mouseleave', lampadaDesliga);
lampada.addEventListener('dblclick', lampadaQuebra);
