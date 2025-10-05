import "./ErrorNotifications.css"
import { useState } from 'react';

const ErrorNotifications = () => {
  const [activeTab, setActiveTab] = useState(0);
  const mockRows = Array(60).fill("Información de error");
  const mockRows1 = Array(60).fill("Jorge");
  
return (
    <div className="feature-container">
      <h1>Notificación de errores</h1>
        <div className="tabs">
          <div className="tab-list">
            <button 
              className={activeTab === 0 ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(0)}
            >
              Error en scraping
            </button>
            <button 
              className={activeTab === 1 ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(1)}
            >
              Error en datos
            </button>
          </div>

        <div className="tab-content">
          {activeTab === 0 && (
            <div className="tab-panel">
              <div className="error-table-scroll">
              <table className="error-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Descripcion</th>
                </tr>
                </thead>
                <tbody>
                  {mockRows.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{row}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>    
          )}
          {activeTab === 1 && (
            <div className="tab-panel">
              <div className="error-table-scroll">
              <table className="error-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                </tr>
                </thead>
                <tbody>
                  {mockRows1.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{row}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>    
          )}
            </div>
        </div>
      </div>
  );
};

export default ErrorNotifications;