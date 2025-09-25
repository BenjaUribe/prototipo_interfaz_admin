import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo">
          <img src="/LogoSophia1.svg" alt="Sophia Logo" className="logo-image" />
        </div>
      </div>
      <div className="user-section">
        <span className="user-name">User</span>
      </div>
    </header>
  );
};

export default Header;