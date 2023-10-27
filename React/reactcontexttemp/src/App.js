import logo from './logo.svg';
import './App.css';
import Componentsdata from './Components/Componentsdata';
import Contextshare from './Components/Contextshare';


function App() {
  return (
    <div className="App">
  <Contextshare> 
      <Componentsdata></Componentsdata>
  </Contextshare>
    </div>
  );
}

export default App;
