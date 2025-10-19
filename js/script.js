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

// Theme toggle functionality
// Function to set the theme
function setTheme(themeName) {
    // Add the theme class to the document root
    document.documentElement.className = themeName;
    // Save the theme name in localStorage
    localStorage.setItem('theme', themeName);

    // Update the icon based on the theme
    const iconElement = document.querySelector('#theme-toggle i'); // Target the <i> inside the button
    if (themeName === 'dark-mode') {
        iconElement.classList.remove('fa-moon'); // Remove moon icon
        iconElement.classList.add('fa-sun');    // Add sun icon
    } else {
        iconElement.classList.remove('fa-sun'); // Remove sun icon
        iconElement.classList.add('fa-moon');   // Add moon icon
    }
}

// Function to toggle between themes
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        setTheme(''); // Switch to light mode (no class)
    } else {
        setTheme('dark-mode'); // Switch to dark mode
    }
}

// Initialize the theme when the page loads
// Check localStorage for a saved theme, otherwise default to light
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(''); // Default to light mode if no preference is saved
    }

    // Attach the toggleTheme function to the button's click event
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});