let titleText = ["Dust2 Venta de Perifericos",
"Componentes", "Gaming y Tecnologia"];
let counter =0;

setInterval(function() {
  document.title = titleText[counter % titleText.length];
  counter++;
}, 2000);