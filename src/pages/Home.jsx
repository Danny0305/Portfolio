import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="div-container">
          <h1 className="heading">Welcome, my name is</h1>
        </div>
        <div className="div-container">
          <h2 className="about">Daniel Igbokwe.</h2>
        </div>
        <div className="div-container">
          <h3 className="about">I build stuff on the web.</h3>
        </div>
        <div className="div-container">
          <p className="description">
            I&apos;m a front-end developer specializing in creating interactive,
            scalable, and user-friendly web experiences. Currently, I&apos;m
            focused on building accessible and modern solutions for the web.
          </p>
        </div>
        <div className="div-container">
          <Link to="/projects">
            <Button className="project-btn">Check Out My Work</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
