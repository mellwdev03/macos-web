function setBg(bgId) {
  const desktop = document.getElementById("desk");

  desktop.style.background = `url(${bgId}) no-repeat center fixed`;
  desktop.style.backgroundSize = "cover";
}
