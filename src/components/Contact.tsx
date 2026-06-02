import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p>Contact</p>
          <h3>Ready to build something meaningful.</h3>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card-large">
            <a href="mailto:pratham6415@gmail.com" data-cursor="disable">
              pratham6415@gmail.com
            </a>
          </div>

          <div className="contact-card">
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
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
