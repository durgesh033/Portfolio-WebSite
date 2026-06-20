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

function About() {

    return (
        <section className="about" id="about">

            {/* Section Title */}

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
                    data-aos="fade-right">
                    <h3>Who I Am</h3>

                    <p>
                        I'm a Full Stack Developer and AI enthusiast
                        passionate about building modern web applications
                        and intelligent systems that solve real-world problems.
                    </p>
                </div>

                <div
                    className="about-card"
                    data-aos="fade-left">
                    <h3>What I Do</h3>

                    <p>
                        I build responsive web applications, integrate
                        AI into products, and create scalable solutions
                        using MERN, Python, and Machine Learning.
                    </p>
                </div>

            </div>

            <div className="tech-stack">

                <div
                    className="tech-aos-wrapper"
                    data-aos="flip-left"
                    data-aos-delay="100"
                >
                    <div className="tech-card">
                        <FaReact className="tech-icon" />
                        <span>React</span>
                    </div>
                </div>

                <div
                    className="tech-aos-wrapper"
                    data-aos="flip-left"
                    data-aos-delay="200"
                >
                    <div className="tech-card">
                        <FaNodeJs className="tech-icon" />
                        <span>Node.js</span>
                    </div>
                </div>

                <div
                    className="tech-aos-wrapper"
                    data-aos="flip-left"
                    data-aos-delay="300"
                >
                    <div className="tech-card">
                        <SiMongodb className="tech-icon" />
                        <span>MongoDB</span>
                    </div>
                </div>

                <div
                    className="tech-aos-wrapper"
                    data-aos="flip-left"
                    data-aos-delay="400"
                >
                    <div className="tech-card">
                        <SiExpress className="tech-icon" />
                        <span>Express</span>
                    </div>
                </div>

                <div
                    className="tech-aos-wrapper"
                    data-aos="flip-left"
                    data-aos-delay="500"
                >
                    <div className="tech-card">
                        <FaPython className="tech-icon" />
                        <span>Python</span>
                    </div>
                </div>

                <div
                    className="tech-aos-wrapper"
                    data-aos="flip-left"
                    data-aos-delay="600"
                >
                    <div className="tech-card">
                        <SiTensorflow className="tech-icon" />
                        <span>Machine Learning</span>
                    </div>
                </div>

                <div
                    className="tech-aos-wrapper"
                    data-aos="flip-left"
                    data-aos-delay="700"
                >
                    <div className="tech-card">
                        <SiFastapi className="tech-icon" />
                        <span>FastAPI</span>
                    </div>
                </div>

                <div
                    className="tech-aos-wrapper"
                    data-aos="flip-left"
                    data-aos-delay="800"
                >
                    <div className="tech-card">
                        <FaGitAlt className="tech-icon" />
                        <span>Git</span>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default About;