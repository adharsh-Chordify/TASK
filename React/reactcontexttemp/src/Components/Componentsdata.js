// Componentsdata.js
import React, { useContext } from 'react';
import { dataContext } from './Contextshare';

function Componentsdata() {
  const { nameData, setNameData } = useContext(dataContext);

  return (
    <div>
      <h2>Hello {nameData}</h2>
      {/* You can use nameData here */}
    </div>
  );
}

export default Componentsdata;
