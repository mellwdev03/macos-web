const allElW = [
  "message",
  "vscode",
  "app_store",
  "maps",
  "finder",
  "terminal",
  "mail",
  "safari",
  "settings",
  "about",
];

allElW.forEach((id) => {
  const element = document.getElementById(id);
  if (element) {
    new NeoDrag.Draggable(element, {
      bounds: { top: 30 },
      handle: ".header",
    });
  }
});
