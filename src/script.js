$('.hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,

});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Get the menu toggle button and the menu itself
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Get the services dropdown button and its corresponding dropdown menu
    const servicesButton = document.getElementById("services-button");
    const servicesDropdown = document.getElementById("services-dropdown");

    // Mobile menu toggle (open/close)
    menuToggle.addEventListener("click", function() {
        // Toggle the 'hidden' class on the menu to show or hide it
        menu.classList.toggle("hidden");
    });

    // Services dropdown toggle for mobile view
    servicesButton.addEventListener("click", function(event) {
        // Prevent the default action of the link (i.e., page jump)
        event.preventDefault();

        // Toggle the visibility of the dropdown menu on click
        servicesDropdown.classList.toggle("hidden");
    });

    // Close the services dropdown if the user clicks anywhere outside the dropdown
    document.addEventListener("click", function(event) {
        if (!servicesButton.contains(event.target) && !servicesDropdown.contains(event.target)) {
            servicesDropdown.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-md', 'navbar');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            navbar.classList.add('bg-transparent');
        }
    });
});