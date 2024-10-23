// Wait for the window to load
window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        preloader.classList.add("loaded");
    }
});

// Function to toggle the 'active' class on the 'back-to-top' button
const toggleBackToTop = () => {
    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    }
};

// Check scroll position on page load
window.addEventListener('load', toggleBackToTop);

// Add scroll event listener to toggle back to top button visibility
window.addEventListener('scroll', toggleBackToTop);
