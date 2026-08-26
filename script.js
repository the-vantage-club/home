// ============================================================
// THE VANTAGE CLUB — interactions
// ============================================================

document.getElementById("year").textContent = new Date().getFullYear();

/* Sticky nav background on scroll */
const nav = document.getElementById("siteNav");
const onScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* Mobile nav toggle */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* Cursor glow (desktop / fine pointer only) */
const glow = document.getElementById("cursorGlow");
const prefersFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if (prefersFinePointer && glow) {
  window.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    glow.classList.add("active");
  });
  window.addEventListener("mouseleave", () => glow.classList.remove("active"));
}

/* Scroll reveal */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

/* Scroll cue click */
const scrollCue = document.getElementById("scrollCue");
if (scrollCue) {
  scrollCue.addEventListener("click", () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" });
  });
}
