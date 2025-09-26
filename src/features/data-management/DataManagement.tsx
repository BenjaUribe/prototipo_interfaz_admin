import './DataManagement.css';
import { useState } from 'react';

const DataManagement = () => {

  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(true);
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(true);

  return (
    <div className="data-feature">
      {
        <aside className={`sidebar-left ${leftSidebarCollapsed ? 'collapsed' : ''}`}>        
          <button className='collapse-button' onClick={() => {
            if (leftSidebarCollapsed) {
              // Si vamos a expandir la izquierda, colapsar la derecha
              setRightSidebarCollapsed(true);
              setLeftSidebarCollapsed(false);
            } else {
              // Si vamos a colapsar la izquierda
              setLeftSidebarCollapsed(true);
            }
          }}>
            {leftSidebarCollapsed ? '>' : '<'}
          </button>

          <div className='sidebar-title'> Corrección de errores </div>
          <div className='sidebar-content'>
            {/* Contenido del sidebar izquierdo */}
          </div>
        </aside>
      }

      {/* existe para mantener el contenido central. NO TOCAR */}
      <div className="data-container">
        <h1></h1>
        <p></p>
      </div>

      {<aside className={`sidebar-right ${rightSidebarCollapsed ? 'collapsed' : ''}`}>
          
          <button className='collapse-button' onClick={() => {
            if (rightSidebarCollapsed) {
              // Si vamos a expandir la derecha, colapsar la izquierda
              setLeftSidebarCollapsed(true);
              setRightSidebarCollapsed(false);
            } else {
              // Si vamos a colapsar la derecha
              setRightSidebarCollapsed(true);
            }
          }}>
            {rightSidebarCollapsed ? '<' : '>'}
          </button>

          <div className='sidebar-title'> Estadisticas </div>

          <div className='sidebar-content'>
            {/* Contenido del sidebar derecho */}
          </div>

        </aside>
      }

    </div>
  );
};

export default DataManagement;