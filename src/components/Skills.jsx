import React from 'react';
import skills from '../skills';

function Skills() {
  return (
    <section id="skills">
      <h2>Tools & Technologies I Can Use</h2>
      <div className="skills">
        <div className="skill-col">
          <p>
            <strong>Language</strong>
          </p>
          <ul className="skill-list">
            {skills.languages.map(skill => {
              return (
                <li key={skill.title} className="skill">
                  <img className="icons" src={skill.logo} alt={skill.title} />
                  {skill.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="skill-col">
          <p>
            <strong>Frameworks</strong>
          </p>
          <ul className="skill-list">
            {skills.frameworks.map(skill => {
              return (
                <li key={skill.title} className="skill">
                  <img className="icons" src={skill.logo} alt={skill.title} />
                  {skill.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="skill-col">
          <p>
            <strong>Tools</strong>
          </p>
          <ul className="skill-list">
            {skills.tools.map(skill => {
              return (
                <li key={skill.title} className="skill">
                  <img className="icons" src={skill.logo} alt={skill.title} />
                  {skill.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
