const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
            
        </div>
        <div>
          <p>
            &copy; 2026 Petr Hron • <a href="http://www.fdweb.cz">fdweb.cz</a>
          </p>
        </div>
        <div className="version">
          <p>EquiFlow v{import.meta.env.VITE_APP_VERSION}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
