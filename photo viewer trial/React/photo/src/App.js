import logo from './logo.svg';
import './App.css';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login></Login>} ></Route>
      <Route path='Register' element={<Register></Register>} ></Route>
    </Routes>
    
    </>
  );
}

export default App;
