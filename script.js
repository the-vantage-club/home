const header = document.getElementById("header");
const glow = document.querySelector(".cursor-glow");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 25);
}, { passive: true });

window.addEventListener("mousemove", (event) => {
  glow.style.left = event.clientX + "px";
  glow.style.top = event.clientY + "px";
  glow.style.opacity = "1";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), Math.min(index * 60, 240));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function toggleMenu(open) {
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  menuButton.setAttribute("aria-expanded", String(open));
}
menuButton.addEventListener("click", () => {
  toggleMenu(!mobileMenu.classList.contains("open"));
});
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => toggleMenu(false));
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
