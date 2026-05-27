import github from "../assets/github-logo.png";
import linkedin from "../assets/linkedin-logo.png";
import mail from "../assets/email.png";
import { useEffect } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(event) => event.stopPropagation()}>
          <div>
            <div className="modal-header">
              <span></span>
              <h2>Contact</h2>
              <button onClick={onClose} className="btn btn-modal">
                X
              </button>
            </div>
            <p className="modal-block">
              <img src={mail} height="22px"></img>{" "}
              <a href="mailto:petr@fdweb.cz">petr@fdweb.cz</a>
            </p>
          </div>
          <div>
            <h3>My profiles on:</h3>
            <div className="modal-block">
              <div>
                <img src={linkedin} height="22px"></img>
                <a
                  href="https://www.linkedin.com/in/petr-hron-409415a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Petr Hron
                </a>
              </div>
              <p>
                <img src={github} height="22px"></img>
                <a
                  href="https://github.com/FD-technic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FD-technic
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
