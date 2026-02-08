document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Toggle Menu Hamburger di Mobile
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animasi ikon burger (opsional, bisa ubah icon jadi X)
        hamburger.classList.toggle('toggle');
    });

    // Tutup menu saat salah satu link diklik
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});