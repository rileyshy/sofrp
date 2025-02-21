document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        alert('Saving is disabled.');
    }
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
        e.preventDefault();
        alert('Developer tools are disabled.');
    }
});

document.querySelector('.logo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Saving the logo is disabled.');
});

document.querySelector('.new-logo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Saving the new logo is disabled.');
});

function isMobile() {
    return window.innerWidth <= 768;
}

if (isMobile()) {
    document.querySelector('nav').style.display = 'none'; // Hide Desktop Nav
    document.querySelector('.menu-toggle').style.display = 'block'; // Show Mobile Menu
} else {
    document.querySelector('nav').style.display = 'block';
    document.querySelector('.menu-toggle').style.display = 'none';
}

// Update on Window Resize
window.addEventListener('resize', () => {
    if (isMobile()) {
        document.querySelector('nav').style.display = 'none';
        document.querySelector('.menu-toggle').style.display = 'block';
    } else {
        document.querySelector('nav').style.display = 'block';
        document.querySelector('.menu-toggle').style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const desktopNav = document.querySelector("nav"); // Select the normal nav

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function updateMenuVisibility() {
        if (isMobile()) {
            menuToggle.style.display = "block"; // Show mobile menu button
            mobileMenu.style.display = "none";  // Hide menu initially
            if (desktopNav) desktopNav.style.display = "none"; // Hide desktop nav
        } else {
            menuToggle.style.display = "none"; // Hide menu button on PC
            mobileMenu.classList.remove("show"); // Ensure menu is closed
            if (desktopNav) desktopNav.style.display = "block"; // Show desktop nav
        }
    }

    // Toggle menu on click
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });

    // Run on Load & Resize
    updateMenuVisibility();
    window.addEventListener("resize", updateMenuVisibility);
});
