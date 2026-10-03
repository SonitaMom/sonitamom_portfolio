const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
const overlay = document.getElementById("navOverlay");

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.classList.toggle("open", isOpen);
  overlay.classList.toggle("open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    overlay.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

overlay.addEventListener("click", () => {
  links.classList.remove("open");
  toggle.classList.remove("open");
  overlay.classList.remove("open");

  toggle.setAttribute("aria-expanded", "false");
});
