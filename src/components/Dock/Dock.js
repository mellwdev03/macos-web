const dockEl = document.getElementById("dock");
const itemsEl = document.querySelectorAll(".dock-item");

dockEl.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;

  itemsEl.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemX = rect.left + rect.width / 2;
    const distance = Math.abs(mouseX - itemX);
    const scale = 117;
    const base = 54;
    const t = 240;
    if (distance < t) {
      const proximity = 1 - distance / t;

      const distance2 = base + (scale - base) * proximity;

      item.style.width = `${distance2}px`;
      item.style.height = `${distance2}px`;
    } else {
      item.style.width = "54px";
      item.style.height = "54px";
    }
  });
});

dockEl.addEventListener("mouseleave", () => {
  itemsEl.forEach((item) => {
    item.style.width = "54px";
    item.style.height = "54px";
  });
});
