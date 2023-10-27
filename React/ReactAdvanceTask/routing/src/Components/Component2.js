import React from 'react'
import { Link } from 'react-router-dom'

function Component2() {
  return (
    <div>
        <h2>This is For the Component 2</h2>
        <Link to={"/"}><button>Navigate to component 1 </button></Link>
    </div>
  )
}

export default Component2
