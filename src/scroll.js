const scrollLink = document.querySelector('.right');

scrollLink.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});