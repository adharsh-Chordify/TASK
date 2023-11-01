// Componentsdata.js
import React, { useContext, useState } from 'react';
import { dataContext } from './Contextshare';

function Componentsdata() {
  const { nameData, setNameData } = useContext(dataContext);
  const [name,setName]=useState('Adharsh')

  function addto(e){
    e.preventDefault()
 
    console.log(e.target.value);
  }

  return (
    <div>
      <h2>Hello {nameData}</h2>
      <button value={name} onClick={addto}>{name}</button>
      {/* You can use nameData here */}
    </div>
  );
}

export default Componentsdata;
