// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back to Top Button Logic
const backToTopButton = document.createElement('div');
backToTopButton.innerHTML = '⬆';
backToTopButton.setAttribute('id', 'back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle Mobile Menu (Optional for smaller screens)
const mobileMenu = document.createElement('div');
mobileMenu.setAttribute('id', 'mobile-menu');
mobileMenu.innerHTML = `
    <button id="menu-toggle">Menu</button>
    <div id="menu-links" style="display: none;">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#packages">Packages</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
    </div>
`;
document.body.insertBefore(mobileMenu, document.body.firstChild);

const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

menuToggle.addEventListener('click', () => {
    if (menuLinks.style.display === 'none') {
        menuLinks.style.display = 'block';
    } else {
        menuLinks.style.display = 'none';
    }
});
