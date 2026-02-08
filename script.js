const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-menu');
const links = document.querySelectorAll('.nav-links a');

// Buka menu
hamburger.onclick = () => {
    navMenu.classList.add('active');
}

// Tutup menu pake tombol X
if (closeBtn) {
    closeBtn.onclick = () => {
        navMenu.classList.remove('active');
    }
}

// Tutup menu pas link diklik & smooth scroll
links.forEach(link => {
    link.onclick = () => {
        navMenu.classList.remove('active');
    }
});

// Smooth scroll simpel
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
