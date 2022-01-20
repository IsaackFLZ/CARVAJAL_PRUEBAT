import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/popupe.css';
import { useParams } from 'react-router-dom';
import {editarContacto, obtenerEContactos} from '../utils/index.js'
export default function Popupe() {
    const {id} = useParams();
    const [contacto, setContactos] = useState([]);  
    useEffect(()=> {
        obtenerEContactos(id, (response)=>{
        setContactos(response.data)
            });
    });

    const Editar = async (e) => {
        e.preventDefault();
        let nombre = document.getElementById('txtNombre').value;
        let email = document.getElementById('txtEmail').value;
        let celular = document.getElementById('txtCelular').value;
        const data = {
            Nombre_Contacto: nombre,
            Email_Contacto: email,
            Celular_Contacto: celular
        }
        await editarContacto(id, data, (response)=>{
            alert("Se han actualizado los datos del contacto")
        });
    }
    return (
        <div class="m-container" id="m-container">
            <form id="aggform"onSubmit={Editar}>
                <h1>Editar Contactos</h1>
                <input type="text" id="txtNombre" defaultValue={contacto.Nombre_Contacto}/> 
                <input type="text"  id="txtEmail" defaultValue={contacto.Email_Contacto}/>
                <input type="text"  id="txtCelular" defaultValue={contacto.Celular_Contacto}/>
                <input type="submit" id="btneagg"value="Enviar" /><br />
                <Link to="/Contactos">
                <button id="btncagg">X</button>
                </Link>
                
            </form>          
        </div>
    )
}
