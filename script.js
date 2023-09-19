function toggleElement(id, buttonId) {
  const element = document.getElementById(id);
  element.classList.toggle('hide');

  if (buttonId) {
    const button = document.getElementById(buttonId);
    button.classList.toggle('rotated');
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