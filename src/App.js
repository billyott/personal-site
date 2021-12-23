import Background from './components/background';
import Navbar from './components/navbar';
import Main from './components/main';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
