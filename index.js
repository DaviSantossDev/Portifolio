const canvas = document.getElementById("mouseTrail");
const ctx = canvas.getContext("2d");

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Pega a cor principal do CSS
const rootStyle = getComputedStyle(document.documentElement);
const mainColor = rootStyle.getPropertyValue("--main-color").trim();

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 2;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = (Math.random() - 0.5) * 1.5;
    this.life = 30;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
    this.size *= 0.95;
  }
  draw() {
    ctx.fillStyle = currentMouseColor + "80"; // 50% de opacidade
ctx.shadowColor = currentMouseColor;
ctx.shadowBlur = 15;


    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

let particlesArray = [];

window.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 3; i++) {
    particlesArray.push(new Particle(e.clientX, e.clientY));
  }
});

function animate() {
  ctx.clearRect(0, 0, width, height);
  particlesArray = particlesArray.filter((p) => p.life > 0 && p.size > 0.5);
  particlesArray.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

// Detectar a rolagem da página e ativar o link correspondente
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Remove a classe 'active' de todos os links
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Adiciona a classe 'active' ao link correspondente
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
};



// Agrupa os elementos de troca de cor: um para desktop e outro para mobile
const colorPickers = [
  {
    icon: document.getElementById("colorIcon"), // Ícone da paleta no desktop
    picker: document.getElementById("colorPicker"), // Input color no desktop
  },
  {
    icon: document.getElementById("colorIconMobile"), // Ícone da paleta no mobile
    picker: document.getElementById("colorPickerMobile"), // Input color no mobile
  },
];

// Para cada conjunto (ícone + input color)
// Inputs
const colorPickerDesktop = document.getElementById("colorPicker");
const colorPickerMobile = document.getElementById("colorPickerMobile");

// Variável que será usada no rastro
let currentMouseColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--main-color")
  .trim();

// Função para atualizar a cor em tudo
function updateMainColor(newColor) {
  if (!newColor) return;

  // Seta a cor no CSS root
  document.documentElement.style.setProperty("--main-color", newColor);

  // Atualiza inputs (sem loop)
  if (colorPickerDesktop && colorPickerDesktop.value !== newColor) {
    colorPickerDesktop.value = newColor;
  }

  if (colorPickerMobile && colorPickerMobile.value !== newColor) {
    colorPickerMobile.value = newColor;
  }

  // Atualiza o rastro
  currentMouseColor = newColor;
}

// Eventos dos inputs
if (colorPickerDesktop) {
  colorPickerDesktop.addEventListener("input", (e) => {
    updateMainColor(e.target.value);
  });
}

if (colorPickerMobile) {
  colorPickerMobile.addEventListener("input", (e) => {
    updateMainColor(e.target.value);
  });
}

document.querySelectorAll(".tooltip").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".tooltip").forEach((t) => {
      if (t !== el) t.classList.remove("show-tooltip");
    });
    el.classList.toggle("show-tooltip");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tooltip")) {
    document
      .querySelectorAll(".tooltip")
      .forEach((t) => t.classList.remove("show-tooltip"));
  }
});




document.documentElement.style.scrollBehavior = "smooth";




const form = document.forms['contato'];
const modal = document.getElementById('modal-aviso');
const fecharBtn = document.querySelector('.close-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // trava o envio de verdade
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
});

fecharBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});






const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});




