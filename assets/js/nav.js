/**
 * Navigation Enhancement Script
 * - Mobile hamburger menu toggle
 * - Active page highlighting
 */

(function() {
    'use strict';
    
    // Mobile Navigation Toggle
    function initMobileNav() {
        const navToggle = document.querySelector('.nav-toggle');
        const navContainer = document.querySelector('.nav-container');
        
        if (navToggle && navContainer) {
            navToggle.addEventListener('click', function() {
                const isOpen = navContainer.classList.contains('nav-open');
                navContainer.classList.toggle('nav-open');
                navToggle.setAttribute('aria-expanded', !isOpen);
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!navContainer.contains(event.target) && navContainer.classList.contains('nav-open')) {
                    navContainer.classList.remove('nav-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
    
    // Active Page Highlighting
    function highlightActivePage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(function(link) {
            const linkPath = new URL(link.href).pathname;
            
            // Check for exact match or if we're on a subpage
            if (linkPath === currentPath || 
                (linkPath !== '/' && currentPath.startsWith(linkPath.replace('.html', '')))) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        initMobileNav();
        highlightActivePage();
    }
})();