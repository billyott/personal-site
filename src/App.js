import Background from './components/background';
import UnderConstruction from './components/under-construction';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Background />
      {/* <Navbar /> */}
      {/* <Homepage /> */}
      <UnderConstruction />
      {/* <About />
      <Portfolio />
      <Contact /> */}
    </div>
  );
}

export default App;
