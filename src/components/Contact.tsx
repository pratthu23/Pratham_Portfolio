import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p>Contact</p>
          <h3>Let's connect clearly.</h3>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card-large">
            <h4>Direct</h4>
            <a href="mailto:pratham6415@gmail.com" data-cursor="disable">
              pratham6415@gmail.com
            </a>
            <a href="tel:+919322098628" data-cursor="disable">
              +91-93220-98628
            </a>
            <p>
              Open to software development, AI/ML, NLP, full-stack, and creative
              web experience opportunities.
            </p>
          </div>

          <div className="contact-card">
            <h4>Links</h4>
            <a
              href="https://www.linkedin.com/in/prathamshah-dev/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://github.com/pratthu23"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.pshah.fun/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Website <MdArrowOutward />
            </a>
            <a
              href="/Pratham_Shah_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>

          <div className="contact-card">
            <h4>Creative Side</h4>
            <p>Photography</p>
            <p>Cinematography</p>
            <p>Video Editing</p>
          </div>
        </div>

        <div className="contact-footer">
          <p>
            Designed and developed for <span>Pratham Shah</span>
          </p>
          <p>
            <MdCopyright /> 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
