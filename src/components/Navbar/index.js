import React, { useEffect } from 'react';

function Navbar(props) {

  useEffect(() => {
    function makeStick() {
      const navbar = document.getElementById("navbar");
      const sticky = navbar.offsetTop;
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.remove("notsticky");
      } else {
        navbar.classList.add("notsticky");
        navbar.classList.remove("sticky");
      }
    }

    window.addEventListener('scroll', makeStick);

    return () => {
      window.removeEventListener('scroll', makeStick);
    };
  }, []);

  return (
    <section>
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