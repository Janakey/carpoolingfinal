// Back to Top Button Visibility
const backToTopButton = document.getElementById('backToTop');

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Toggle Responsive Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle the visibility of the navigation menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Search Bar Functionality (for simplicity, let's filter options based on the input)
const searchInput = document.getElementById('location');
const optionCards = document.querySelectorAll('.option-card');

searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    
    optionCards.forEach(card => {
        const cardTitle = card.querySelector('h2').textContent.toLowerCase();
        const cardDescription = card.querySelector('p').textContent.toLowerCase();
        
        // If the search term matches the card title or description, show the card
        if (cardTitle.includes(searchValue) || cardDescription.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
