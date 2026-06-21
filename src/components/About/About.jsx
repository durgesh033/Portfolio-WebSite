import "./About.css";

import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaGitAlt
} from "react-icons/fa";

import {
    SiMongodb,
    SiExpress,
    SiFastapi,
    SiTensorflow
} from "react-icons/si";

const techStack = [
    { icon: <FaReact />, label: "React" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiExpress />, label: "Express" },
    { icon: <FaPython />, label: "Python" },
    { icon: <SiTensorflow />, label: "Machine Learning" },
    { icon: <SiFastapi />, label: "FastAPI" },
    { icon: <FaGitAlt />, label: "Git" },
];

function About() {
    return (
        <section className="about" id="about">

            <span className="about-eyebrow" data-aos="fade-up">
                Get to know me
            </span>

            <h2
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                About Me
            </h2>

            <div className="about-container">

                <div
                    className="about-card"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <span className="about-card-tag">Profile — 01</span>

                    <h3>Who I Am</h3>

                    <p>
                        I'm a Full Stack Developer and AI enthusiast
                        passionate about building modern web applications
                        and intelligent systems that solve real-world problems.
                    </p>
                </div>

                <div
                    className="about-card"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <span className="about-card-tag">Profile — 02</span>

                    <h3>What I Do</h3>

                    <p>
                        I build responsive web applications, integrate
                        AI into products, and create scalable solutions
                        using MERN, Python, and Machine Learning.
                    </p>
                </div>

            </div>

            <div
                className="tech-marquee"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
            >
                <div className="tech-track">
                    {[...techStack, ...techStack].map((tech, index) => (
                        <div className="tech-chip" key={index} aria-hidden={index >= techStack.length}>
                            <span className="tech-icon">{tech.icon}</span>
                            <span>{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default About;