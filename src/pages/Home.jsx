// Home.jsx
import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <header className="App-header">
        <h1>Mohidul</h1>
        <p>Software Engineer | Web Developer</p>
      </header>

      <main className="App-main">
        <section className="about-section">
          <h2>About Me</h2>
          <p>
            I am a passionate software engineer with experience in developing web applications and a focus on creating efficient, scalable solutions.
          </p>
        </section>

        <section className="experience-section">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Software Engineer at Giga Tech Limited</h3>
            <p>August 2021 - Present</p>
            <p>
              Responsible for developing and maintaining web applications, managing backend services, and ensuring high performance and responsiveness.
            </p>
          </div>
          <div className="experience-item">
            <h3>Intern at ABC Solutions</h3>
            <p>June 2020 - August 2021</p>
            <p>
              Assisted in the development of web applications and worked with the team to implement new features and fix bugs.
            </p>
          </div>
        </section>

        <section className="skills-section">
          <h2>Skills</h2>
          <ul>
            <li>Java, JavaScript, React, Node.js</li>
            <li>Spring Boot, RESTful API, MySQL</li>
            <li>HTML, CSS, Git, Agile Development</li>
          </ul>
        </section>

        <section className="education-section">
          <h2>Education</h2>
          <p>M.Sc. in Computer Science, Jahangirnagar University</p>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
