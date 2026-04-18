// Código de scroll que ya funciona
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-principal');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Código del menú hamburguesa CORREGIDO
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-principal"); // ← Cambiado: ahora selecciona por clase
const navContainer = document.querySelector(".nav-container");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("open");
});

// Cerrar menú al hacer clic en un enlace (cuando los agregues al menú móvil)
document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.classList.remove('open');
    }
});