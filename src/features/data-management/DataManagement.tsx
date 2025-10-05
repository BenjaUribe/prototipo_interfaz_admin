import './DataManagement.css';
import { useState } from 'react';

const DataManagement = () => {
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(true);
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(true);

  return (
    <div className="data-feature">
      {/* Nueva barra superior con los botones de colapso */}
      <div className="toolbar">
        <div className="toolbar-section toolbar-section-left">
          <button 
            className='toolbar-button' 
            onClick={() => {
              if (leftSidebarCollapsed) {
                setRightSidebarCollapsed(true);
                setLeftSidebarCollapsed(false);
              } else {
                setLeftSidebarCollapsed(true);
              }
            }}
            title={leftSidebarCollapsed ? "Mostrar corrección de errores" : "Ocultar corrección de errores"}
          >
            {leftSidebarCollapsed ? '>' : '<'}
          </button>
          <span className="toolbar-label">Correcciones</span>
        </div>

        <div className="toolbar-center">
          <span>Gestor de datos</span>
        </div>

        <div className="toolbar-section toolbar-section-right">
          <span className="toolbar-label">Estadí­sticas</span>
          <button 
            className='toolbar-button' 
            onClick={() => {
              if (rightSidebarCollapsed) {
                setLeftSidebarCollapsed(true);
                setRightSidebarCollapsed(false);
              } else {
                setRightSidebarCollapsed(true);
              }
            }}
            title={rightSidebarCollapsed ? "Mostrar estadí­sticas" : "Ocultar estadí­sticas"}
          >
            {rightSidebarCollapsed ? '<' : '>'}
          </button>
        </div>
      </div>

      {/* Container principal */}
      <div className="main-content">
        <aside className={`sidebar-left ${leftSidebarCollapsed ? 'collapsed' : ''}`}>        
          {/* Solo mostrar tÃ­tulo cuando NO estÃ¡ colapsada */}
          {!leftSidebarCollapsed && (
            <div className='sidebar-title-expanded'>Corregir errores</div>
          )}
          
          <div className='sidebar-content'>
            <p>Contenido del sidebar izquierdo</p>
          </div>
        </aside>

        {/* existe para mantener el contenido central. NO TOCAR */}
        <div className="data-container">
          <h1></h1>
          <p></p>
        </div>

        <aside className={`sidebar-right ${rightSidebarCollapsed ? 'collapsed' : ''}`}>
          {/* Solo mostrar tÃ­tulo cuando NO estÃ¡ colapsada */}
          {!rightSidebarCollapsed && (
            <div className='sidebar-title-expanded'>Estadí­sticas</div>
          )}

          <div className='sidebar-content'>
            <div className="stats-grid">
              <div className="stat-item">
                {/* AquÃ­ pondrÃ¡s tu imagen 1 */}
                <img src="src/features/data-management/data/grafico1.svg" alt="GrÃ¡fico 1" className="stat-image" />
              </div>
              
              <div className="stat-item">
                {/* AquÃ­ pondrÃ¡s tu imagen 2 */}
                <img src="src/features/data-management/data/grafico2.svg" alt="GrÃ¡fico 2" className="stat-image" />
              </div>
              
              <div className="stat-item">
                {/* AquÃ­ pondrÃ¡s tu imagen 3 */}
                <img src="src/features/data-management/data/grafico3.svg" alt="GrÃ¡fico 3" className="stat-image" />
              </div>
              
              <div className="stat-item">
                {/* AquÃ­ pondrÃ¡s tu imagen 4 */}
                <img src="src/features/data-management/data/grafico4.svg" alt="GrÃ¡fico 4" className="stat-image" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DataManagement;