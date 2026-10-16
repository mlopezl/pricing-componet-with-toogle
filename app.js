const toggle = document.getElementById("toggle");
const basicPrice = document.getElementById("basic-price");
const professionalPrice = document.getElementById("professional-price");
const masterPrice = document.getElementById("master-price");
const switchElement = document.querySelector(".switch");
const cards = document.querySelector('.cards');

// --- Theme (Light / Dark Mode) ---
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", "Switch to light mode");
      themeToggle.setAttribute("title", "Switch to light mode");
    }
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", "Switch to dark mode");
      themeToggle.setAttribute("title", "Switch to dark mode");
    }
  }
}

// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// Listen for system theme changes if user hasn't explicitly chosen
if (window.matchMedia) {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
}


toggle.addEventListener("change", () => {
  if (!toggle.checked) {
    basicPrice.innerText = "199.99";
    professionalPrice.innerText = "249.99";
    masterPrice.innerText = "399.99";
  } else {
    basicPrice.innerText = "19.99";
    professionalPrice.innerText = "24.99";
    masterPrice.innerText = "39.99";
  }
});

switchElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    toggle.checked = !toggle.checked;
    toggle.dispatchEvent(
      new Event('change', { bubbles: true })
    );
  }
});

function focusCardHandler(card) {
  if (!card) return;

  Array.from(cards.children).forEach(el => {
    el.classList.remove('card__focus');
  });

  card.classList.add('card__focus');
}

cards.addEventListener('click', (e) => {
  const card = e.target.closest('article');
  focusCardHandler(card);
});

cards.addEventListener('focusin', (e) => {
  const card = e.target.closest('article');
  focusCardHandler(card);
});

