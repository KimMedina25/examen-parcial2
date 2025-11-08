import React, { useEffect, useState } from "react";
import API_URL from "../config/api"; //se usa para obtener la URL del backend
import { Link } from "react-router-dom";


const ListParticipantes = () => {
  const [participantes, setParticipantes] = useState([]);
  const [buscar, setBuscar] = useState("");

  // Cargar datos desde el backend al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await fetch(`${API_URL}/listado`);
        const data = await respuesta.json();
        console.log("Datos recibidos del backend:", data);

        if (data.$values && Array.isArray(data.$values)) {
          setParticipantes(data.$values);
        } else if (Array.isArray(data)) {
          setParticipantes(data);
        } else {
          console.error("Estructura de datos inesperada:", data);
          setParticipantes([]);
        }
      } catch (error) {
        console.error("Error al conectar con el backend:", error);
        setParticipantes([]);
      }
    };
    cargarDatos();
  }, []);

  // Filtrar participantes según el término de búsqueda
  const participantesFiltrados = participantes.filter((p) => {
    const nombreCompleto = `${p.nombre} ${p.apellidos}`.toLowerCase();
    return nombreCompleto.includes(buscar.toLowerCase());
  });

  return (
     <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dceeff, #d5f7e2, #e6dcfa)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          textAlign: "center",
          width: "100%",
          maxWidth: "900px",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Encabezado */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ fontWeight: "bold", color: "#333", display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="/congresoTics2.jpg"
              alt="Congreso TIC"
              style={{
                width: "45px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            Asistentes Registrados
          </h3>

          <Link
            to="/registro"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "10px 25px",
              borderRadius: "25px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Registro
          </Link>
        </div>

        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="Buscar participante..."
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            outline: "none",
            fontSize: "16px",
          }}
        />

        {/* Lista de participantes */}
        {participantesFiltrados.length === 0 ? (
          <p style={{ color: "#777" }}>No hay participantes registrados</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {participantesFiltrados.map((p, index) => (
              <div
                key={p.idParticipante || index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  flexWrap: "wrap", // ✅ importante para que no se salga en móviles
                  wordBreak: "break-word", // ✅ evita que el texto se desborde
                }}
              >
                <Link
                  to={`/gafete/${p.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={`/${p.avatar ? `${p.avatar}.png` : "otro.png"}`}
                    alt="Avatar participante"
                    width="60"
                    height="60"
                    style={{
                      borderRadius: "50%",
                      border: "2px solid #ddd",
                      objectFit: "cover",
                    }}
                  />
                </Link>

                <div style={{ flex: 1, minWidth: "200px" }}>
                  <h5
                    style={{
                      margin: "0",
                      fontWeight: "bold",
                      color: "#333",
                      fontSize: "16px",
                      lineHeight: "1.2",
                    }}
                  >
                    {p.nombre} {p.apellidos}
                  </h5>
                  <p style={{ margin: "0", color: "#007bff", fontSize: "14px" }}>
                    {p.email || "Sin Email"}
                  </p>
                  <p style={{ margin: "0", color: "#007bff", fontSize: "14px" }}>
                    @{p.twitter || "Sin Twitter"}
                  </p>
                  <p style={{ margin: "0", color: "#777", fontSize: "13px" }}>
                    {p.ocupacion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListParticipantes;
