import './BackupManagement.css';

const BackupManagement = () => {
  return (
    <div className="feature-container">
      <div className="Backup-contenedor">
        <div>
            <h3 className="titulo">Tabla de respaldos</h3>
          </div>
        <div className='tabla-container'>
        <table className="tabla">
          <thead>
            <tr>
              <th>Fecha respaldo</th>
              <th>Tipo de respaldo</th>
              <th>Tamaño</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 15 }).map((_, idx) => (
              <tr key={idx}>
                <td>10-01-2025</td>
                <td>Noticias</td>
                <td>500 MB</td>
                <td>
                  <button className="link">Eliminar</button> /{" "}
                  <button className="link">Restaurar</button> /{" "}
                  <button className="link">Descargar</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
        <div className="acciones">
          <button className="btn">Importar Respaldo</button>
          <button className="btn">Crear Respaldo</button>
        </div>
      </div>
    </div>
  );
};

export default BackupManagement;