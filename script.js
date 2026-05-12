const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");

let sparkles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  sparkles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.4,
    a: Math.random() * 0.5 + 0.15,
    speed: Math.random() * 0.25 + 0.05
  }));
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sparkles.forEach((s) => {
    s.y -= s.speed;
    if (s.y < -5) s.y = canvas.height + 5;

    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(166, 95, 130, ${s.a})`;
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
resize();
draw();
