function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle the menu and icon classes
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Check if the menu is open to adjust body overflow
  if (menu.classList.contains("open")) {
    document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
  } else {
    document.body.style.overflow = "auto"; // Enable scrolling when menu is closed
  }
}

$(document).ready(() => {
  // Bind the toggleMenu function to the hamburger icon click event
  $(".hamburger-icon").on("click", toggleMenu);
});
