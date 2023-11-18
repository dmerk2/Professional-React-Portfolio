import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

import "../styles/Footer.css";

export default function Footer() {
  const resume =
    "https://docs.google.com/document/d/e/2PACX-1vQt386DXS9ZwBWwrqXYtBiM2QAkDziaAeDPfkcPUFlYgOYYnmDWaqMogll2Wa1_VzqjVg4e1QGt-gG2/pub";
  return (
    <footer className="footer mt-3 p-3 text-center">
      <div className="container">
        <div className="mb-0 d-flex justify-content-center">
          <div className="footer-link">
            <a
              href="https://www.linkedin.com/in/dmerk2/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLinkedin className="footer-icon" id="linkedin-icon" />
            </a>
            <div>Linkedin</div>
          </div>
          <div className="px-5">
            <a
              href="https://github.com/dmerk2"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaGithub className="footer-icon" id="github-icon" />
            </a>
            <div>Github</div>
          </div>
          <div className="footer-link">
            <a href={resume} className="mx-2">
              <IoDocumentTextOutline className="footer-icon" id="resume-icon" />
            </a>
            <div>Resume</div>
          </div>
        </div>
        <div>
          <FaPhone className="phone-icon"/>
          <a href="tel:6096130059">(609) 613-0059</a>
        </div>
        <p className="mb-0 pt-2 text-dark">© 2023 Daniel Merkin</p>
      </div>
    </footer>
  );
}
