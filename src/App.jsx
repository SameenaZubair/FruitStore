import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Menus from './Menus.jsx';
import Banner from './components/Banner.jsx';
import Bannerr from './components/Bannerr.jsx';
import Banner3 from './components/Banner3.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        {/* No need to include ResponsiveMenu here as i have already include that in navbar*/}
        <Menus/>
        <Banner/>
        <Bannerr/>
        <Banner3/>
        <Footer/>
      </main>
    </>
  )
}

export default App;
