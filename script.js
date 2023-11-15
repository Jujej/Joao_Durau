
  document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".nav-header");

    mobileMenu.addEventListener('click', () => {
        console.log("Menu móvel clicado"); // Adicione esta linha para debugar
        nav.classList.toggle("active");
    });
});
