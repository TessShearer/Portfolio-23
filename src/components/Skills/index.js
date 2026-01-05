import React from 'react';

function Skills() {

  return (
    <section>
      <div className="spacing"></div>

      <h1 className="text-center heading" id="skills">Languages and Frameworks</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1 className="d-block skill-list">Vue.js,
            React,
            Python,
            PHP,
            SQL,
            CSS,
            Bootstrap,
            TypeScript,
            Node.js</h1>
        </div>
        <div className="col-2"></div>
      </div>

      <div className="spacing"></div>

      <h1 className="text-center heading" id="skills"> Tools and Technologies</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1 className="d-block skill-list">
            Github/Gitlab
            Docker,
            AWS,
            Oracle,
            Jira,
            REST APIs,
            CI/CD</h1>
        </div>
        <div className="col-2"></div>
      </div>

      <h1 className="text-center heading" id="interests">Strengths and Development Practices</h1>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1 className="d-block skill-list">
            Agile Product Development,
            Intuitive User Interface,
            Well documented code,
            Efficient data structuring,
            Code Review,
            Maintaining Data Integrity
          </h1>
        </div>
        <div className="col-2"></div>
      </div>
    </section>
  );
}

export default Skills;