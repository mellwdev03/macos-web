function setBg(bgId) {
  const desktop = document.getElementById("desk");
  const lockscreen2 = document.getElementById("lock-screen");

  desktop.style.background = `url(${bgId}) no-repeat center fixed`;
  desktop.style.backgroundSize = "cover";
  lockscreen2.style.background = `url(${bgId}) no-repeat center fixed`;
  lockscreen2.style.backgroundSize = "cover";
}
