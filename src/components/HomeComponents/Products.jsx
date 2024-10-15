import React from 'react'
import products from '../../utils/products.json'
import { useState } from 'react'
import Cart from './Cart'
const Products = () => {
    const [cant, setCant] = useState({})
    const [total, setTotal] = useState(0)
    const [importe, setimporte] = useState(0)
    const categ = new Set(products.map(produc => produc.categoria))
    const [lista, setLista] = useState([])
    let categories = []
    categ.forEach(cat =>{
        categories.push(cat)
    })
    const addElem = (id) => {
        setCant(prevCant => ({
            ...prevCant,
            [id]: (prevCant[id] || 0) + 1
    }));
        setTotal(total + 1)
    };
    const crearLista =(nombre)=>{
        setLista([...lista,nombre])
    }
    const removeElem = (id) => {
        setCant((prevCant) => {
            const currentCount = prevCant[id] || 0;
            return {
                ...prevCant,
                [id]: currentCount > 1 ? currentCount - 1 : undefined, // Cambia 0 por undefined
            };
        });
        setTotal(total - 1)
    };
    const printConsole =()=>{
        console.log(lista);
        console.log(cant);
    }
    
  return (
    <div>
        <h2 className='text-center m-3'>
        <img className='mb-1' width="28" height="28" src="https://img.icons8.com/color/48/shopping-basket.png" alt="shopping-basket"/>
        <b>Productos</b>
        </h2>
        {categories.map(categ =>(
            <section id={categ} className='section rounded'>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px 0px" data-bs-smooth-scroll="true" class="scrollspy-example rounded-2">
                <div className='header-container'>
                <h4 className='text-center header-categ'>{categ}</h4>
                
                </div>
                
                <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-5 pb-3'>
                {products.filter(produc => produc.categoria == categ).map(produc =>(
                <div className='col mt-3' key={produc.id}>
                <div class="card card-product" key={produc.id}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lZfvNhk5HsLSQD3t8oHRPl-ke53GfW1sEw&s" loading='lazy' className="card-img-top produc-image" alt="..."/>
                    <div class="card-body produc-details">
                    <span class="card-title produc-name fw-bold">{produc.nombre}</span>
                    <span class="card-text produc-descripcion mb-1">{produc.descripcion}</span>
                    <div className='price-cart'>
                    <span className='text-info price'>${produc.precio}</span>
                        {cant[produc.id] == undefined  ? <button className='btn addCart' key={produc.id} onClick={()=> {addElem(produc.id);crearLista(produc.nombre),setimporte(importe + parseFloat(produc.precio))}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-cart-plus-fill me-1" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                        </svg>Añadir
                        </button>:
                         <div className='cant d-flex'>
                            <span className='less' onClick={() => {removeElem(produc.id),setimporte(importe - parseFloat(produc.precio))}}>-</span>
                            <span className='mx-1'><b>{cant[produc.id || 0]}</b></span>
                            <span className='more' onClick={() => {addElem(produc.id),setimporte(importe + parseFloat(produc.precio))}}>+</span>
                        </div>}
                    </div>
                    </div>
              </div>
              </div>
            ))}
                </div>
                </div>
            </section>
        ))}
        {total != 0 
            ?
            <div className='spam-bar text-light d-flex' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={()=> printConsole()}>
                <div className='d-flex spam-content bg-dark'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4 mx-2" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
                <p className='mt-3'>En el Carrito<span className='text-info fw-bold mx-1'>({total})</span></p>
                </div>
            </div>
            
            :
            <div className='whatsapp'>
                    <a href="https://api.whatsapp.com/send?phone=5356419170" className='text-light'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    </a>
                </div>}
            <Cart total={total} setTotal={setTotal} cant={cant} importe={importe} setCant={setCant} addElem={addElem} removeElem={removeElem} setimporte={setimporte} className="listaDeCompras"/>
        </div>
  )
}

export default Products