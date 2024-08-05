const initApp = () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');

    const toggleMenu = () => {
        const hamburgerIcon = navToggle.querySelector('.hamburger');
        const closeIcon = navToggle.querySelector('.close');

        navMobile.classList.toggle('hidden');
        navMobile.classList.toggle('flex');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }

    navToggle.addEventListener('click', toggleMenu);
    navMobile.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);