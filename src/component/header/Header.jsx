import "./header.scss"
import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="header">
        <div className="hero-text">
          <h1 style={{ fontSize: "50px" }}>Dragable Scrumboard for you daily tasks</h1>
          <p>
            manage and organize your projects/tasks and break them down into defined
            “sprints” of time, day and week{" "}
          </p>

          <Link to="/sign-in" className="links link-home">
            <button id="signUp-btn">Get Started</button>
          </Link>
        </div>
      </header>
    );
}

export default Header;