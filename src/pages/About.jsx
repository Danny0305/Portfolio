import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Side: Details */}
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hey, I'm Daniel – a passionate front-end developer dedicated to
            crafting sleek and modern web experiences. I specialize in React,
            JavaScript, and UI/UX design, creating responsive and intuitive
            applications.
          </p>
          <p>
            My goal is to bridge the gap between design and functionality,
            ensuring that every project delivers a seamless user experience.
          </p>
          <a href="/Resume.pdf" download className="resume-btn">
            Download Resume
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="about-image">
          <img src="/images/profile.jpg" alt="Daniel Igbokwe" />
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
          <div className="skill">PostgreSQL</div>
          <div className="skill">MongoDB</div>
          <div className="skill">Git/GitHub</div>
          <div className="skill">Figma</div>
        </div>
      </div>
    </div>
  );
}

export default About;
