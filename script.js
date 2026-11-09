const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });
}

// Animação suave de entrada dos blocos conforme a pessoa rola a página.
const animatedItems = document.querySelectorAll(
  ".hero-copy, .hero-art, .section-heading, .feature-card, .quote-inner, .page-hero, .article-content, .side-note, .contact-card, .contact-form"
);
animatedItems.forEach((item, index) => {
  item.classList.add("reveal");
  if (item.classList.contains("feature-card")) item.style.setProperty("--reveal-delay", `${index * 100}ms`);
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  animatedItems.forEach((item) => observer.observe(item));
} else {
  animatedItems.forEach((item) => item.classList.add("is-visible"));
}

// O formulário usa FormSubmit para encaminhar as mensagens ao e-mail informado.
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", () => {
    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Enviando sua mensagem… Você poderá ser redirecionado para a confirmação do envio.";
  });
}
