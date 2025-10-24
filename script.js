document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to your server
            alert('Obrigado pelo seu interesse! Entraremos em contato em breve para agendar seu diagnóstico.');
            form.reset();
        });
    }
});

// Track form interactions
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('focus', function() {
        console.log(`Field ${this.id} focused`);
    });
});