const navToggle = document.querySelector(".nav-toggle");
const navItems = document.querySelector(".nav-items");

navToggle.addEventListener("click", () => {
  navItems.classList.toggle("show");
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('a');
  const content = dropdown.querySelector('.dropdown-content');

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    content.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      content.classList.remove('show');
    }
  });
});