import { useState } from "react";
import "./MediaManegment.css";

const MediaManagement = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="feature-container">
      <div className="media-container">
        <h1>Medios de Prensa</h1>
        <div className="media-table-container">
          <table className="media-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>URL</th>
                <th>País</th>
                <th>Categoría</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 15 }).map((_, idx) => (
                <tr key={idx}>
                  <td>Jaime</td>
                  <td>Jaime</td>
                  <td>Jaime</td>
                  <td>Jaime</td>
                  <td>Jaime</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="media-actions">
          <button className="media-btn" onClick={() => setShowModal(true)}>
            Agregar Medio
          </button>
          <button className="media-btn">Borrar todo</button>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <form className="media-form">
                <input type="text" placeholder="Nombre medio" />
                <input type="text" placeholder="URL" />
                <input type="text" placeholder="PaÃ­s" />
                <input type="text" placeholder="CategorÃ­a" />
                <input type="text" placeholder="DescripciÃ³n" />
                <button className="media-btn" onClick={() => setShowModal(false)}>
                  Guardar
                </button>
                <button className="close-btn" onClick={() => setShowModal(false)}>
                  Cerrar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaManagement;