// --- Navbar toggle ---
const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-right');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
