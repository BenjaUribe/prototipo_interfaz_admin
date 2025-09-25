import type { ActiveView } from '../../types/navigation';
import './Sidebar.css';

interface SidebarProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const navigationItems = [
  { id: 'data-management' as ActiveView, title: 'Gestión de datos', shortName: 'GD' },
  { id: 'media-management' as ActiveView, title: 'Gestión de medios de prensa', shortName: 'GM' },
  { id: 'scraping-config' as ActiveView, title: 'Configurar Scraping', shortName: 'CS' },
  { id: 'error-notifications' as ActiveView, title: 'Notificación de errores', shortName: 'NE' },
  { id: 'backup-management' as ActiveView, title: 'Gestión de respaldos', shortName: 'GR' },
  { id: 'user-management' as ActiveView, title: 'Gestión de usuarios', shortName: 'GU' },
];

const Sidebar = ({ activeView, onViewChange, collapsed, onToggleCollapse }: SidebarProps) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={onToggleCollapse}>
        {collapsed ? '»' : '«'}
      </button>
      
      <nav className="navigation">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`nav-button ${activeView === item.id ? 'active' : ''}`}
            onClick={() => onViewChange(item.id)}
            title={collapsed ? item.title : undefined}
          >
            {collapsed ? item.shortName : item.title}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;