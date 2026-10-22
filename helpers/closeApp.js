function closeApp(app, dot) {
  const app2 = document.getElementById(app);
  const dot2 = document.getElementById(dot);

  app2.classList.remove("show");
  dot2.classList.remove("show");
}
