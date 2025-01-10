import { useState, useEffect } from 'react';
import Background from '../../components/Background';
import Intro from './components/Intro';
import About from './components/About';
import Works from './components/Works';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import WhatCanIDo from './components/WhatCanIDo';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div>
      <Background />
      {/* <Navbar isMobile={isMobile}/> */}
      <div className="flex justify-center w-screen text-gray-700">
        {!isMobile && <div className="w-1/6"></div>}
        <div className={isMobile ? `w-11/12` : 'w-2/3'}>
          <Intro isMobile={isMobile} />
        </div>
        {!isMobile && <div className="w-1/6"></div>}
      </div>
      <div
        className={`${
          isMobile ? 'p-5' : 'p-12'
        } bg-lowerBgColor text-gray-600 `}
      >
        <About isMobile={isMobile} />
        <Works isMobile={isMobile} />
        <Technologies isMobile={isMobile} />
        <WhatCanIDo />
      </div>
        <Footer isMobile={isMobile}></Footer>
    </div>
  );
}

export default Home;
