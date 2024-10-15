import React from 'react'
import Nav from "../components/HomeComponents/Nav";
import Foto_Info from '../components/HomeComponents/Foto_Info';
import Products from '../components/HomeComponents/Products';
import Footer from '../components/HomeComponents/Footer';
import { useState } from 'react';
import Search from '../components/HomeComponents/Search';
const HomeView = () => {
  const [search, setsearch] = useState("")
  return (
    <div>
        <Nav search={search} setsearch={setsearch}/>
        {search === ""
         ? <div>
          <Foto_Info />
          <Products/>
          </div>
         : <Search search={search} />
         }
        <Footer/>
    </div>
  )
}

export default HomeView