// Wait for the document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  /**
   * This function is responsible for toggling the open/close state of the hamburger menu
   * when the hamburger icon is clicked.
   */
  function toggleMenu() {
    // Select the menu and the hamburger icon elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Check if both elements exist in the document
    if (menu && icon) {
      // Toggle the 'open' class on the menu and the hamburger icon
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  }

  // Select the hamburger icon element
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  // If the hamburger icon exists, add an event listener for the click event
  if (hamburgerIcon) {
    // When the icon is clicked, toggle the menu visibility
    hamburgerIcon.addEventListener("click", toggleMenu);
  }

  /**
   * This part listens for clicks on the menu items, and when a menu item is clicked,
   * it closes the menu by removing the 'open' class.
   */
  const menuItems = document.querySelectorAll(".menu-links a");

  // Loop through all the menu items and add an event listener to each
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Select the menu and the hamburger icon elements
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");

      // If both elements exist, remove the 'open' class to close the menu
      if (menu && icon) {
        menu.classList.remove("open");
        icon.classList.remove("open");
      }
    });
  });
});
