// Smooth scrolling for navigation links
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

// Mobile menu toggle functionality
function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger-menu');
    navLinks.classList.toggle('active');
    // Optional: Change hamburger icon (e.g., to 'X')
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

// Mobile menu toggle event listener
document.addEventListener('DOMContentLoaded', function() {
    // Attach the toggleMobileMenu function to the hamburger icon's click event
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (hamburgerMenu) {
        console.log("Script.js: Found hamburger menu, attaching listener.");
        hamburgerMenu.addEventListener('click', toggleMobileMenu);
        console.log("Script.js: Listener attached to hamburger menu.");
    } else {
        console.warn("Script.js: Could not find hamburger menu (#hamburger-menu).");
    }
    console.log("Script.js: DOMContentLoaded initialization complete.");
});


