import "./Projects.css";
import rentxImg from "../../assets/projects/rentx.png";
import fakeNewsImg from "../../assets/projects/fakenews.png";
import urlImg from "../../assets/projects/malicious.png";
import lucyImg from "../../assets/projects/lucy.png";

import {
    FaGithub,
    FaExternalLinkAlt,
    FaCar,
    FaNewspaper,
    FaShieldAlt,
    FaRobot
} from "react-icons/fa";

const projects = [
    {
        title: "RentX",
        icon: <FaCar />,
        tagline: "Book a premium ride in three taps.",
        description:
            "Luxury car rental platform with modern UI, online booking and premium user experience.",
        tech: ["React", "Node.js", "MongoDB"],
        image: rentxImg,
        github: "https://github.com/durgesh033/RentX-Car-Rental",
        demo: null,
    },

    {
        title: "Fake News Detector",
        icon: <FaNewspaper />,
        tagline: "Spot misinformation before it spreads.",
        description:
            "Machine learning model that detects fake and real news articles with high accuracy.",
        tech: ["Python", "Scikit-Learn", "Streamlit"],
        image: fakeNewsImg,
        github: "https://github.com/durgesh033/Fake-News-Detetction",
        demo: "https://fake-news-detetction-kosafthhyg2bu96hs9q2vw.streamlit.app/",
    },

    {
        title: "Malicious URL Detector",
        icon: <FaShieldAlt />,
        tagline: "Catch phishing links before they catch you.",
        description:
            "ML-powered system that identifies phishing and malicious URLs in real time.",
        tech: ["Python", "Random Forest", "Pandas"],
        image: urlImg,
        github: "https://github.com/durgesh033/Malicious-URL-Detector",
        demo: "https://arsenic232-malicious-url-detector.hf.space/",
    },

    {
        title: "Lucy Enterprise",
        icon: <FaRobot />,
        tagline: "An AI assistant built for the enterprise.",
        description:
            "Enterprise AI assistant built using LLMs, FastAPI and modern AI infrastructure.",
        tech: ["FastAPI", "Ollama", "LLMs"],
        image: lucyImg,
        github: "https://github.com/durgesh033/Lucy-Enterprise-Model",
        demo: null,
    }
];

function Projects() {

    return (
        <section className="projects" id="projects">

            <h2 className="section-title" data-aos="fade-up">
                Featured Projects
            </h2>

            <div className="projects-viewport">
                <div className="projects-row">

                    {projects.map((project, index) => (

                        <article
                            key={project.title}
                            className="project-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >

                            {/* Default state */}
                            <div className="project-thumb">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                />
                                <div className="thumb-shade" />
                            </div>

                            <span className="project-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="project-base">
                                <div className="project-icon">{project.icon}</div>
                                <h3>{project.title}</h3>
                                <p className="project-tagline">{project.tagline}</p>
                            </div>

                            {/* Hover overlay */}
                            <div className="project-overlay">

                                <div className="overlay-top">
                                    <div className="project-icon">{project.icon}</div>
                                    <span className="overlay-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3>{project.title}</h3>

                                <div className="project-line"></div>

                                <p className="overlay-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="live-btn"
                                        >
                                            <FaExternalLinkAlt />
                                            Live Demo
                                        </a>
                                    )}

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-btn"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>
            </div>

        </section>
    );
}

export default Projects;