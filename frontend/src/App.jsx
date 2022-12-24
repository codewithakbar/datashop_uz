import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import Navbar from './navbar/Navbar'
import snowLogo from './christmas-snowflake-winter-free-png.png'
import Snowfall from 'react-snowfall'
import {BrowserRouter , Route , Routes, useNavigate } from 'react-router-dom'
import WebMenu from './WebMenu';
import Shop from './shop/Shop';
import { useState } from 'react';
import tufGamingPng from './texnoimg/tufgaming.png'
import victus from './texnoimg/victus.png'
import aser from './texnoimg/acer.png'

const snowFlake = document.createElement('img') 
snowFlake.src = snowLogo


function App() {
  const [laptops , setLaptops] = useState([
    {   
        id: 1 ,
        img: tufGamingPng ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },     
    {
        id: 2 ,
        img: aser ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
    {
        id: 3,
        img: victus ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
    {
        id: 4,
        img: tufGamingPng ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
    {
        id: 5,
        img: aser ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
    {
        id: 6,
        img: victus ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
    {
        id: 7,
        img: tufGamingPng ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
    {
        id: 8,
        img: aser ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
    {
        id: 9,
        img: victus ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
    {
        id: 10,
        img: tufGamingPng ,
        name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..' ,
        prise: 14.500
    },
])
const [addLaptop , setAddLaptop] = useState([
        
])

  const images = [snowFlake]

  return (
    <>
      <BrowserRouter>
        <Snowfall 
          style={{ 
            position: 'fixed', 
            width: '100vw', 
            height: '100vh', 
            zIndex: 999999 
          
          }} 
          snowflakeCount={200} 
          radius={[10, 20]} 
          speed={[0.5, 2.5]} 
          wind={[-0.5, 2]} 
          images={images} 
          rotationSpeed={[-1, 1]} 
        />
        <Navbar setAddLaptop={setAddLaptop}/>
        <Routes>
          <Route path='/' element={<WebMenu laptops={laptops}/>}/>
          <Route path='/shop' element={<Shop laptops={laptops} addLaptop={addLaptop}/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App