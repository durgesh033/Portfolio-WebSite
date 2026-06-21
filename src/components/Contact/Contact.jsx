import "./Contact.css";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <h2
                className="contact-title"
                data-aos="fade-up"
            >
                Get In Touch
            </h2>

            <p
                className="contact-subtitle"
                data-aos="fade-up"
                data-aos-delay="150"
            >
                Have a project, internship opportunity, or just want to connect?
            </p>

            <div
                className="contact-links"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <a
                    href="mailto:durgeshrout8@gmail.com"
                    className="contact-link email-btn"
                    target="_blank"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <FaEnvelope />
                    Email
                </a>

                <a
                    href="https://github.com/durgesh033"
                    className="contact-link github-btn"
                    target="_blank"
                    data-aos="fade-up"
                    data-aos-delay="450"
                >
                    <FaGithub />
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/durgesh-kumar-rout-183824260/"
                    className="contact-link linkedin-btn"
                    target="_blank"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <FaLinkedin />
                    LinkedIn
                </a>
            </div>
        </section>
    );
}