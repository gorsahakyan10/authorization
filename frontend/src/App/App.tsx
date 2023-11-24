import React from 'react';
import './App.css';
import ContainerForm from '../ContainerForm/ContainerForm';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
       <ContainerForm Form={ LoginForm }/>
       <ContainerForm Form={ RegistrationForm }/>
    </div>
  );
}

export default App;
