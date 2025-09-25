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
        menu.classList.add("bg-white");
        menu.classList.add("text-black");
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
    const headerTop = document.querySelector('.contact_header');
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-md', 'navbar');
            navbar.classList.remove('bg-transparent');
            headerTop.classList.add('bg-black');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md');
            navbar.classList.add('bg-transparent');
            headerTop.classList.remove('bg-black');
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Get current page filename
    const currentPage = window.location.pathname.split("/").pop();

    // Select all sidebar links
    const links = document.querySelectorAll(".list_sub_services a");

    // Loop and match current page
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Active style
        }
    });

    const navbarHeight = document.querySelector('nav').offsetHeight;

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            const target = document.querySelector(targetID);
            if (target) {
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});

$(document).ready(function() {
    let offset = 120; // navbar height

    // Smooth scroll on click
    $('.treat-sub-pages > li > a').on('click', function(e) {
        e.preventDefault();
        let target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, 600);
    });

    // Active link on scroll
    $(window).on('scroll', function() {
        let scrollPos = $(document).scrollTop();

        $('.treat-sub-pages > li > a').each(function() {
            let section = $($(this).attr('href'));

            if (section.position().top - offset <= scrollPos &&
                section.position().top + section.height() - offset > scrollPos) {
                $('.treat-sub-pages > li > a').removeClass('active');
                $(this).addClass('active');
            }
        });
    });
});
// fix-sidebar.js
(function($) {
    function adjustSidebar() {
        var navbarHeight = $(".header-top").outerHeight() || 0;
        $(".side-fixed-bar").css("top", navbarHeight + "px");
    }

    // Run on page load
    $(document).ready(function() {
        adjustSidebar();
    });

    // Run on window resize
    $(window).on("resize", function() {
        adjustSidebar();
    });
})(jQuery);

async function loadHTML(id, file, callback) {
    try {
        let res = await fetch(file);
        let text = await res.text();
        document.getElementById(id).innerHTML = text;
        if (callback) callback(); // callback run after load
    } catch (err) {
        console.error("Error loading HTML:", err);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "header.html", initScrollScript); // header load hone ke baad scroll code call
    loadHTML("footer", "footer.html");
});

function initScrollScript() {
    window.addEventListener("scroll", () => {
        let header = document.getElementById("header");
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
}