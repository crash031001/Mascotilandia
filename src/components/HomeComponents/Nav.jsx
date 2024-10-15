import React from 'react'
import { Link } from 'react-router-dom'
import products from '../../utils/products.json';
import { useState } from 'react';
import { useEffect } from 'react';
import logoIcon from '../../assets/LogoIcon.png'
import { act } from 'react';
const Nav = (props) => {
  const categ = new Set(products.map(produc => produc.categoria))
  const [activeSection, setActiveSection] = useState(null)
  let categories = []
  categ.forEach(cat =>{
    categories.push(cat)
  })
  console.log(categ);
  console.log(categories);
  const handleChange = (e) =>{
    props.setsearch(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(input.length > 2){
      props.setsearch("");
    }
  }
  const [showCategs, setshowCategs] = useState(false)
  
  useEffect(() => {

    const handleScroll =()=>{
      let activeSection = null;
      const sections = document.querySelectorAll('.section');
      const minscroll = 500
      if (window.scrollY >= minscroll){
        setshowCategs(true)
        for (const section of sections){
          const adjustedScrollY = window.scrollY + 100; 
          if (adjustedScrollY >= section.offsetTop && adjustedScrollY <= section.offsetTop + section.offsetHeight) {
            activeSection = section.id;
            break
          }
        }
        setActiveSection(activeSection)
      }else{
        setshowCategs(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className='nav-sticky'>
   <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
  <a className="navbar-brand logo text-light" href="#">
  <img src={logoIcon} className="card-img-top foto-logo" alt="..."/>
    Mascotilandia
    </a>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
    </svg>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to='/info'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle-fill mb-1 me-2 text-light" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
          </svg>
            Más sobre Mascotilandia
            </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tags-fill mb-1 me-2" viewBox="0 0 16 16">
            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
          </svg>
            Categorías
          </a>
          <ul className="dropdown-menu">
            {categories.map(categ => (<li><a className="dropdown-item" href={`#${categ}`} >{categ}</a></li>))}
          </ul>
        </li>
      </ul>
      <form className="d-flex search" role="search" onSubmit={handleSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-light me-2" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <input className="form-control me-2 w-auto" type="search" placeholder="Buscas algo específico?" aria-label="Search" onChange={handleChange}></input>
      </form>
    </div>
  </div>
</nav>

{showCategs && <nav id="#navbar-example2" className="navbar bg-dark px-3 mb-3 categs">
  <ul className="nav nav-pills categ-name" id='c' >
    {categories.map(categ =>(
      <li className={`nav-item ${activeSection == categ ? 'active' : ''}`}>
        <a className="nav-link text-light categ" id={`${activeSection == categ ? 'active' : ''}`} href={`#${categ}`} >{categ}</a>
    </li>
    ))}
  </ul>
</nav>}
    </div>
  )
}

export default Nav