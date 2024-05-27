// Nav dropdown for small screens
const navLinks = document.getElementById("links-container");

// Toggle whether nav dropdown is hidden or visible
function toggleNav() {
  navLinks.classList.toggle("hide-nav");
}

// Toggle whether element is hidden or visible
function toggleElement(id, buttonId, readId) {
  // Get element to be toggled and "More.../Less..." text used to toggle
  const description = document.getElementById(id);
  const readMore = document.getElementById(readId);

  // Toggle element's "hide" class
  description.classList.toggle("hide");

  // Change element that was clicked to toggle ("more" to "less" and vice versa or flip chevron)
  readMore.textContent == "More..."
    ? (readMore.textContent = "Less...")
    : (readMore.textContent = "More...");
  if (buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.toggle("rotated");
  }
}

// Toggle visibility of image modal with given ID
function toggleModal(modal) {
  modal.classList.toggle("modal-hidden");
}

// Get copyright date and place it in footer
function setCopyrightDate() {
  let date = new Date().getFullYear();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${date} LivenLab`;
}

// Automatically set copyright date
(function () {
  setCopyrightDate();
})();
