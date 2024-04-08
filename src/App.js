import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MintNFT from './pages/MintNFT';
import Minted from './pages/Minted';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/mint' Component={MintNFT}></Route>
          <Route path='/minted' Component={Minted}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
