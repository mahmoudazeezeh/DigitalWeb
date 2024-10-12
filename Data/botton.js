const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active"); // Toggle the 'active' class on the nav list
    mobileMenu.classList.toggle("active"); // Toggle the 'active' class on the menu toggle
});
