import React from 'react';

function Navbar() {
  window.onscroll = function () { makeStick() };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function makeStick() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  return (
    <section>
      <h1 className="text-center" id="navbar">Navigation Bar</h1>
    </section>
  );
}

export default Navbar;