import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        {/* For every route except PageNotFound, include NavBar */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <NavBar />
              <Projects />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <NavBar />
              <Resume />
            </>
          }
        />
        {/* PageNotFound without NavBar */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
