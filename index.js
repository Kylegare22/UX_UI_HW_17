

// Get the loading overlay element
let loadingOverlay = document.getElementById('loading-overlay');

// Show the loading screen by setting its display to 'flex'
function showLoadingScreen() {
    loadingOverlay.style.display = 'flex';
}

// Hide the loading screen by setting its display to 'none'
function hideLoadingScreen() {
    loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'none';
}

// Attach event listeners to all links in the navigation bar
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default navigation
        const newPage = event.target.href; // Get the target URL

        showLoadingScreen(); // Show the loading screen

        // Redirect to the new page after a brief delay to show the loading screen
        setTimeout(() => {
            window.location.href = newPage;
        }, 200); // Adjust the delay if needed
    });
});

// Hide the loading screen when the page has fully loaded
window.addEventListener('load', hideLoadingScreen);


