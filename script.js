function reveal() {
    let revealElements = document.querySelectorAll('.reveal');

    for (let i = 0; i < revealElements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealElements[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
        } else {
            revealElements[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();

let menuBtn = document.querySelector('.menu-btn');
let menuItems = document.querySelectorAll('.menu-item');

function toggleMenu() {
    let menu = document.querySelector('.menu');
    let closeIcon = document.querySelector('.close-icon');
    let menuIcon = document.querySelector('.menu-icon');

    if (menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('show-menu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

menuBtn.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
});
