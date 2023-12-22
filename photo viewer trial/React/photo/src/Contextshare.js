// ContextShare.js
import React, { createContext, useState } from 'react';

export const LoginDataContext = createContext();

function ContextShare({ children }) {
  const [loggedInData, setLoggedInData] = useState(''); // Make sure loggedInData is initialized correctly

  return (
    <LoginDataContext.Provider value={{ loggedInData, setLoggedInData }}>
      {children}
    </LoginDataContext.Provider>
  );
}

export default ContextShare;
