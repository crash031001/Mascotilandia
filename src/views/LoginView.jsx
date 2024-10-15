import React from 'react'
import { Link } from 'react-router-dom'
const LoginView = () => {
  return (
    <div className='login'>
        <Link to='/info' className='btn-back'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left mb-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg><span className='btn-back-text'>Atrás</span></Link>
        <div className='card login-card'>
            <div className="card-body">
                <h1 className='text-dark mb-3'> <b>Administrar Sitio</b></h1>
                <form action="" className='form-floating loginDetails'>
                <div class="form-floating mb-3 w-100">
                  <input type="text" class="form-control user-psw" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Usuario</label>
                </div>
                <div class="form-floating mb-3 w-100">
                  <input type="password" class="form-control user-psw" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Contraseña</label>
                </div>
               <p className='text-dark mt-5'>Necesitas una Web? <span className='text-info'> Contáctanos</span></p>
                    <button className='btn confirmar w-50'>Confirmar</button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginView