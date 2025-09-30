
// =========================
// SLIDESHOW HERO
// =========================

// Lista de imagens do slideshow
const imagens = [
  "imagens/tanque1.jpeg",
  "imagens/tanque2.jpeg",
  "imagens/tanque3.jpeg",
  "imagens/açocarbono2.jpeg",
  "imagens/açoinox1.jpeg",
  "imagens/estruturametalica.jpeg"
];

let indice = 0;
const heroSection = document.querySelector(".hero");

// Função para trocar imagem
function trocarImagem() {
  heroSection.style.backgroundImage = `url('${imagens[indice]}')`;
  indice = (indice + 1) % imagens.length;
}


// Troca inicial
trocarImagem();

// Troca a cada 5 segundos
setInterval(trocarImagem, 5000);

// =========================
// MENU MOBILE (hambúrguer)
// =========================
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

if (menuToggle && navUl) {
  menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });
}

