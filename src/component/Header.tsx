import "../index.css";
import "../style.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Equi<span>Flow</span></h1>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
