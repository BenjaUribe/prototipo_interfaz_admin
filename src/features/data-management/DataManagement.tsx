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
          <span className="toolbar-label">Corrección de errores</span>
        </div>

        <div className="toolbar-center">
          <span>Gestor de datos</span>
        </div>

        <div className="toolbar-section toolbar-section-right">
          <span className="toolbar-label">Estadísticas</span>
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
            title={rightSidebarCollapsed ? "Mostrar estadísticas" : "Ocultar estadísticas"}
          >
            {rightSidebarCollapsed ? '<' : '>'}
          </button>
        </div>
      </div>

      {/* Container principal */}
      <div className="main-content">
        <aside className={`sidebar-left ${leftSidebarCollapsed ? 'collapsed' : ''}`}>        
          {/* Solo mostrar título cuando NO está colapsada */}
          {!leftSidebarCollapsed && (
            <div className='sidebar-title-expanded'>Corrección de errores</div>
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
          {/* Solo mostrar título cuando NO está colapsada */}
          {!rightSidebarCollapsed && (
            <div className='sidebar-title-expanded'>Estadísticas</div>
          )}

          <div className='sidebar-content'>
            <div className="stats-grid">
              <div className="stat-item">
                {/* Aquí pondrás tu imagen 1 */}
                <img src="src/features/data-management/data/grafico1.svg" alt="Gráfico 1" className="stat-image" />
              </div>
              
              <div className="stat-item">
                {/* Aquí pondrás tu imagen 2 */}
                <img src="src/features/data-management/data/grafico2.svg" alt="Gráfico 2" className="stat-image" />
              </div>
              
              <div className="stat-item">
                {/* Aquí pondrás tu imagen 3 */}
                <img src="src/features/data-management/data/grafico3.svg" alt="Gráfico 3" className="stat-image" />
              </div>
              
              <div className="stat-item">
                {/* Aquí pondrás tu imagen 4 */}
                <img src="src/features/data-management/data/grafico4.svg" alt="Gráfico 4" className="stat-image" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DataManagement;