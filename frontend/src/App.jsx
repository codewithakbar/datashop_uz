import Footer from './footer/Footer';
import Navbar from './navbar/Navbar'
import snowLogo from './christmas-snowflake-winter-free-png.png'
import Snowfall from 'react-snowfall'
import { BrowserRouter, Link, Route, Routes, useNavigate, redirect } from 'react-router-dom'
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
import Kabinet from './profil/kabinet';
import Account from './profil/Accaunt';
import MoyZakaz from './profil/MoyZakaz';
import Xabar from './profil/Xabar';
import Izb from './izbronoe/Izb'
// booto bar uchun icoon ================= START
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineStar } from 'react-icons/ai'
import { RxPerson } from 'react-icons/rx'
import KorzinkaPustoy from './Korzina/KorzinkaPustoy';
import Laptops from './main/laptop';
import ShopProducts from './shop/shopProducts';
import { AppContext } from './AppContext'
// booto bar uchun icoon ================= END


function App() {


  // snow animate 
  const snowFlake = document.createElement('img')
  snowFlake.src = snowLogo
  const images = [snowFlake]
  // snow animate



    async function GetTack() {
      const laptopUrl = await axios.get('https://api.datashop.uz/api/device?typeId=4')
      const monitorUrl = await axios.get('https://api.datashop.uz/api/device?typeId=1')
      setLaptops(laptopUrl.data.rows);
      setMonitors(monitorUrl.data.rows)
   }
   useEffect( () => {
    GetTack()
   }, [])
  let baseURL = 'https://api.datashop.uz/'




  const [laptops, setLaptops] = useState([
    // {
    //   id: 1,
    //   img: tufGamingPng,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 2,
    //   img: aser,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 3,
    //   img: victus,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 4,
    //   img: tufGamingPng,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 5,
    //   img: aser,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 6,
    //   img: victus,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 7,
    //   img: tufGamingPng,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 8,
    //   img: aser,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 9,
    //   img: victus,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
    // {
    //   id: 10,
    //   img: tufGamingPng,
    //   name: 'HP Victus 15 RTX 3050 / i5 12400f / 512 GB SSD..',
    //   prise: '????'
    // },
  ])


  const [monitors, setMonitors] = useState([
    // {
    //   img: m1,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m2,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m3,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m4,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m1,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m2,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m3,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m4,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m1,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // },
    // {
    //   img: m2,
    //   name: 'Gigabyte — 32″ G32QC-EK Curved...',
    //   prise: '????'
    // }
  ])

  const [smartfon, setSmartfon] = useState([
    {
      img: 'https://free-png.ru/wp-content/uploads/2021/02/TENC_6.5_iPhone_11_PC-658CC-3_1024x1024-7ccac3cc.png',
      name: 'Iphone 14 Pro Max',
      prise: '14.500'
    }
  ])

  const [aksesuar, setAksesuar] = useState([
    {
      img: 'https://img.cgaxis.com/2021/11/airpods_max_silver_a.webp',
      name: 'AirPods Max',
      prise: '14.500'
    }
  ])

  // Shop ichindagi productlani chiqishini taminlidi
  const [shops, setShops] = useState([])  // Shop ichindagi productlani chiqishini taminlidi
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

  const [adds, add] = useState([])
  const [fotChange, setFotChange] = useState('')
  const [addKorzinka, setAddKorzinka] = useState([])



  // korzinka ischindagi nasani dalete atadi
  function Delete(id) {
    const filtered = addKorzinka.filter(korzinka => korzinka.id != id)    // korzinka ischindagi nasani dalete atadi
    setAddKorzinka(filtered)
    console.log(filtered)
  }
  // korzinka ischindagi nasani dalete atadi

  //korzinkaga ikki element qoshilsa count qoshiladi
  function FilterAdd(id) {
    const filtered = addKorzinka.filter(addKorzin => addKorzin.id != id)    
    setAddKorzinka(filtered)
  }
  //korzinkaga ikki element qoshilsa count qoshiladi

  // Korzinka Count ===== START

  // Korzinka Count ===== END

  // Korzinka On-Off Function ==== START
  // const navigate = useNavigate()
  // function korzinkaOn() {
  //   if (addKorzinka.length == 0) {
  //    navigate('korzinkaNoneProduct')
  //   }
  //   if (addKorzinka.length > 0) {
  //     navigate('korzinka')
  //   }
  // }
  // Korzinka On-Off Function ==== END
  // TIMER ============================================================================ START

  // const [timerDays, setTimerDays] = useState();
  // const [timerHours, setTimerHours] = useState();
  // const [timerMinutes, setTimerMinutes] = useState();
  // const [timerSeconds, setTimerSeconds] = useState();

  // let interval;

  // const startTimer = () => {
  //   const countDownDate = new Date("jan ,29 , 2023 ").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();

  //     const distance = countDownDate - now;

  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (60 * 1000)) / 1000);

  //     if (distance < 0) {
  //       // Stop Timer

  //       clearInterval(interval.current);
  //     } else {
  //       // Update Timer
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   startTimer();
  // });


  // TIMER ============================================================================ END


  // izbrena add product ======================================= START
  const [izbProducts, setIzbProducts] = useState([])
  console.log(izbProducts);
  // izbrena add product ======================================= END


  // serach function ================ START
    const [search , setSerach] = useState([])
  // search function =============== END

  return (
    <>
      <AppContext.Provider value={{ laptops, monitors , aksesuar , smartfon , baseURL}}>
        <BrowserRouter>
          {/* <div className="blur">
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
        <h1>Ishga tushadi</h1>
      </div> */}
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
            addKorzinka={addKorzinka}
            AddLaptop={AddLaptop}
            AddMonitor={AddMonitor}
            AddSmartfon={AddSmartfon}
            AddAksesuar={AddAksesuar}
            setFotChange={setFotChange} />
          <Routes>
            <Route path='/' element={<WebMenu setIzbProducts={setIzbProducts} baseURL={baseURL} laptops={laptops} monitors={monitors} add={add} />} />
            <Route path='shop'>
              <Route index element={<Shop shops={shops} laptops={laptops} />} />
              <Route path='monitors' element={<Shop shops={shops} laptops={monitors} />} />
              <Route path='laptops' element={<Shop shops={shops} laptops={laptops} />} />
              <Route path='smartfon' element={<Shop shops={shops} laptops={smartfon} />} />
              <Route path='acsesuar' element={<Shop shops={shops} laptops={aksesuar} />} />
            </Route>
            <Route path='/laptop' element={<Laptop adds={adds} setAddKorzinka={setAddKorzinka} FilterAdd={FilterAdd} />} />
            <Route path='/korzinka' element={<Korzinka addKorzinka={addKorzinka} Delete={Delete} setAddKorzinka={setAddKorzinka} />} />
            <Route path='/zakaz' element={<Zakaz />} />
            <Route path='/kabinet' element={<Kabinet />} />
            <Route path='/profilZakaz' element={<MoyZakaz />} />
            <Route path='/xabar' element={<Xabar />} />
            <Route path='/account' element={<Account />} />
            <Route path='/Избранное' element={<Izb izbProducts={izbProducts} add={add} laptops={laptops} />} />
            <Route path='/korzinkaNoneProduct' element={<KorzinkaPustoy />} />
          </Routes>
          <Footer fotChange={fotChange} />
          <div className="bottomBar">
            <div className="shopLenght">
              <span>{addKorzinka.length}</span>
            </div>
            <Link to='/'><button>
              <FiHome size={'18px'} />
              <span>Главная</span>
            </button></Link>
            <Link to='/Избранное'><button>
              <AiOutlineStar size={'18px'} />
              <span>Избранное</span>
            </button></Link>
            <Link to='/korzinka'><button>
              <FiShoppingCart size={'18px'} />
              <span>Корзина</span>
            </button></Link>
            <Link to='/account'><button>
              <RxPerson size={'18px'} />
              <span>Профиль</span>
            </button></Link>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App