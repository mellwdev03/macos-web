document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector(".dock"),
    t = document.querySelectorAll(".dock .item"),
    n = 66,
    o = 1.7,
    c = 240;
  e &&
    0 !== t.length &&
    (e.addEventListener("mousemove", (e) => {
      const s = e.clientX;
      t.forEach((e) => {
        const t = e.getBoundingClientRect(),
          d = t.left + t.width / 2,
          l = Math.abs(s - d);
        if (l < c) {
          const t = 1 + (o - 1) * Math.cos((l / c) * (Math.PI / 2)),
            s = n * t;
          ((e.style.width = `${s}px`), (e.style.height = `${s}px`));
        } else ((e.style.width = `${n}px`), (e.style.height = `${n}px`));
      });
    }),
    e.addEventListener("mouseleave", () => {
      t.forEach((e) => {
        ((e.style.width = `${n}px`), (e.style.height = `${n}px`));
      });
    }));
});
