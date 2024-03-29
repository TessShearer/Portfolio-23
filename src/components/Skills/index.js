import React from 'react';

function Skills() {

  return (
    <section>
      <div className="spacing"></div>

      <h1 className="text-center heading" id="skills">Skills</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1 className="d-block skill-list">JavaScript, React, CSS, MongoDB, Node, Responsive Web Design, HTML, Express, SQL, noSQL, Sequelize, GitHub, HandleBars, JQuery, Bootstrap, PHP, Vue</h1>
        </div>
        <div className="col-2"></div>
      </div>

      <h1 className="text-center heading" id="interests">Interests</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1 className="d-block skill-list">Reading, Karate, Puzzles, Skating, Hiking, American Sign Langauge, Painting, Sculpting, Wishing I had a dog</h1>
        </div>
        <div className="col-2"></div>
      </div>
    </section>
  );
}

export default Skills;