const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', () => {
    const navBar = document.querySelector('.nav-bar');

    navBar.classList.toggle('active');
})