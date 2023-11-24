import React from 'react'
import './ErrMessage.css'

import errUI from '../App/js-object-data/errUI'


function ErrMessage({ err }) {
  return (
    <>
       { err &&
             <div className='ErrMessage'>
                <ul>
                   <li>
                      { errUI[ err.errName ] } 
                   </li>    
                </ul>  
             </div>
       }
    </>
  )
}

export default ErrMessage