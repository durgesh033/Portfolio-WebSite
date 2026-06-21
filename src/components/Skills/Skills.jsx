import "./Skills.css";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaBrain
} from "react-icons/fa";

import {
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiFastapi,
    SiScikitlearn,
    SiPandas
} from "react-icons/si";

const skills = [
    {
        title: "Frontend",
        icon: <FaReact />,
        items: [
            {
                name: "React",
                icon: <FaReact />,
                className: "react",
            },
            {
                name: "JavaScript",
                icon: <SiJavascript />,
                className: "javascript",
            },
            {
                name: "HTML",
                icon: <FaHtml5 />,
                className: "html",
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />,
                className: "css",
            },
        ],
    },
    {
        title: "Backend",
        icon: <FaNodeJs />,
        items: [
            {
                name: "Node.js",
                icon: <FaNodeJs />,
                className: "node",
            },
            {
                name: "Express",
                icon: <SiExpress />,
                className: "express",
            },
            {
                name: "FastAPI",
                icon: <SiFastapi />,
                className: "fastapi",
            },
        ],
    },
    {
        title: "Database",
        icon: <FaDatabase />,
        items: [
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                className: "mongodb",
            },
            {
                name: "MySQL",
                icon: <SiMysql />,
                className: "mysql",
            },
        ],
    },
    {
        title: "AI / ML",
        icon: <FaPython />,
        items: [
            {
                name: "Python",
                icon: <FaPython />,
                className: "python",
            },
            {
                name: "Scikit-Learn",
                icon: <SiScikitlearn />,
                className: "sklearn",
            },
            {
                name: "Pandas",
                icon: <FaPython />,
                className: "pandas",
            },
            {
                name: "Machine Learning",
                icon: <FaBrain />,
                className: "ml",
            },
        ],
    },
];

export default function Skills() {
    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title" data-aos="fade-up">Skills</h2>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        className="skill-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="skill-icon">{skill.icon}</div>
                        <h3>{skill.title}</h3>

                        <div className="skill-tags">
                            {skill.items.map((item, idx) => (
                                <span
                                    key={idx}
                                    className={
                                        typeof item === "string"
                                            ? ""
                                            : `tech-tag ${item.className}`
                                    }
                                >
                                    {typeof item === "string" ? (
                                        item
                                    ) : (
                                        <>
                                            {item.icon}
                                            {item.name}
                                        </>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}