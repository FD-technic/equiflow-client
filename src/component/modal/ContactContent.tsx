import githubIcon from "../../assets/github-logo.png";
import linkedinIcon from "../../assets/linkedin-logo.png";
import mailIcon from "../../assets/email.png";
import "./Modal.css";

type PortfolioModalProps = {
  mail: string;
  linkedin: string;
  github: string;
};

const ContactContent = ({ mail, linkedin, github }: PortfolioModalProps) => {

  return (
    <>
      <div>
        <p className="modal-block">
          <img src={mailIcon} height="22px"></img>{" "}
          <a href={`mailto:${mail}`}>{mail}</a>
        </p>
      </div>
      <div>
        <h3>My profiles on:</h3>
        <div className="modal-block">
          <div>
            <img src={linkedinIcon} height="22px"></img>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Petr Hron
            </a>
          </div>
          <p>
            <img src={githubIcon} height="22px"></img>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              FD-technic
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
