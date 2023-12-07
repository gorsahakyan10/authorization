import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
   'EN':{
         translation:{
            'Registration': 'Registration',
            'Login': 'Login',
            'Name': 'Name',
            'Surname': 'Surname',
            'Username': 'Username',
            'Password': 'Password',
            'Register': 'Register'
         } 
   },
   'RU':{
         translation:{
            'Registration': 'Регистрация',
            'Login': 'Вход',
            'Name': 'Имя',
            'Surname': 'Фамилия',
            'Username': 'Пользовательское Имя',
            'Password': 'Пароль',
            'Register': 'Зарегистрироваться'
         }
   },
   'AM':{
         translation:{
            'Registration': 'Գրանցում',
            'Login': 'Մուտք',
            'Name': 'Անուն',
            'Surname': 'Ազգանուն',
            'Username': 'Օգտատիրոջ Անուն',
            'Password': 'Գաղտնաբառ',
            'Register': 'Գրանցվել',
    }
},
   
}

i18n
    .use( initReactI18next )
    .init(
       {
         resources,
         lng: 'EN',
         interpolation: {
            escapeValue: false
         }
       }    
    )
 
export default i18n;  