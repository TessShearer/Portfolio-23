import React from 'react';

function About() {

  return (
    <section>
      <div className="spacing"></div>

      <div>
      <h1 className="text-center heading" id="about">About Me</h1>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h1 className="d-block" id="aboutme">I'm a full stack web developer who designs projects with a goal to make the experience intuitive and simplistic for the user.</h1>
          </div>
          <div className="col-2"></div>
        </div>
        <div id="self"></div>
      </div>
    </section>
  );
}

export default About;