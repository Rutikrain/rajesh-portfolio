import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:yelnureaditya@gamil.com" data-cursor="disable">
                yelnureaditya@gamil.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor in Banking & Insurance</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://www.linkedin.com/in/aditya-yelnure-a33b432b5/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.behance.net/adityayelnure1"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>

          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aditya Yelnure</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
