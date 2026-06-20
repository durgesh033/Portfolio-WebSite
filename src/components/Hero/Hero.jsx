import "./Hero.css";
import profileImg from "../../../assets/profile.png";
import resume from "../../../assets/Durgesh_Resume.pdf";

import { useState, useEffect } from "react";

function Hero() {

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    });

    const handleMove = (e) => {

        setPosition({
            x: e.clientX,
            y: e.clientY
        });

        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);

        setMouse({
            x,
            y
        });
    };

    const roles = [
        "Full Stack Developer",
        "AI Builder",
        "React Developer",
        "Problem Solver",
        "Tech Explorer"
    ];

    const [currentRole, setCurrentRole] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {

        const interval = setInterval(() => {

            setFade(false);

            setTimeout(() => {
                setCurrentRole(prev =>
                    (prev + 1) % roles.length
                );

                setFade(true);
            }, 300);

        }, 2500);

        return () => clearInterval(interval);

    }, []);

    return (
        <section
            className="hero"
            id="hero"
            onMouseMove={handleMove}
        >

            <div
                className="spotlight"
                style={{
                    left: position.x,
                    top: position.y
                }}
            ></div>

            <div className="hero-bg"></div>

            <div className="hero-content">

                <div className="hero-left">

                    <div className="hero-badges">

                        <div className="hero-badge internship">
                            <span className="badge-dot blue"></span>
                            Available for Internships
                        </div>

                        <div className="hero-badge building">
                            <span className="badge-dot green"></span>
                            Building Projects
                        </div>

                    </div>

                    <h1>
                        DURGESH
                        <span>KUMAR ROUT</span>
                    </h1>

                    <h2
                        className={`role-switcher ${fade ? "show" : "hide"}`}
                    >
                        {roles[currentRole]}
                    </h2>

                    <p>
                        Crafting modern digital experiences with React,
                        Python and intelligent systems.
                    </p>

                    <div className="hero-btns">

                        <a href="#projects" className="hero-btn">
                            <button>View Work</button>
                        </a>

                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-btn"
                        >
                            <button>Resume</button>
                        </a>

                    </div>

                </div>

                <div className="hero-right">

                    <div
                        className="profile-container"
                        style={{
                            transform: `translate(${mouse.x * 25}px, ${mouse.y * 25}px)`
                        }}
                    >
                        <div className="profile-ring"></div>

                        <img
                            src={profileImg}
                            alt="Durgesh"
                            className="profile-image"
                        />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;