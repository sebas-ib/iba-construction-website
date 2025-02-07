document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");

      document.body.style.overflow = menu.classList.contains("open")
        ? "hidden"
        : "auto";
    }
  }
});
