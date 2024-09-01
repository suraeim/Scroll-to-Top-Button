// Get the button element
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Function to show or hide the button based on scroll position
function checkScroll() {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add event listeners
window.addEventListener('scroll', checkScroll);
scrollToTopBtn.addEventListener('click', scrollToTop);
