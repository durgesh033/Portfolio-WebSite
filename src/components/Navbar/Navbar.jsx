import "./Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <span>D</span>
            </div>

            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <a href="./Durgesh_Resume.pdf" className="nav-btn">
            Resume
            </a>
        </nav>
    );
}

export default Navbar;