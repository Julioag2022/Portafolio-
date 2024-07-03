document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate__fadeIn');
            card.style.opacity = '1';
        }, index * 200); // Retraso de 200ms entre cada imagen
    });
});

