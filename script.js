document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
