import React from 'react';

function Portfolio() {

  return (
    <section>
      <h1 className="text-center" id="portfolio">Portfolio</h1>

      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">After Party</h3>
          <a className="d-block app-link" href="https://tessshearer.github.io/afterParty/" target="_blank" rel="noreferrer" id="party"> </a>
          <a className="d-block" href="https://github.com/TessShearer/afterParty" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Cory's Karate</h3>
          <a className="d-block app-link" href="https://coryskarate.com/" target="_blank" rel="noreferrer" id="karate"> </a>
          <a className="d-block" href="https://github.com/CoryTessFisher/CorysKarate2020" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Movie Search Engine</h3>
          <a className="d-block app-link" href="https://pacific-anchorage-44756.herokuapp.com/" target="_blank" rel="noreferrer" id="movies"> </a>
          <a className="d-block" href="https://github.com/TessShearer/what-to-watch" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Wordle Filter</h3>
          <a className="d-block app-link" href="https://tessshearer.github.io/5letters/" target="_blank" rel="noreferrer" id="wordle"> </a>
          <a className="d-block" href="https://github.com/TessShearer/5letters" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Movie Search Engine</h3>
          <a className="d-block app-link" href="https://pacific-anchorage-44756.herokuapp.com/" target="_blank" rel="noreferrer" id="movie"> </a>
          <a className="d-block" href="https://github.com/TessShearer/what-to-watch" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="col-5 port-app">
          <h3 className="d-block app-title">Wordle Filter</h3>
          <a className="d-block app-link" href="https://tessshearer.github.io/5letters/" target="_blank" rel="noreferrer" id="wordle"> </a>
          <a className="d-block" href="https://github.com/TessShearer/5letters" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="spacing"></div>
    </section>
  );
}

export default Portfolio;