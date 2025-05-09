const hamburger = document.querySelector('#hamberger');
const header_side_nav = document.querySelector('#header_side_nav');
const nav_overlay = document.querySelector('#nav_overlay');

if (hamburger && header_side_nav && nav_overlay) {
    hamburger.addEventListener('click', function() {
        try {
            header_side_nav.classList.add("show_sideNav");
            document.body.style.overflow = "hidden";
        } catch (error) {
            console.error("Error showing side navigation:", error);
        }
    });

    nav_overlay.addEventListener('click', function() {
        try {
            header_side_nav.classList.remove("show_sideNav");
            document.body.style.overflow = "visible";
        } catch (error) {
            console.error("Error hiding side navigation:", error);
        }
    });
} else {
    console.error("One or more elements not found in the DOM.");
}
