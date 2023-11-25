import React from 'react'

function Button({ name, handler }) {
  return (
    <div className='Button'>
        <button onClick={ handler }>{ name }</button>
    </div>
  )
}

export default Button