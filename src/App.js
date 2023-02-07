import Background from './components/background';
// import Navbar from './components/navbar';
// import Homepage from './components/homepage';
// import Portfolio from './components/portfolio';
// import Contact from './components/contact';
import NavbarJP from './components-jp/navbar-jp';
import HomepageJP from './components-jp/homepage-jp';
import PortfolioJP from './components-jp/portfolio-jp';
import ContactJP from './components-jp/contact-jp';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Background />
      {/* <Navbar />
      <Homepage />
      <Portfolio />
      <Contact /> */}
      <NavbarJP />
      <HomepageJP />
      <PortfolioJP />
      <ContactJP />
    </div>
  );
}

export default App;
