document.addEventListener('DOMContentLoaded', function () {
    // Hamburger icon toggle
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navContainer = document.querySelector('.nav-container');

    hamburgerIcon.addEventListener('click', function () {
        navContainer.classList.toggle('show-nav');
    });

    // Share button click
    const shareButton = document.querySelector('.share-button');

    shareButton.addEventListener('click', function () {
        alert('Share functionality can be implemented here.'); // Implement your share logic
    });
});
