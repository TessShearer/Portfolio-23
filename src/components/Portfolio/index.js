import React from 'react';

function Portfolio() {

  return (
    <section>

      <div className="spacing"></div>
      <h1 className="text-center heading" id="portfolio">Portfolio</h1>

      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Cory's Karate</h3>
          <a className="d-block app-link" href="https://coryskarate.com/" target="_blank" rel="noreferrer" id="karate"> </a>
          <p className="d-block app-des">Front end developer maintaining and updating site.</p>
          <a className="d-block app-des" href="https://github.com/CoryTessFisher/CorysKarate2020" target="_blank" rel="noreferrer">Access GitHub Here</a>
        </div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">UVU Projects</h3>
          <a className="d-block app-link" href="https://tims.uvu.edu/tims/prod/myleave.php" target="_blank" rel="noreferrer" id="tims"> </a>
          <p className="d-block app-des">Work done for Utah Valley University Employees and Students (cannot be linked here for privacy reasons)</p>
        </div>
        <div className="col-1"></div>
      </div>

    </section>
  );
}

export default Portfolio;