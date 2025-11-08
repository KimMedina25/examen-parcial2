import React from 'react'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #dceeff, #d5f7e2, #e6dcfa)', // azulito, verde bajito y lila
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '20px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '600px',
          width: '90%',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '25px' }}>
          <img
            src="/utl.jpg"
            alt="Logo Universidad Tecnológica de León"
            width="150"
            height="auto"
            style={{ borderRadius: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
          />
          <img
            src="/congresoTics2.jpg"
            alt="Logo Congreso de TIC"
            width="100"
            height="auto"
            style={{ borderRadius: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
          />
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>
          Congreso de <br /> Tecnologías de la Información
        </h1>

        <h4 style={{ color: '#555', lineHeight: '1.5', marginBottom: '10px' }}>
          Sé bienvenido al congreso de TIC's presentado dentro de la institución tecnológica de León.
          <br />
          Si no estás dentro de la lista de participantes, ¡regístrate! Te esperamos.
        </h4>

        <h4 style={{ color: 'red', fontWeight: '600', marginBottom: '30px' }}>¡Regístrate, no faltes!</h4>

        <Link
          to="/participantes"
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '30px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#2b7bbf')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')}
        >
          Ingresar
        </Link>
      </div>
    </div>
  )
}

export default Inicio
