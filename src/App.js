import Background from './components/background';
import Homepage from './components/homepage';
import Contact from './components/contact';
import About from './components/about';
import Portfolio from './components/portfolio';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Background />
      <Homepage />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
