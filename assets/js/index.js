document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const links = menu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Cierra el menú cuando se hace clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });
});
