import "./Projects.css";
import { useRef } from "react";
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
        description:
            "Luxury car rental platform with modern UI, online booking and premium user experience.",
        tech: ["React", "Node.js", "MongoDB"],
        image: rentxImg,
        github: "https://github.com/durgesh033/RentX-Car-Rental",
        demo: null,
    },

    {
        title: "Fake News Detector",
        icon : <FaNewspaper />,
        description:
            "Machine learning model that detects fake and real news articles with high accuracy.",
        tech: ["Python", "Scikit-Learn", "Streamlit"],
        image: fakeNewsImg,
        github: "https://github.com/durgesh033/Fake-News-Detetction",
        demo: "https://fake-news-detetction-kosafthhyg2bu96hs9q2vw.streamlit.app/",
    },

    {
        title: "Malicious URL Detector",
        icon : <FaShieldAlt />,
        description:
            "ML-powered system that identifies phishing and malicious URLs in real time.",
        tech: ["Python", "Random Forest", "Pandas"],
        image: urlImg,
        github: "https://github.com/durgesh033/Malicious-URL-Detector",
        demo: "https://arsenic232-malicious-url-detector.hf.space/",
    },

    {
        title: "Project Lucy",
        icon : <FaRobot />,
        description:
            "Enterprise AI assistant built using LLMs, FastAPI and modern AI infrastructure.",
        tech: ["FastAPI", "Ollama", "LLMs"],
        image: lucyImg,
        github: "https://github.com/durgesh033/Lucy-Enterprise-Model",
        demo: null,
    }
];

const carouselRef = useRef(null);

const scrollLeft = () => {
    carouselRef.current?.scrollBy({
        left: -600,
        behavior: "smooth",
    });
};

const scrollRight = () => {
    carouselRef.current?.scrollBy({
        left: 600,
        behavior: "smooth",
    });
};


function Projects() {
    return (
        <section className="projects" id="projects">

            <h2
                className="section-title"
                data-aos="fade-up"
            >
                Featured Projects
            </h2>

            <div className="carousel-controls">

                <button
                    className="carousel-btn"
                    onClick={scrollLeft}
                >
                    ←
                </button>

                <button
                    className="carousel-btn"
                    onClick={scrollRight}
                >
                    →
                </button>

            </div>

            <div
                className="projects-grid"
                ref={carouselRef}
            >

                {projects.map((project, index) => (

                    <div
                        key={index}
                        className="project-card"
                        data-aos="zoom-in-up"
                        data-aos-delay={index * 100}
                    >

                        {/*<div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                            />
                        </div>*/}

                        <div className="project-content">

                            <span className="project-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="project-icon">
                                {project.icon}
                            </div>

                            <h3>{project.title}</h3>

                            <div className="project-line"></div>

                            <p>{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx}>{tech}</span>
                                ))}
                            </div>

                        </div>

                            <div className="project-links">

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="live-btn"
                                >
                                    <FaExternalLinkAlt />
                                    Live Demo
                                </a>

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
                ))}

            </div>

        </section>
    );
}

export default Projects;