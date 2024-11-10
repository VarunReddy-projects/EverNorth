import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Benefits from './components/Benefits';
import Support from './components/Support';
import FAQ from './components/FAQ';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';


function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <Carousel />
      <Benefits />
      <Support />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} /> 
      <FAQ />
      <Footer/> 
    </div>
  );
}

export default App;