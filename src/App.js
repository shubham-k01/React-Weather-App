import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useContext} from 'react';
import SearchState from './contexts/Search/SearchState';

function App() {
  return (
    <SearchState>
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
    </SearchState>
  );
}

export default App;
