// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Background from './components/background';
import Homepage from './components/homepage';
import Contact from './components/contact';
// import MainMenu from './components/main-menu';
// import Portfolio from './components/portfolio';
// import About from './components/about';
// import Blog from './components/blog';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Background />
      <Homepage />
      <Contact />

      {/* <BrowserRouter basename="/">
        <Switch>
          <Route path="/main-menu">
            <MainMenu />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
