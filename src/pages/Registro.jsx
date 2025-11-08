import React, { useState } from 'react'
import API_URL from "../config/api";
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    twitter: "",
    ocupacion: "",
    avatar: "avatar1",
    aceptarTerminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.aceptarTerminos) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    try {
      const respuesta = await fetch(`${API_URL}/registro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (respuesta.ok) {
        alert("Participante registrado correctamente");
        setFormData({
          nombre: "",
          apellidos: "",
          email: "",
          twitter: "",
          ocupacion: "",
          avatar: "avatar1",
          aceptarTerminos: false,
        });
        navigate("/participantes");
      } else {
        alert("Error al registrar participante");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

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
  <div
    style={{
      background: "rgba(255, 255, 255, 0.85)",
      borderRadius: "20px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      padding: "40px",
      textAlign: "center",
      maxWidth: "500px",
      width: "100%",
      backdropFilter: "blur(8px)",
    }}
  >
    <h3
      style={{
        textAlign: "center",
        marginBottom: "25px",
        fontWeight: "bold",
        color: "#333",
      }}
    >
      Registro de Participante
    </h3>

    <form onSubmit={handleSubmit}>
      {/* Nombre */}
      <div style={{ marginBottom: "15px", textAlign: "left" }}>
        <label style={{ fontWeight: "600" }}>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      {/* Apellidos */}
      <div style={{ marginBottom: "15px", textAlign: "left" }}>
        <label style={{ fontWeight: "600" }}>Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      {/* Email */}
      <div style={{ marginBottom: "15px", textAlign: "left" }}>
        <label style={{ fontWeight: "600" }}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      {/* Twitter */}
      <div style={{ marginBottom: "15px", textAlign: "left" }}>
        <label style={{ fontWeight: "600" }}>Twitter:</label>
        <input
          type="text"
          name="twitter"
          value={formData.twitter}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      {/* Ocupación */}
      <div style={{ marginBottom: "15px", textAlign: "left" }}>
        <label style={{ fontWeight: "600" }}>Ocupación:</label>
        <input
          type="text"
          name="ocupacion"
          value={formData.ocupacion}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      {/* Avatares */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ fontWeight: "600", display: "block", marginBottom: "10px" }}>
          Selecciona tu avatar:
        </label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {[
            { id: "hombre", img: "/hombre.png", label: "Avatar 1" },
            { id: "mujer", img: "/mujer.png", label: "Avatar 2" },
            { id: "otro", img: "/otro.png", label: "Avatar 3" },
          ].map((avatar) => (
            <label key={avatar.id} style={{ textAlign: "center" }}>
              <input
                type="radio"
                name="avatar"
                value={avatar.id}
                checked={formData.avatar === avatar.id}
                onChange={handleChange}
                style={{ marginRight: "5px" }}
              />
              <img
                src={avatar.img}
                alt={avatar.label}
                width="60"
                height="60"
                style={{
                  borderRadius: "50%",
                  border:
                    formData.avatar === avatar.id
                      ? "3px solid #28a745"
                      : "2px solid #ccc",
                  cursor: "pointer",
                }}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Términos */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          justifyContent: "flex-start",
        }}
      >
        <input
          type="checkbox"
          name="aceptarTerminos"
          checked={formData.aceptarTerminos}
          onChange={handleChange}
          style={{ marginRight: "8px" }}
        />
        <label>Acepto los términos y condiciones</label>
      </div>

      {/* Botón Guardar */}
      <button
        type="submit"
        style={{
          backgroundColor: "#28a745",
          color: "white",
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "30px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
      >
        Guardar
      </button>
    </form>
  </div>
</div>

  );
};

export default Registro;

