// 1. Define the Navigation Bar Code
const headerHTML = `
    <nav class="navbar">
        <div class="logo">VEM Safaris</div>
        <div class="hamburger" id="hamburger">☰</div>
        <ul class="nav-links" id="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="index.html#tours">Our Tours</a></li>
            <li><a href="index.html#contact" class="btn-primary">Contact Us</a></li>
        </ul>
    </nav>
`;

// 2. Define the Footer Code
const footerHTML = `
    <footer>
        <p>&copy; 2026 VEM Safaris Tanzania. All rights reserved.</p>
    </footer>
`;

// 3. Inject them into the page when it loads
document.addEventListener("DOMContentLoaded", () => {
    // Find the empty placeholders on the page
    const headerContainer = document.getElementById("header-placeholder");
    const footerContainer = document.getElementById("footer-placeholder");

    // Inject the HTML into the placeholders
    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    // 4. Activate the Mobile Menu (Hamburger)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
