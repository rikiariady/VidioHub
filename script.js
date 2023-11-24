document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function () {
        const searchTerm = prompt('Enter your search term:'); // Prompt user for search term
        if (searchTerm) {
            // Implement your search logic here
            alert(`Search functionality for "${searchTerm}" can be implemented here.`);
        }
    });
})
