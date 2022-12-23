import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import Navbar from './navbar/Navbar'
import snowLogo from './christmas-snowflake-winter-free-png.png'
import Snowfall from 'react-snowfall'
import {BrowserRouter , Route , Routes, useNavigate } from 'react-router-dom'
import WebMenu from './WebMenu';
import Shop from './shop/Shop';

const snowFlake = document.createElement('img') 
snowFlake.src = snowLogo

function App() {

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
        <Navbar/>
        <Routes>
          <Route path='/' element={<WebMenu/>}/>
          <Route path='/shop' element={<Shop/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App