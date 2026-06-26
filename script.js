/**
 * SCRIPT PRINCIPAL - Construyendo Ciudadanía
 * 
 * Funcionalidades:
 * 1. Scroll suave en enlaces de navegación
 * 2. Cambio de estilo navbar al hacer scroll
 * 3. Manejo de eventos de navegación
 */

// ============================================================
// 1. SCROLL SUAVE (SMOOTH SCROLL)
// ============================================================

/**
 * Detecta todos los enlaces de navegación y añade listener
 * para realizar scroll suave hacia la sección objetivo
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Obtiene el id de la sección destino
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Si la sección existe, hace scroll suave
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Cierra menú móvil si está abierto (opcional)
            closeMobileMenu();
        }
    });
});

// ============================================================
// 2. EFECTO NAVBAR AL SCROLL
// ============================================================

/**
 * Cambia el estilo de la navbar cuando el usuario hace scroll
 * hacia abajo. Añade la clase 'scrolled' para modificar el CSS
 */
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Si el scroll es mayor a 50px, añade la clase 'scrolled'
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para scroll hacia arriba/abajo
});

// ============================================================
// 3. FUNCIONES AUXILIARES
// ============================================================

/**
 * Cierra menú móvil (si implementas un hamburger menu en el futuro)
 * Por ahora es una función placeholder
 */
function closeMobileMenu() {
    // Aquí irá lógica para cerrar menú móvil
    // si decides implementar un menú hamburguesa
}

/**
 * Inicializa el script cuando el DOM está completamente cargado
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Construyendo Ciudadanía - Script Cargado');
    
    // Aquí puedes añadir inicializaciones adicionales
    initializePage();
});

/**
 * Función de inicialización de la página
 */
function initializePage() {
    // Verifica que todos los elementos críticos estén presentes
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    
    if (navbar && sections.length > 0) {
        console.log(`✅ Página inicializada: ${sections.length} secciones detectadas`);
    }
}

// ============================================================
// 4. EFECTO HOVER EN TARJETAS (OPCIONAL)
// ============================================================

/**
 * Añade un efecto de escala suave al pasar el mouse sobre tarjetas
 * (El efecto principal viene de CSS, esto es solo un refuerzo)
 */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

// ============================================================
// 5. DETECCIÓN DE SECCIÓN ACTIVA (OPCIONAL)
// ============================================================

/**
 * Actualiza el estado visual del menú según la sección visible
 * Útil para saber en qué parte de la página estás mientras scrolleas
 */
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    // Elimina clase activa de todos los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Añade clase activa al enlace correspondiente
    if (current) {
        document.querySelector(`.nav-link[href="#${current}"]`)?.classList.add('active');
    }
}

// ============================================================
// 6. MEJORAS DE ACCESIBILIDAD
// ============================================================

/**
 * Permite navegar con tecla Tab de manera más eficiente
 */
document.addEventListener('keydown', (e) => {
    // ESC para volver al inicio
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ============================================================
// FIN DEL SCRIPT
// ============================================================