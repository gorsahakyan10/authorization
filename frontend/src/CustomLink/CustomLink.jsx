import React from 'react'
import { Link } from 'react-router-dom'

function CustomLink({ path, name, handler }) {

  return (
    <div className='CustomLink'>
       <Link to={path}>
          <button onClick={handler}>
             {name}
          </button> 
       </Link>
    </div>
  )
}

export default CustomLink