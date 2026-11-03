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

  const isDarkMode = body.classList.contains("dark");
  localStorage.setItem("themeSave", isDarkMode ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const themeSave = localStorage.getItem("themeSave");
  if (themeSave === "dark") {
    body.classList.add("dark");
  }
});
document.documentElement.requestFullscreen();
const load_screen = document.getElementById("load-screen");

setInterval(() => {
  load_screen.style.opacity = 0;
  load_screen.style.pointerEvents = "none";
}, 3000);

const notch = document.getElementById("notch-2");
const id_notch = document.getElementById("notch");

id_notch.addEventListener("click", function () {
  notch.classList.toggle("show");
});
const spotlight2 = document.getElementById("spotlight");
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.altKey) {
    spotlight2.classList.toggle("show");
  }
});

const lockscreen2 = document.getElementById("lock-screen");
const detail = document.getElementById("detail");

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    lockscreen2.style.opacity = 0;
    lockscreen2.style.pointerEvents = "none";
    detail.style.opacity = 0;
    detail.style.pointerEvents = "none";
  }
});
const lockscreen_item = document.getElementById("lockscreen-item");

lockscreen_item.addEventListener("click", function () {
  lockscreen2.style.opacity = 1;
  lockscreen2.style.pointerEvents = "all";
  detail.style.opacity = 1;
  detail.style.pointerEvents = "none";
});
const restart_item = document.getElementById("restart-item");
const black_screen = document.getElementById("black-screen");

restart_item.addEventListener("click", function () {
  black_screen.classList.add("show");
  setInterval(() => {
    location.reload();
  }, 500);
});

const shut_item = document.getElementById("shut-item");
const black_span = document.querySelector("#black-screen span");

shut_item.addEventListener("click", function (event) {
  black_screen.classList.add("show");
  black_span.style.opacity = 1;
});
