function toggleElement(id) {
  const element = document.getElementById(id);
  element.classList.toggle('hide');
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