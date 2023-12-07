import React, { useContext } from 'react'
import i18n from '../i18n';

import { LanguageContext } from '../App'

function Header() {
    function changeLanguage(language){
       i18n.changeLanguage(language, (err) => {
          if(err) throw err;
       })
    }
  return (
    <header>
        <button onClick={() => changeLanguage('EN')}>EN</button>
        <button onClick={() => changeLanguage('AM')}>AM</button>
        <button onClick={() => changeLanguage('RU')}>RU</button>
    </header>
  )
}

export default Header