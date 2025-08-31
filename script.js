// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Add animation classes when element is in view
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else if (entry.target.classList.contains('info-box')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
});

// Apply initial styles and observe elements
document.querySelectorAll('.project-card, .info-box').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    animateOnScroll.observe(element);
});

// Navbar scroll behavior
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove shadow based on scroll position
    if (currentScroll > 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle (if needed for smaller screens)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.classList.add('mobile-menu-btn');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Add to navbar only on mobile
    if (window.innerWidth <= 768) {
        navbar.appendChild(hamburger);
        navLinks.classList.add('mobile-nav');
    }
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Initialize mobile menu
window.addEventListener('load', createMobileMenu);
window.addEventListener('resize', createMobileMenu);
