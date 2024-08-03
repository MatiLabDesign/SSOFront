import React from 'react'
import './LoginForm.css'
import Label from './../../01uikit/label/Label';
import Input from './../../01uikit/Input/Input';
import Button from './../../01uikit/Button/Button';

const LoginForm = () => {
  return (
    <div className="form-container">
        <form className="form-login" action="/principal">
          <div className="uno">
            <Label id="label" label="Usuario"/>
            <Input type="text" id="input" placeholder="Coloca tu usuario"/>
            
          </div>
          <div className="uno">
            <Label id="label" label="Contraseña"/>
            <Input type="password" id="input" placeholder="Coloca tu contraseña"/>
            
          </div>
            <Button id="btn"text="Ingresar"/>
        </form>
      
    </div>
  )
}

export default LoginForm
