# Lumina — Illuminate Your Ideas (Syntecxhub Landing Page)

This project is a modern, responsive landing page for a fictional creative workspace tool called **Lumina**, built as part of an internship project for Syntecxhub.

## 🚀 Features

* **Modern UI/UX:** Built with a clean aesthetic featuring glassmorphism (backdrop-blur), gradients, and smooth hover animations.
* **Fully Responsive:** Adapts seamlessly to all device sizes, including a custom hamburger menu for mobile users.
* **Accessible (a11y):** Implements ARIA attributes for screen readers (e.g., dynamically updating `aria-expanded` on the mobile menu).
* **Interactive Elements:** Features smooth scrolling for internal anchor links and a mock functional waitlist submission form.

## 🛠️ Tech Stack

* **HTML5:** Semantic HTML structure.
* **Tailwind CSS:** Utilized via CDN for rapid styling and responsive design.
* **Vanilla JavaScript:** Handles the mobile menu toggling, smooth scrolling, and form submission logic without relying on heavy frameworks.
* **FontAwesome:** Used for scalable vector icons.

## 📂 Project Structure

```text
Syntecxhub_Landing_Page/
├── index.html   # Main HTML document containing the structure
├── style.css    # Custom CSS for gradients, animations, and hover effects
├── script.js    # JavaScript logic for interactivity and form handling
└── README.md    # Project documentation
```

## 🔧 Setup & Usage

Since this is a static website utilizing the Tailwind CDN, no complex build process is required to view it locally:

1. Clone the repository: `git clone https://github.com/Khojoe/Syntecxhub_Landing_Page.git`
2. Navigate to the project directory.
3. Open `index.html` directly in any modern web browser.

## 💡 Recent Improvements

* **Form Handling:** Intercepts default form submission to display a success message and reset the form.
* **Enhanced Mobile Nav:** Automatically closes the mobile menu when a navigation link is clicked and smooth-scrolls to the target section.
* **Accessibility:** Added ARIA labels and dynamic state attributes to the navigation elements.
* **CSS Integration:** Properly linked custom stylesheets to ensure gradients and hover animations render correctly.