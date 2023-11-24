const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function () {
    console.log('Hamburger clicked!');
    nav.classList.toggle('active');
});
