import react from 'react';
import '../css/login.css';
import logo from '../assets/login.jpg'

export function Login() {
    return<div className="login">
        <form id="login-box" action="">
        <div id="col1"><img id="wallp" src={ logo } width="100%" height=""></img></div>
        <div id="col2">
        <h1>Contactos</h1>
        <input type="email" id="emailtxt" name="email" placeholder="Email" />
        <input type="password" id="passtxt"name="password" placeholder="Password"/>
        <input type="submit" id="btns" name="submit" value="Ingresar" ></input>
        </div>
        </form>
        
    </div>;
}