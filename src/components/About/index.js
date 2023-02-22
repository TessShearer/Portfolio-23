import React from 'react';
import circle from '../../assets/circle.png';
import typing from '../../assets/typing.png';

function About() {

  return (
    <section>
      <div>
        <h1 id="aboutme">Front-end web developer who Designs projects with a goal to make the experience intuitive and simplistic for the user, combining design and functionality of the web page to do so.</h1>
        <div id="aboutimg">
          <img id="circle" src={circle} />
          <img id="typing" src={typing} />
        </div>
      </div>
    </section>
  );
}

export default About;