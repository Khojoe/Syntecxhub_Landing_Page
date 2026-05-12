// Mobile Menu Toggle
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Change icon
  if (mobileMenu.classList.contains("hidden")) {
    mobileBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    mobileBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});
