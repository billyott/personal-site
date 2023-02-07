import Background from './components/background';
import UnderConstruction from './components/under-construction';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <Homepage />
      <Portfolio />
      <Contact />
      {/* <UnderConstruction /> */}
    </div>
  );
}

export default App;
