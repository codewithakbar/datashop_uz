import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import Navbar from './navbar/Navbar'
import snowLogo from './christmas-snowflake-winter-free-png.png'
import Snowfall from 'react-snowfall'

const snowFlake = document.createElement('img') 
snowFlake.src = snowLogo

function App() {
  const images = [snowFlake]
  return (
    <>
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
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App