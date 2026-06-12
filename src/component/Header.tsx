import { useState } from "react";
import ContactModal from "./ContactModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="header">
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
