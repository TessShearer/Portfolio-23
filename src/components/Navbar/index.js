import React from 'react';

function Navbar() {

  document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function () { makeStick() };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function makeStick() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
      navbar.classList.remove("notsticky");
    } else {
      navbar.classList.add("notsticky");
      navbar.classList.remove("sticky");
    }
  }
});

  return (
    <section>
      <h1 className="text-center notsticky" id="navbar">Navigation Bar</h1>
    </section>
  );
}

export default Navbar;