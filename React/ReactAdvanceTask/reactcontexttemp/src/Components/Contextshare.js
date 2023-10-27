// Contextshare.js
import React, { createContext, useState } from 'react';

export const dataContext = createContext();

function Contextshare({ children }) {
  const [nameData, setNameData] = useState("Vignesh"); // Provide an initial value (null in this case)

  return (
    <div>
      <dataContext.Provider value={{ nameData, setNameData }}>
        {children}
      </dataContext.Provider>
    </div>
  );
}

export default Contextshare;
