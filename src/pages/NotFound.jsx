import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {
  
    const error = useRouteError();

  return (
    <div>
        <h1>404 - Pages not found</h1>
        <p>The page you are looking for does not exit</p>
        <p>{error.statusText || error.message}</p>
        <Link to={"/"}>Regresa al Inicio</Link>
    </div>
  )
}

export default NotFound
