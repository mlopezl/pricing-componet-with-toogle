const toggle = document.getElementById("toggle");
const basicPrice = document.getElementById("basic-price");
const professionalPrice = document.getElementById("professional-price");
const masterPrice = document.getElementById("master-price");
const switchElement = document.querySelector(".switch");

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
