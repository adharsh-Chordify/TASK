import React, { createContext, useState } from 'react'


export const data1=createContext()

function ContextShare({children}) {

    const [temp1,setTemp1]=useState('true')
  return (
    <div>
       <data1.Provider value={{temp1,setTemp1}}>
        {children}
       </data1.Provider>
    </div>
  )
}

export default ContextShare
