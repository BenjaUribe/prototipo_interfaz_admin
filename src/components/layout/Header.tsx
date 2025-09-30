
import './Header.css';
import { useEffect, useState } from 'react';

interface HeaderProps {
  sidebarCollapsed: boolean;
}

const Header = ({ sidebarCollapsed }: HeaderProps) => {
  const [fade, setFade] = useState(!sidebarCollapsed);

  useEffect(() => {
    setFade(!sidebarCollapsed);
  }, [sidebarCollapsed]);

  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo" style={{ position: 'relative', width: '32px', height: '32px' }}>
          <img
            src="/LogoSophia1.png"
            alt="Sophia Logo 1"
            className="logo-image"
            style={{ position: 'absolute', left: 0, top: 0 }}
          />
          <img
            src="/LogoSophia2.png"
            alt="Sophia Logo 2"
            className={`logo-image${fade ? ' fade-in' : ' fade-out'}`}
            style={{ position: 'absolute', left: 0, top: 0 }}
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