const navLinks = document.getElementById("links-container");

function toggleNav() {
  navLinks.classList.toggle("hide-nav");
}

function toggleElement(id, buttonId, readId) {
  const description = document.getElementById(id);
  description.classList.toggle("hide");
  const readMore = document.getElementById(readId);
  readMore.textContent == "More..."
    ? (readMore.textContent = "Less...")
    : (readMore.textContent = "More...");
  if (buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.toggle("rotated");
  }
}

function setCopyrightDate() {
  let date = new Date().getFullYear();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${date} LivenLab`;
}

(function () {
  setCopyrightDate();
})();
