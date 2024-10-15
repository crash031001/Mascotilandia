import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark footer pt-2'>
        <div className='d-flex footer-details m-3'>
        <div className='tienda-info'>
        <h2 className='text-light'>Mascotilandia</h2>
        <p className='text-secondary'>Tienda de accesorios para mascotas</p>
        </div>
        <div className='contacto-info'>
        <h5 className='horario  text-success'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-watch me-1" viewBox="0 0 16 16">
        <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z"/>
        <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A6 6 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a6 6 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A6 6 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0"/>
        </svg>
        Abierto<span className='text-secondary'> - Abre 9am</span>
        </h5>
        <h5 className='text-light'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-signpost-fill me-2" viewBox="0 0 16 16">
  <path d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707"/>
</svg>Entregamos a Domicilio</h5>
        </div>
        <div className='text-light mt-2'>
            <h6>Contactos:</h6>
            <p className='phone'>+5353564181</p>
        </div>
        </div>
    </div>
  )
}

export default Footer