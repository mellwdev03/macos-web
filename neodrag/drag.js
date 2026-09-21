window.addEventListener("load", function () {
  var systemWindows = [
    "finder",
    "music",
    "settings",
    "safari",
    "notes",
    "message",
    "vscode",
    "about",
  ];

  systemWindows.forEach(function (windowId) {
    var element = document.getElementById(windowId);
    if (element) {
      var NeoDragConstructor =
        window.NeoDrag?.Draggable ||
        window.neodrag?.Draggable ||
        window.neodrag;

      if (NeoDragConstructor) {
        new NeoDragConstructor(element, {
          handle: ".header",
          bounds: {
            top: 32,
          },
        });
      }
    }
  });
});
var dragInstance = new NeoDrag.Draggable(document.getElementById("toggled"), {
  axis: "x",
  bounds: {
    left: 650,
    right: 640,
  },
});
var dragInstance2 = new Neodrag.Draggable(systemWindows, {
  bounds: "body",
});
