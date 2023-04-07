import React, { useEffect } from 'react';

function Navbar(props) {

  useEffect(() => {
    function makeStick() {
      const navbar = document.getElementById("navbar");
      const navreplace = document.getElementById("navreplace");
      const sticky = navbar.offsetTop;
      const replace = navreplace.offsetTop;
      if (window.pageYOffset > sticky && window.pageYOffset > replace) {
        navbar.classList.add("sticky");
        navbar.classList.remove("notsticky");
        navreplace.classList.add("here");
        navreplace.classList.remove("nothere");
      } else {
        navbar.classList.add("notsticky");
        navbar.classList.remove("sticky");
        navreplace.classList.add("nothere");
        navreplace.classList.remove("here");
      }
    }

    window.addEventListener('scroll', makeStick);

    return () => {
      window.removeEventListener('scroll', makeStick);
    };
  }, []);

  return (
    <section>
      <div id="navreplace" class="nothere"></div>
      <div className="text-center notsticky" id="navbar">
        <div className="d-flex justify-content-around">
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;