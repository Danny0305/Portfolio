import Button from "../components/Button";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
      {/* Resume Container with Grid Layout */}
      <div className="resume-container">
        {/* Left: Resume Image */}
        <div className="resume-image">
          <img src="Resume.png" alt="My Resume" />
        </div>

        {/* Right: Download Button */}
        <div className="download-link">
          <a href="Resume.pdf" download>
            <Button>Download Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
