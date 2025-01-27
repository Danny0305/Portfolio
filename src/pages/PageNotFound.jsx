import { Link } from "react-router-dom";
import "../styles/PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <div className="error-message">
        <h1 className="error-heading">404</h1>
        <h2 className="error-subheading">Oops! Page not found</h2>
        <p className="error-description">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="back-home-link">
          <button className="back-home-button">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
