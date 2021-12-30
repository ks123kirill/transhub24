const changeColorMobileMenu = function () {
  const navBar = document.querySelector('.navbar');
  const navBarToggler = navBar.querySelector('.navbar-toggler');
  const navBarCollapse = navBar.querySelector('.navbar-collapse');

  const navBarTogglerHandler = function () {
    navBar.classList.toggle('bg-primary');
  }

  navBarToggler.addEventListener('click', navBarTogglerHandler);
}

changeColorMobileMenu();
/////
