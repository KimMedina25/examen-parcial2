const API_URL =
  import.meta.env.MODE === "development"
    ? "https://localhost:7094/api"
    : "https://examen-parcial2back.onrender.com/api";

export default API_URL;

