const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =
        `rotateY(${(x - rect.width / 2) / 20}deg)
         rotateX(${-(y - rect.height / 2) / 20}deg)`;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
        'rotateY(0) rotateX(0)';

    });

});