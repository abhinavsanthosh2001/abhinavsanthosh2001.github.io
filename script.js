// Theme toggle (persisted)
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

const saved = localStorage.getItem("theme");
if (saved) setTheme(saved);

// Default to dark, but if user prefers light, honor it (only if no saved theme)
if (!saved) {
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(prefersLight ? "light" : "dark");
}

toggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// Mobile nav
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger?.addEventListener("click", () => {
  const expanded = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!expanded));
  mobileNav.hidden = expanded;
});

// Close mobile menu on click
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    burger.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  });
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());
