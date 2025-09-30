import type { ActiveView } from '../../types/navigation';
import './Sidebar.css';

interface SidebarProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const navigationItems = [
  { id: 'data-management' as ActiveView, title: 'GestiÃ³n de datos', shortName: 'GD' },
  { id: 'media-management' as ActiveView, title: 'GestiÃ³n de medios', shortName: 'GM' },
  { id: 'scraping-config' as ActiveView, title: 'Configurar Scraping', shortName: 'CS' },
  { id: 'error-notifications' as ActiveView, title: 'NotificaciÃ³n de errores', shortName: 'NE' },
  { id: 'backup-management' as ActiveView, title: 'GestiÃ³n de respaldos', shortName: 'GR' },
  { id: 'user-management' as ActiveView, title: 'GestiÃ³n de usuarios', shortName: 'GU' },
];

const Sidebar = ({ activeView, onViewChange, collapsed, onToggleCollapse }: SidebarProps) => {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={onToggleCollapse}>
        {collapsed ? 'Â»' : 'Â«'}
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
