// Theme Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    
    // Load saved theme or use default (dark)
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    
    // Add click event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
            localStorage.setItem('portfolio-theme', theme);
        });
    });
    
    // Function to set theme
    function setTheme(theme) {
        // Remove active class from all buttons
        themeButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to current theme button
        const activeButton = document.querySelector(`[data-theme="${theme}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Set theme data attribute on body
        body.setAttribute('data-theme', theme);
    }
    
    // Contact button functionality
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Create a simple contact modal or alert
            // In a real application, this would open a contact form or link to email
            const email = 'leona.josephine@example.com';
            const subject = 'Portfolio Inquiry';
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
            
            // Open mailto link
            window.location.href = mailtoLink;
            
            // Alternative: Show an alert with contact info
            // alert('Email: leona.josephine@example.com\nFeel free to reach out!');
        });
    }
    
    // Smooth scroll animation for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});
