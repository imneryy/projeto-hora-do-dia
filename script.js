function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${min} H.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = "fotomanha.png";
    document.body.style.background =
      "#linear-gradient(-45deg, ##e1eec3, ##f05053)";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    img.src = "fototarde.png";
    document.body.style.background =
      "linear-gradient(-45deg, #f12711, #f5af19)";
  } else {
    // Boa noite
    img.src = "fotonoite.png";
    document.body.style.background =
      "linear-gradient(-45deg, ##141E30, ##243B55)";
  }
}
