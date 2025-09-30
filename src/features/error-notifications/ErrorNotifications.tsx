import "./ErrorNotifications.css"
import { useState } from 'react';

const ErrorNotifications = () => {
  const [activeTab, setActiveTab] = useState(0);
  const mockRows = Array(60).fill("Información de error");
  
return (
    <div className="feature-container">
      <div className="Error-contenedor">
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
                <div className="table-container">
                  <div className="error-list">
                    {mockRows.map((text, index) => (
                      <div key={index} className="error-row">
                        <div className="error-content">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="tab-panel">
                <div className="table-container">
                  <div className="error-list">
                    {mockRows.map((text, index) => (
                      <div key={index} className="error-row">
                        <div className="error-content">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotifications;