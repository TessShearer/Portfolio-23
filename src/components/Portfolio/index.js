import React from 'react';

function Portfolio() {

  return (
    <section>

      <div className="spacing"></div>
      <h1 className="text-center heading" id="portfolio">Portfolio</h1>

      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">After Party</h3>
          <a className="d-block app-link" href="https://tessshearer.github.io/afterParty/" target="_blank" rel="noreferrer" id="party"> </a>
          <p className="d-block app-des">Worked as a full stack developer with a team of capable developers.</p>
          <a className="d-block app-des" href="https://github.com/TessShearer/afterParty" target="_blank" rel="noreferrer">Access GitHub Here</a>
        </div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Cory's Karate</h3>
          <a className="d-block app-link" href="https://coryskarate.com/" target="_blank" rel="noreferrer" id="karate"> </a>
          <p className="d-block app-des">Front end developer maintaining and updating site.</p>
          <a className="d-block app-des" href="https://github.com/CoryTessFisher/CorysKarate2020" target="_blank" rel="noreferrer">Access GitHub Here</a>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Movie Search Engine</h3>
          <a className="d-block app-link" href="https://pacific-anchorage-44756.herokuapp.com/" target="_blank" rel="noreferrer" id="movies"> </a>
          <p className="d-block app-des">Worked as a full stack developer with a team of capable developers.</p>
          <a className="d-block app-des" href="https://github.com/TessShearer/what-to-watch" target="_blank" rel="noreferrer">Access GitHub Here</a>
        </div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">UVU T.I.M.S.</h3>
          <a className="d-block app-link" href="https://tims.uvu.edu/tims/prod/myleave.php" target="_blank" rel="noreferrer" id="tims"> </a>
          <p className="d-block app-des">Updated the UVU time information management system so that employees had a more usuable interface on mobile devices.</p>
          {/* <a className="d-block app-des" href="https://github.com/TessShearer/5letters" target="_blank" rel="noreferrer">Access GitHub Here</a> */}
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">UVU Art Museum</h3>
          <a className="d-block app-link" href="https://ais-apps.uvu.edu/art/lm/signup.php" target="_blank" rel="noreferrer" id="art"> </a>
          <p className="d-block app-des">Worked as a front end developer to create a sign up form to visit the UVU art musuem, with additional functionality for admins.</p>
          {/* <a className="d-block app-des" href="https://github.com/TessShearer/what-to-watch" target="_blank" rel="noreferrer">Access GitHub Here</a> */}
        </div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Wordle Filter</h3>
          <a className="d-block app-link" href="https://tessshearer.github.io/5letters/" target="_blank" rel="noreferrer" id="wordle"> </a>
          <p className="d-block app-des">Personal development activity that sorts through possible answers for the popular game Wordle.</p>
          <a className="d-block app-des" href="https://github.com/TessShearer/5letters" target="_blank" rel="noreferrer">Access GitHub Here</a>
        </div>
        <div className="col-1"></div>
      </div>
    </section>
  );
}

export default Portfolio;