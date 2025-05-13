let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


// Detectar a rolagem da página e ativar o link correspondente
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Remove a classe 'active' de todos os links
      navlinks.forEach(link => {
        link.classList.remove('active');
      });

      // Adiciona a classe 'active' ao link correspondente
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });
};


const colorIcon = document.getElementById('colorIcon');
const colorPicker = document.getElementById('colorPicker');

// Quando o ícone é clicado, abre o seletor de cores
colorIcon.addEventListener('click', function() {
  console.log('Ícone clicado!');
  colorPicker.click();
});

// Quando o input de cor é focado (seletor abre)
colorPicker.addEventListener('focus', function() {
  console.log('Seletor de cor aberto');
  colorIcon.classList.add('color-picker-active');
});

// Quando o usuário seleciona a cor
colorPicker.addEventListener('input', function() {
  const selectedColor = colorPicker.value;
  
  // Atualiza a variável CSS --main-color no :root
  document.documentElement.style.setProperty('--main-color', selectedColor);

  // Aplica a cor escolhida ao ícone
  colorIcon.style.color = selectedColor;
});

// Quando o input perde o foco (seletor fecha)
colorPicker.addEventListener('blur', function() {
  colorIcon.classList.remove('color-picker-active');
});

document.querySelectorAll('.nav-menu a, .navbar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('checkbox').checked = false;
  });
});

document.documentElement.style.scrollBehavior = "smooth";






