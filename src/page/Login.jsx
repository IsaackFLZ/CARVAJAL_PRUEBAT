import react, { useState} from "react";
import '../css/login.css';
import { IniciarS } from '../utils/index.js';
import logo from '../assets/login.jpg'

export function Login() {
    const data = (e) => {
        e.preventDefault();
        let email = document.getElementById('emailtxt').value
        let password = document.getElementById('passtxt').value
        IniciarS({
            email: email,
            password: password
        },(response) => {
            if(!response.data.error){

                alert("Login Exitoso")
                    localStorage.setItem('Token', response.data.success)
                    window.location.href="./Contactos"
            }else{
                alert(response.data.error)
            }
           
            
        });
    }
    return<div className="login">
        <form id="login-box" action="" onSubmit={data} >
        <div id="col1"><img id="wallp" src={ logo } width="100%" height=""></img></div>
        <div id="col2">
        <h1>Contactos</h1>
        <input type="email" id="emailtxt" name="email" placeholder="Email" />
        <input type="password" id="passtxt"name="password" placeholder="Password"/>
        <input type="submit" id="btns" name="submit" value="Ingresar" ></input> <br />
        <a href="/Registro" >¿Aun no tienes Cuenta? Registrate</a>
        </div>
        </form>
        
    </div>;
}