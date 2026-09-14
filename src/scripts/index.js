function updateClock() {
  if (clock) {
    const e = new Date();
    clock.textContent =
      e.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) +
      " " +
      e.toLocaleDateString([], {
        day: "2-digit",
        weekday: "short",
      });
  }
}

function setBG(e, t = !0) {
  desktop &&
    ((desktop.style.background = `url(${e}) no-repeat center fixed`),
    (desktop.style.backgroundSize = "cover"),
    t && localStorage.setItem("desktopBackground", e));
}

function openApp(e, t) {
  const n = document.getElementById(e),
    o = document.getElementById(t);
  (n && n.classList.add("show"), o && o.classList.add("active"));
}

function closeApp(e, t) {
  const n = document.getElementById(e),
    o = document.getElementById(t);
  (n && (n.classList.remove("show"), n.classList.remove("maximize")),
    o && o.classList.remove("active"));
}

function minApp(e) {
  const t = document.getElementById(e);
  t && t.classList.remove("show");
}

function maximizeApp(e) {
  const t = document.getElementById(e);
  t &&
    ((t.style.transformOrigin = "center center"),
    t.classList.toggle("maximize"));
}

function onSearch() {
  const e = document.getElementById("search"),
    t = document.getElementById("pages");
  if (!e || !t) return;
  let n = e.value.trim();
  n &&
    (n.startsWith("http://") || n.startsWith("https://")
      ? (t.src = n)
      : n.includes(".") && !n.includes(" ")
        ? (t.src = `https://${n}`)
        : (t.src = `https://www.google.com/search?q=${encodeURIComponent(n)}&igu=1`));
}
const context_menu = document.getElementById("context-menu"),
  body = document.querySelector("body");
(body.addEventListener("contextmenu", function (e) {
  (e.preventDefault(),
    (context_menu.style.left = `${e.clientX}px`),
    (context_menu.style.top = `${e.clientY}px`),
    context_menu.classList.add("active"));
}),
  body.addEventListener("click", function () {
    context_menu.classList.remove("active");
  }));
const hello = document.getElementById("hello");
setInterval(() => {
  hello && ((hello.style.opacity = "0"), (hello.style.pointerEvents = "none"));
}, 5e3);
const start_sscreen = document.getElementById("start-screen");
setInterval(() => {
  start_sscreen &&
    ((start_sscreen.style.opacity = "0"),
    (start_sscreen.style.pointerEvents = "none"));
}, 5e3);
const switcher_theme = document.getElementById("switcher-theme");
switcher_theme &&
  switcher_theme.addEventListener("click", function () {
    body.classList.toggle("light-theme");
  });
const clock = document.getElementById("clock");
(updateClock(), setInterval(updateClock, 1e3));
const note = document.getElementById("note");
note &&
  (note.onclick = function () {
    ((note.style.opacity = 0), (note.style.pointerEvents = "none"));
  });
const desktop = document.getElementById("desktop"),
  savedBG = localStorage.getItem("desktopBackground");
savedBG && setBG(savedBG, !1);
const menubar = document.getElementById("menubar");
menubar &&
  menubar.addEventListener("contextmenu", function () {
    context_menu && (context_menu.style.opacity = "0");
  });
const dark1 = document.getElementById("dark-theme"),
  light1 = document.getElementById("light-theme");
(dark1 &&
  dark1.addEventListener("click", function () {
    body.classList.remove("light-theme");
  }),
  light1 &&
    light1.addEventListener("click", function () {
      body.classList.add("light-theme");
    }));
const menub = document.getElementById("menubar"),
  toggled = document.getElementById("switch-menu");
toggled &&
  menub &&
  toggled.addEventListener("click", function () {
    menub.classList.toggle("mode");
  });
const open_control = document.getElementById("open-control"),
  control_center = document.getElementById("control-center");
open_control.addEventListener("click", function () {
  control_center.classList.toggle("show");
});
const switch_theme = document.getElementById("switch-theme");
switch_theme.addEventListener("click", function () {
  body.classList.toggle("light-theme");
});
const thedock = document.getElementById("dock"),
  themenu = document.getElementById("menubar");
setInterval(() => {
  ((thedock.style.bottom = "6px"), (themenu.style.top = "0"));
}, 5e3);
const searchInput = document.getElementById("search");
searchInput &&
  searchInput.addEventListener("keypress", function (e) {
    "Enter" === e.key && onSearch();
  });
const menu_apple = document.getElementById("menu-apple"),
  menu_context = document.getElementById("menu-context");
menu_apple.addEventListener("click", function () {
  menu_context.classList.toggle("show");
});
