import { useState } from "react";
import ContactModal from "./ContactModal";
import logo from "../assets/EF_logo.png";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="header">
        <img src={logo} height="50px"></img>
        <h1>Equi<span>Flow</span></h1>
        <nav className="nav">
          <ul>
            <li><button onClick={() => setIsModalOpen(true)} className="btn">Contact</button></li>
          </ul>
        </nav>
      </div>
      <ContactModal
       isOpen={isModalOpen}
       onClose={() => setIsModalOpen(false)}

      />      
    </>
  );
};

export default Header;
