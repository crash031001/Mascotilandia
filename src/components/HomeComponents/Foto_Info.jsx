import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
const Foto_Info = () => {
  return (
    <div>
        <div className="card card-inicial">
          <img src={logo} className="card-img-top foto-principal" alt="..."/>
          <div className="card-body">
            <h5 className="card-text">Tienda de Accesorios para Mascotas</h5>
            <Link className='card-text text-secondary' to='/info'>Ver Más...</Link>

              <div className='badgets d-flex mt-2'>
                <span class="badge text-bg-info text-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bicycle mb-1 me-1" viewBox="0 0 16 16">
                    <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5m1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139zM8 9.057 9.598 6.5H6.402zM4.937 9.5a2 2 0 0 0-.487-.877l-.548.877zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53z"/>
                  </svg>
                Entrega a domicilio
                </span>
                <span className='badge text-bg-success text-light mx-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill mb-1 me-1" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                  Se encuentra en...</span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Foto_Info