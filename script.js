// ==========================================
// JavaScript for BoldAssests Website
// ==========================================

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            alert('Search feature coming soon! You searched for: ' + searchTerm);
            searchInput.value = '';
        }
    });

    // Allow Enter key to search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            // Simulate subscription
            alert('Thank you for subscribing with: ' + email);
            emailInput.value = '';
        }
    });
}

// Add click handlers for "Read More" buttons
const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Full blog post will load here!');
    });
});

// Add click handlers for "Start Learning" links
const guideLinks = document.querySelectorAll('.guide-link');
guideLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Guide page will load here!');
    });
});

// CTA Button handler
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
        const featuredSection = document.getElementById('blog');
        if (featuredSection) {
            featuredSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.card, .tip-card, .guide-item, .news-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Active navigation link highlight
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', function() {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
        }
    });
});

// Sticky header effects
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Initialize tooltips (future enhancement)
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(el => {
        el.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = el.getBoundingClientRect();
            tooltip.style.top = (rect.top - 10) + 'px';
            tooltip.style.left = rect.left + 'px';
        });
    });
}

// Dark mode toggle (future enhancement)
function setupDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    function toggleDarkMode(isDark) {
        if (isDark) {
            document.documentElement.style.setProperty('--bg-white', '#1f2937');
            document.documentElement.style.setProperty('--bg-light', '#111827');
            document.documentElement.style.setProperty('--text-dark', '#f3f4f6');
            document.documentElement.style.setProperty('--text-light', '#d1d5db');
        }
    }
    
    // Optional: uncomment to enable dark mode
    // toggleDarkMode(prefersDark.matches);
    // prefersDark.addEventListener('change', (e) => toggleDarkMode(e.matches));
}

// Performance: Lazy load images (if added in future)
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('BoldAssests website loaded successfully!');
    lazyLoadImages();
    setupDarkMode();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + S to focus search
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        searchInput.focus();
    }
});
