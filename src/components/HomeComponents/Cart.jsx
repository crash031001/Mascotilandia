import React from 'react'
import products from '../../utils/products.json'
const Cart = (props) => {
  let list = Object.entries(props.cant)
  let nombres =[]
  let string = ``
  let importe = Math.round(props.importe)

    list.forEach(e =>{
      if (e[1] != undefined) {
        nombres.push(products.filter(prod => e[0]==prod.id).map(prod =>prod.nombre.concat(`(${e[1]})`)))
      }
    })
    string = nombres.join(',')
  console.log(list);
  console.log('Nombres:'+ nombres);
  console.log("String:" + string);
  const cerrarLista =()=>{
    nombres = []
    string = ``
  }
  return (
    <div>
        <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header text-dark">
    <h2 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">Lista de Compra</h2>
    <hr className='linea'/>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
    <ul class="list-group">
        {list.map(elem =>(
           elem[1]>=1 && <li class="list-group-item cart_elem my-2 rounded">
            <div className='cart-item'>
            <div className='foto-cart-container'>
            <img className='foto-cart' src="https://arsveterinaria.es/wp-content/uploads/2023/02/cuanta-comida-humeda-se-le-da-a-un-gato.jpg" alt="" />
            </div>
          <div class="fw-bold details-cart-product ms-3">
            <span className='inCart-name'>{products.filter(prod => prod.id == elem[0]).map(prod => prod.nombre)} <span className='text-info fw-bolder'>(x{elem[1]})</span></span>
              
              {products.filter(prod => prod.id == elem[0]).map(prod => (
              <div className='price-cant w-100'>
              <span className='inCart-price text-secondary'>${prod.precio * elem[1]}
              </span>
              <div className='d-flex inCart-cant'>
                <span className='inCart-prod-btn' onClick={() => {props.removeElem(prod.id),props.setimporte(importe - parseFloat(prod.precio)),deleteElem(),props.setTotal(props.total - 1)}}>-</span>
                <span className='mx-1'><b>{props.cant[prod.id || 0]}</b></span>
                <span className='inCart-prod-btn' onClick={() => {props.addElem(prod.id),props.setimporte(importe + parseFloat(prod.precio))}}>+</span>
              </div>
              </div>
                ))}
            </div>
            </div>
          </li>
        ))}
    </ul>
    </div>
    { props.total >= 1 ?
    <div class="mt-3 d-flex importe-compra">
      <h5 className='text-dark'>Importe Total: <span className='text-info'> ${importe}</span></h5>
      <button class="btn bg-info" data-bs-dismiss="offcanvas" type="button" onClick={()=>cerrarLista()}>
       <a href={`https://api.whatsapp.com/send?phone=5356419170&text=Estoy%20interesado%20en%20${string}`} target='_blank' className='comprar'> Comprar</a>
      </button>
    </div>:
    <div className='d-flex flex-column'>
    <div class="text-info">
    <h4>No tienes productos en el carrito :(</h4>
  </div>
  <button className='btn btn-dark mt-3' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Añadir Productos</button>
  </div>
    }
  </div>
</div>
    </div>
  )
}

export default Cart