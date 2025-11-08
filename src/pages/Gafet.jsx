import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_URL from "../config/api";

const Gafet = () => {
  const { id } = useParams();
  const [participante, setParticipante] = useState(null);

  useEffect(() => {
    const obtenerParticipante = async () => {
      try {
        const resp = await fetch(`${API_URL}/gafete/${id}`);
        const data = await resp.json();
        setParticipante(data);
      } catch (error) {
        console.error("Error al obtener participante:", error);
      }
    };
    obtenerParticipante();
  }, [id]);

  if (!participante) {
    return <p className="text-center mt-5">Cargando gafete...</p>;
  }

  return (
        <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dceeff, #d5f7e2, #e6dcfa)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {/* Contenedor tipo Card central */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "25px",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
          padding: "40px",
          textAlign: "center",
          maxWidth: "850px",
          width: "100%",
          backdropFilter: "blur(6px)",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            color: "#1a237e",
            marginBottom: "25px",
          }}
        >
          Gafete del Participante
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          {/* CARD FRONTAL */}
          <div
            style={{
              width: "300px",
              height: "480px",
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src="/congresoTics2.jpg"
              alt="Logo Congreso"
              style={{
                width: "110px",
                marginBottom: "15px",
              }}
            />

            <img
              src={`/${participante.avatar ? `${participante.avatar}.png` : "otro.png"}`}
              alt="Avatar"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "100%",
                border: "5px solid #0077b6",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />

            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#0a1d3b",
                marginBottom: "4px",
              }}
            >
              {participante.nombre} {participante.apellidos}
            </h3>

            <p
              style={{
                fontSize: "15px",
                color: "#004b63",
                marginBottom: "0px",
              }}
            >
              {participante.ocupacion}
            </p>
          </div>

          {/* CARD REVERSO */}
          <div
            style={{
              width: "300px",
              height: "480px",
              background: "white",
              borderRadius: "20px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src="/congresoTics2.jpg"
              alt="Logo Congreso"
              style={{ width: "110px", marginBottom: "15px" }}
            />

            <img
              src="/qr.png"
              alt="QR Code"
              style={{ width: "160px", margin: "15px auto" }}
            />

            <div style={{ marginTop: "15px", fontSize: "14px", color: "#000000" }}>
              <h6 className="mb-0 text-primary">
                {participante.email || "Sin Email"}
              </h6>
              <h6 className="mb-0 text-primary">
                @{participante.twitter || "Sin Twitter"}
              </h6>
            </div>
          </div>
        </div>

        {/* Botón regresar */}
        <Link
          to="/participantes"
          style={{
            display: "inline-block",
            backgroundColor: "#007bff",
            color: "white",
            padding: "12px 30px",
            borderRadius: "30px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Volver al listado
        </Link>
      </div>
    </div>
    );
}

export default Gafet;
