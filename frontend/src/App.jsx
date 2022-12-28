import Footer from './footer/Footer';
import Navbar from './navbar/Navbar'
import snowLogo from './christmas-snowflake-winter-free-png.png'
import Snowfall from 'react-snowfall'
import {BrowserRouter , Link, Route , Routes } from 'react-router-dom'
import WebMenu from './WebMenu';
import Shop from './shop/Shop';
import { useState } from 'react';
import tufGamingPng from './texnoimg/tufgaming.png'
import victus from './texnoimg/victus.png'
import aser from './texnoimg/acer.png'
import axios from 'axios'
import Laptop from './shop/Laptop';
import { useEffect } from 'react';
import m1 from './texnoimg/m1.png'
import m2 from './texnoimg/m2.png'
import m3 from './texnoimg/m3.png'
import m4 from './texnoimg/m4.png'
import Korzinka from './Korzina/Korzina';
import Zakaz from './Zakaz/Zakaz';



function App() {


  // snow animate 
  const snowFlake = document.createElement('img') 
  snowFlake.src = snowLogo
  const images = [snowFlake]
  // snow animate



  fetch("https://akbar2day.pythonanywhere.com/api/?format=json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });



  const [laptops] = useState([
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
const [monitors , setMonitors] = useState([
  {
      img: m1 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m2 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m3 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m4 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m1 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m2 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m3 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m4 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m1 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  },
  {
      img: m2 ,
      name: 'Gigabyte — 32″ G32QC-EK Curved...' ,
      prise: 14.500
  }
])

const [smartfon , setSmartfon] = useState([
  {
    img: 'https://www.tescomobile.com/media/catalog/product/i/p/iphone_14_pro_max_space_black_pdp_image_position-3__gben.png?width=290&height=430&canvas=290:430&optimize=low&fit=bounds' ,
    name: 'Iphone 14 Pro Max' ,
    prise: '14.500'
  }
])

const [aksesuar , setAksesuar] = useState([
  {
    img: 'https://img.cgaxis.com/2021/11/airpods_max_silver_a.webp' ,
    name: 'AirPods Max' ,
    prise: '14.500'
  }
])

// Shop ichindagi productlani chiqishini taminlidi
const [shops , setShops] = useState([])  // Shop ichindagi productlani chiqishini taminlidi
// Shop ichindagi productlani chiqishini taminlidi


// shop qismina produqtlani nomina qarab yubaradi ===============
function AddLaptop() {
  setShops(laptops)
}
function AddMonitor() {
  setShops(monitors)
}                                                               // shop qismina produqtlani nomina qarab yubaradi ===============
function AddSmartfon() {
  setShops(smartfon)
}
function AddAksesuar() {
  setShops(aksesuar)
}
// shop qismina produqtlani nomina qarab yubaradi ===============

  const [adds, add ]= useState([])
  const [fotChange , setFotChange] = useState('')
  const [addKorzinka , setAddKorzinka] = useState([])
  

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
        <Navbar 
        AddLaptop={AddLaptop} 
        AddMonitor={AddMonitor} 
        AddSmartfon={AddSmartfon} 
        AddAksesuar={AddAksesuar} 
        setFotChange={setFotChange}/>
        <Routes>
          <Route path='/' element={<WebMenu laptops={laptops} monitors={monitors} add={add}/> }/>
          <Route path='/shop' element={<Shop shops={shops} />}/> 
          <Route path='/laptop' element={<Laptop adds={adds} setAddKorzinka={setAddKorzinka}/>} />
          <Route path='/korzinka' element={<Korzinka addKorzinka={addKorzinka} />} />
          <Route path='/zakaz' element={<Zakaz />} />
        </Routes>
        <Footer fotChange={fotChange}/>
      </BrowserRouter>
    </>
  );
}

export default App