import React from 'react'
import './ErrMessage.css'

import errUI from '../js-object-data/errUI'


function ErrMessage({ err }) {
  return (
    <>
       { err &&
             <div className='ErrMessage'>
                <ul>
                   {err.map((errName, i) => 
                    <li key={i}> { errUI[errName] } </li>)}   
                </ul>  
             </div>
       }
    </>
  )
}

export default ErrMessage