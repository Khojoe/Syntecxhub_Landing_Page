// Mobile Menu
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll("#mobile-menu a");
const mobileCtaBtn = document.getElementById("mobile-cta-btn");

function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
  const isHidden = mobileMenu.classList.contains("hidden");
  
  mobileBtn.setAttribute("aria-expanded", !isHidden);
  mobileBtn.innerHTML = isHidden
    ? `<i class="fa-solid fa-bars"></i>`
    : `<i class="fa-solid fa-xmark"></i>`;
}

if (mobileBtn) {
  mobileBtn.addEventListener("click", toggleMenu);
}

// Close menu when clicking a link
mobileLinks.forEach(link => {
  link.addEventListener("click", toggleMenu);
});

// Close menu and scroll when clicking mobile CTA
if (mobileCtaBtn) {
  mobileCtaBtn.addEventListener("click", () => {
    toggleMenu();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Form Submission
const waitlistForm = document.getElementById("waitlist-form");
const formSuccess = document.getElementById("form-success");

if (waitlistForm) {
  waitlistForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    
    // In a real app, you would send data to a server here.
    // For this demo, we'll just show the success message.
    
    waitlistForm.classList.add("hidden");
    formSuccess.classList.remove("hidden");
    
    // Optional: Reset form
    waitlistForm.reset();
  });
}
