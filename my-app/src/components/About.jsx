import React from 'react';
const About = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4 ">About Me</h2>
        <p>
          I'm a Computer Science student at the University of Central Punjab, currently in the 6th semester (Fall 2025). 
          Actively seeking an internship to apply and enhance my skills in software development.
        </p>
        <p>
          I have a solid foundation in data structures, algorithms, object-oriented programming, and database systems.
          I’ve completed a full front-end development course and built projects using HTML, CSS, JavaScript, React, and Bootstrap.
        </p>
        <p>
          I am a passionate MERN Stack Developer with skills in:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML, CSS, JavaScript</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">C++, SQL</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
