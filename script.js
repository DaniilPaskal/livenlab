const navLinks = document.getElementById('links-container');

function toggleNav() {
  console.log(navLinks);
  navLinks.classList.toggle('hide');
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