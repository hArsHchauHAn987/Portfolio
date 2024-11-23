// Add active class to sections on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (window.scrollY > section.offsetTop - window.innerHeight + 100) {
            section.classList.add('active');
        }
    });
});
