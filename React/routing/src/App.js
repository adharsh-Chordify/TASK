import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Component1></Component1>}></Route>
        <Route path='component2' element={<Component2></Component2>}></Route>
       </Routes>
    </div>
  );
}

export default App;
