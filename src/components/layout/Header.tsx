import './Header.css';

interface HeaderProps {
  sidebarCollapsed: boolean;
}

const Header = ({ sidebarCollapsed }: HeaderProps) => {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo">
          <img             
            src={sidebarCollapsed ? "/LogoSophia1.png" : "/LogoSophia2.png"}
            alt="Sophia Logo"
            className="logo-image"
          />
        </div>
      </div>
      <div className="user-section">
        <span className="user-name">User</span>
      </div>
    </header>
  );
};

export default Header;