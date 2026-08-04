import { NavLink } from "react-router-dom";
import "../../App.css";
import image from "../../assets/equiflow_02.png" 

const HomePage = () => {
  return (
    <div className="layout-sm">
      <div className="content">
        <h1>EquiFlow</h1>

        <p className="hero-text">
          Historical Market Data & Portfolio Analytics
        </p>
        <p>
          A personal project focused on market analysis, portfolio management
          and modern Java web development.
        </p>
        <img className="img" src={image} alt="EquiFlow preview" width={250}/>
        <hr className="card"/>
        <div className="tech-stack">
          <span className="badge">React</span>
          <span className="badge">TypeScript</span>
          <span className="badge">Spring Boot</span>
          <span className="badge">Java 21</span>
          <span className="badge">PostgreSQL</span>
          <span className="badge">Nginx</span>
          <span className="badge">Linux VPS</span>
        </div>
        <div>
          <div className="group-row">
            <div className="section card">
              <h3>Stock dashboard</h3>
              <hr className="card"/>
              <p>Explore historical market prices with interactive charts.</p>
              <ul>
                <li>Historical prices</li>
                <li>Interactive charts</li>
                <li>Multiple timeframes</li>
              </ul>
              <hr className="card"/>
              <div className="content">

              <NavLink to="/stock" className="btn btn-primary">
                Open Dashboard
              </NavLink>
              </div>
            </div>
            <div className="section card">
              <h3>Portfolio dashboard</h3>
              <hr className="card"/>
              <p>Manage portfolios and monitor investment performance.</p>
              <ul className="list-sm">
                <li>Portfolio overview</li>
                <li>Holdings </li>
                <li>Performance </li>
              </ul>
              <hr className="card"/>
              <div className="content">

              <NavLink to="/portfolio" className="btn btn-primary">
                Open Dashboard
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="card"/>
      <div className="card">

      <h3>Current Progress</h3>

      <ul className="list-sm">
        <li>✅ Historical stock data</li>
        <li>✅ VPS deployment</li>
        <li>✅ Portfolio dashboard</li>
        <li>🚧 Portfolio analytics</li>
      </ul>
      </div>
    </div>
  );
};

export default HomePage;
