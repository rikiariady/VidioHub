const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
});
