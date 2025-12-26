const nav = document.querySelector('.nav');
const navToggleBtn = document.querySelector('.nav__toggle--btn');

const toggleMenu = () => {
    const isOpen = nav.classList.toggle('nav__open'); 

    navToggleBtn.classList.toggle('nav__toggle--open');
    
    if (isOpen) {
        navToggleBtn.setAttribute('aria-expanded', 'true');
    } else {
        navToggleBtn.setAttribute('aria-expanded', 'false');
    }
};

navToggleBtn.addEventListener('click', toggleMenu);
