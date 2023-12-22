import logo from './logo.svg';
import './App.css';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import UploadImage from './UploadImage';
import Homepage from './Homepage';

function App() {
  return (
    <>
    <Routes>
      <Route path='login' element={<Login></Login>} ></Route>
      <Route path='Register' element={<Register></Register>} ></Route>
      <Route path='upload' element={<UploadImage></UploadImage>}></Route>
      <Route path='/' element={<Homepage></Homepage>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
