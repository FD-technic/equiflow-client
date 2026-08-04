import { useState } from "react";
import logo from "../assets/EF_logo.png";
import { NavLink } from "react-router-dom";
import BaseModal from "./modal/BaseModal";
import ContactContent from "./modal/ContactContent";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="header">
        <img src={logo} height="50px"></img>
        <h1>Equi<span>Flow</span></h1>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `btn ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
            </li>
            <li>
              <NavLink
              to="/stock"
              className={({ isActive }) =>
                `btn ${isActive ? "active" : ""}`
              }
            >
              Stock
            </NavLink>
            </li>
            <li>
              <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `btn ${isActive ? "active" : ""}`
              }
            >
              Portfolio
            </NavLink>
            </li>
            
            <li><button onClick={() => setIsModalOpen(true)} className="btn">Contact</button></li>
          </ul>
        </nav>
      </div>
      
      <BaseModal
        title="Contact Body"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        >
          <ContactContent
            mail="petr@fdweb.cz"
            linkedin="https://www.linkedin.com/in/petr-hron-dev/"
            github="https://github.com/FD-technic"
          />

        </BaseModal>
        

    </>
  );
};

export default Header;
