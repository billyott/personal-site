import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './components/homepage';
import MainMenu from './components/main-menu';
import About from './components/about';
import Contact from './components/contact';
import './app.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/main-menu">
            <MainMenu />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
