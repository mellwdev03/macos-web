new Audio("../../assets/sounds/StartupPowerMacPCI.wav").play();

const clock = document.querySelectorAll(".clock");

function updateEL() {
  clock.forEach((clockEl) => {
    const nowis = new Date();
    const h = nowis.getHours().toString().padStart(2, "0");
    const m = nowis.getMinutes().toString().padStart(2, "0");

    const stringEl = `${h}:${m}`;

    clockEl.textContent = stringEl;
  });
}
updateEL();
setInterval(updateEL, 1000);
const cc = document.querySelector(".cc");
const pc = document.querySelector(".panel-control");

cc.addEventListener("click", function () {
  pc.classList.toggle("show");
});
const theme1 = document.getElementById("theme");
const body = document.querySelector("body");

theme1.addEventListener("click", function () {
  body.classList.toggle("dark");
});
document.documentElement.requestFullscreen();
const load_screen = document.getElementById("load-screen");

setInterval(() => {
  load_screen.style.opacity = 0;
  load_screen.style.pointerEvents = "none";
}, 3000);

const notch = document.querySelector(".notch");
const id_notch = document.getElementById("notch");

id_notch.addEventListener("click", function () {
  notch.classList.toggle("show");
});
