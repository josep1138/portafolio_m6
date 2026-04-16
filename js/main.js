// Seleccionamos los elementos del DOM
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.mobile-nav a');

// Función para abrir
menuOpen.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    // Evitamos que el fondo haga scroll mientras el menú está abierto
    document.body.style.overflow = 'hidden';
});

// Función para cerrar
const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
};

menuClose.addEventListener('click', closeMenu);

// Cerrar el menú automáticamente al hacer clic en un enlace (ancla)
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});