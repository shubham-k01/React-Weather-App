import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchState from './contexts/Search/SearchState';
import Weather from './components/Weather';

function App() {

  return (
    <SearchState>
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/weather' element={<Weather/>}/>
        </Routes>
      </Router>
      
    </div>
    </SearchState>
  );
}

export default App;
