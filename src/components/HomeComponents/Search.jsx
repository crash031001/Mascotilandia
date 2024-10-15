import React from 'react'
import products from '../../utils/products.json'
const Search = (props) => {
    let busqueda = props.search.toLowerCase()
  return (
    <div>
        <div className='text-center'>
            <h2 className='text-secondary mt-3'><b> Estás buscando: <span className='text-info'>{props.search}</span></b></h2>
        </div>
        <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-3 pb-3'>
        {products.filter(produc => produc.nombre.toLowerCase().includes(busqueda)).map(produc =>(
                <div className='col mt-3' key={produc.id}>
                <div class="card card-product" key={produc.id}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lZfvNhk5HsLSQD3t8oHRPl-ke53GfW1sEw&s" className="card-img-top produc-image" alt="..."/>
                    <div class="card-body produc-details">
                    <span class="card-title produc-name fw-bold">{produc.nombre}</span>
                    <span class="card-text produc-descripcion mb-1">{produc.descripcion ? produc.descripcion : '...'}</span>
                    <div className='price-cart'>
                    <span className='text-info price'>${produc.precio}</span>
                       <a href={`https://api.whatsapp.com/send?phone=5356419170&text=Estoy%20interesado%20en%20${produc.nombre}`} target='_blank'> <button className='btn addCart' key={produc.id} onClick={()=> {addElem(produc.id);crearLista(produc.nombre)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill me-1" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                        </svg>Comprar
                        </button></a>
                    </div>
                    </div>
              </div>
              </div>
            ))}
            </div>
    </div>
  )
}

export default Search