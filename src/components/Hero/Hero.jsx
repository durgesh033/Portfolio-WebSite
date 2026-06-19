import "./Hero.css"
import profileImg from "../../../profile.png"
import { useState, useEffect } from "react";
import { useMemo } from "react";

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

        const x =
            (e.clientX / window.innerWidth - 0.5);

        const y =
            (e.clientY / window.innerHeight - 0.5);

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

    const particles = useMemo(
        () =>
            Array.from({ length: 35 }, () => ({
                left: Math.random() * 100,
                delay: Math.random() * 20,
                duration: 15 + Math.random() * 15,
                size: 2 + Math.random() * 4
            })),
        []
    );



    return (
        <section className="hero" onMouseMove={handleMove}>
            <div className="spotlight" style={{
                left: position.x,
                top: position.y
            }}></div>
            <div className="hero-bg"></div>
            <div className="particles">
                {particles.map((particle, i) => (
                    <span
                        key={i}
                        style={{
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`
                        }}
                    />
                ))}
            </div>
            <div className="hero-content">
                <div className="hero-left">
                     <h1>
                        DURGESH 
                        <span>KUMAR ROUT</span>
                    </h1>

                    <h2 className={`role-switcher ${fade ? "show" : "hide"}`}>{roles[currentRole]}</h2>
                    <p>Crafting modern digital experiences with React, Python and intelligent systems.</p>

                    <div className="hero-btns">
                        <button>View Work</button>
                        <button>Resume</button>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="profile-container" style={{transform:`translate(${mouse.x*25}px, ${mouse.y*25}px)` }} >
                        <div className="profile-ring"></div>
                        <img src={profileImg} alt="Durgesh" className="profile-image"></img>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Hero;