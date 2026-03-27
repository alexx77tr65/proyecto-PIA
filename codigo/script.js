// Menu Toggle para dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Upload Zone - Click para abrir selector de archivos
    const uploadZone = document.querySelector('.upload-zone');
    const fileInput = document.querySelector('.file-input');
    
    if (uploadZone && fileInput) {
        uploadZone.addEventListener('click', function() {
            fileInput.click();
        });

        // Drag and Drop
        uploadZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadZone.style.borderColor = '#ffffff';
            uploadZone.style.background = 'rgba(0, 217, 255, 0.2)';
        });

        uploadZone.addEventListener('dragleave', function() {
            uploadZone.style.borderColor = 'var(--primary-color)';
            uploadZone.style.background = 'rgba(0, 217, 255, 0.05)';
        });

        uploadZone.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadZone.style.borderColor = 'var(--primary-color)';
            uploadZone.style.background = 'rgba(0, 217, 255, 0.05)';
            console.log('Archivos:', e.dataTransfer.files);
        });

        // Cambio de archivo
        fileInput.addEventListener('change', function(e) {
            console.log('Archivos seleccionados:', e.target.files);
        });
    }

    // Formulario de Registro
    const registerForm = document.querySelector('.register-form form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por registrarte! Te enviaremos un email de confirmación.');
            this.reset();
        });
    }

    // Formulario de Contacto
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            this.reset();
        });
    }

    // Búsqueda
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value;
            if (query.trim()) {
                console.log('Buscando:', query);
                alert(`Buscando: ${query}`);
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    // Categorías
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.textContent.trim();
            console.log('Categoría seleccionada:', category);
            alert(`Mostrando archivos de: ${category}`);
        });
    });
});

// Efecto parallax en los shapes
window.addEventListener('scroll', function() {
    const shapes = document.querySelectorAll('.shape');
    const scrollPosition = window.scrollY;
    
    shapes.forEach((shape, index) => {
        shape.style.transform = `translateY(${scrollPosition * 0.5 * (index + 1)}px)`;
    });
});

// Animación de botones
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-large');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
