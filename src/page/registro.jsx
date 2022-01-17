import React, { useState} from "react";
import '../css/registro.css';
import { RegistrarU } from "../utils/index.js";
import logo from '../assets/login.jpg'

export function Registro() {
    const datar = (e) => {
        e.preventDefault();
        let username = document.getElementById('usertxt').value
        let email = document.getElementById('mailtxt').value
        let password = document.getElementById('passwordtxt').value
        RegistrarU({
            username: username, 
            email: email,
            password: password
        },(response) => {
            if(!response.data.error){

                alert("Registro Exitoso")
                    window.location.href="/"
            }else{
                alert(response.data.error)
            }
           
            
        });
    }
    return (
        <div>
            <form className="form" id="registro-box" onSubmit={datar}>
                <div id="col1">
                <img src={ logo } alt="Logo-Box" id="wall" srcset="" height=""/>
                </div>
                <div id="col2">
                <h1>Registro</h1>
                <input type="text" name="user" id="usertxt" placeholder="Usuario" />
                <input type="email" name="email" id="mailtxt" placeholder="Email" />
                <input type="password" name="password" id="passwordtxt" placeholder="Contraseña" />
                <input type="submit" name="enviar" id="btne" value="Registrarse" />
                </div>
            </form>
        </div>
    );
}