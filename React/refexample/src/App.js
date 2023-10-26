import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { useEffect } from 'react';





function App() {
  const name=useRef()
  useEffect(()=>{
    if(name){
      name.current.focus()
    }
  },[name])
  
// const change=()=>{
//   name.current.focus()
//   console.log(name);
// }

  return (
    <div className="App">
      <input ref={name} type='text' placeholder='enter your name'></input>
    </div>
  );
}

export default App;
