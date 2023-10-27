import React from 'react'
import { Link } from 'react-router-dom'

function Component1() {
  return (
    <div>
      <h2>This is For the Component 1</h2>
      <Link  to={"component2"}><button >Navigate to component 2 </button></Link>
    </div>
  )
}

export default Component1
