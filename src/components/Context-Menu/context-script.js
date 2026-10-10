const contextMenu = document.getElementById("context-menu");

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  contextMenu.style.left = event.clientX + "px";
  contextMenu.style.top = event.clientY + "px";
  contextMenu.classList.add("show");
});

document.addEventListener("click", function (event) {
  if (!contextMenu.contains(event.target)) {
    contextMenu.classList.remove("show");
  }
});
