import React, { useEffect, useState } from 'react'
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
            console.log(response)
        });
    }
    return (
        <div>
            <form onSubmit={Editar}>
                <input type="text" id="txtNombre" defaultValue={contacto.Nombre_Contacto}/> 
                <input type="text"  id="txtEmail" defaultValue={contacto.Email_Contacto}/>
                <input type="text"  id="txtCelular" defaultValue={contacto.Celular_Contacto}/>
                <input type="submit" value="Enviar" />
            </form>          
        </div>
    )
}
