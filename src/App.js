import React, { useState } from 'react';
import Background from './components/background';
import ToggleLanguage from './components/toggle-language';
import Homepage from './components/homepage';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import HomepageJP from './components-jp/homepage-jp';
import PortfolioJP from './components-jp/portfolio-jp';
import ContactJP from './components-jp/contact-jp';

import './app.scss';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('jp');
    } else {
      setLanguage('en');
    }
  };

  if (language === 'jp') {
    return (
      <div className="app">
      <Background />
      <ToggleLanguage
        onClick={toggleLanguage}
        language={language} />
      <HomepageJP />
      <PortfolioJP />
      <ContactJP />
    </div>
    );
  }

  return (
    <div className="app">
      <Background />
      <ToggleLanguage
        onClick={toggleLanguage}
        language={language} />
      <Homepage />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
