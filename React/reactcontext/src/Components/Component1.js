import React, { useContext } from 'react'
import { data1 } from '../Context/ContextShare'





function Component1() {
    const {temp1,setTemp1}=useContext(data1)
  return (
    <div>
      <h1>{temp1}</h1>
    </div>
  )
}

export default Component1
