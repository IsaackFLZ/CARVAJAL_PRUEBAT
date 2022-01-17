import react, {useState, useEffect} from 'react';
import '../css/crud.css';
import { GetContactos, DeleteContactos, PostContactos } from '../utils/index.js'
import { Login } from './Login';


export function Crud() {
  const [contacto, setContactos] = useState([]);

  useEffect(() => {
  
      GetContactos(
        (response) => {
          if(response.data.error){
            alert(response.data.error);
          }else{
            setContactos(response.data)
          }
        }
      );
  
    });
    function CreateC() {
      const datar = (e) => {
        e.preventDefault();
        let usuarioId = document.getElementById('usertxt').value
        let Nombre_Contacto = document.getElementById('usertxt').value
        let Email_Contacto = document.getElementById('mailtxt').value
        let Celular_Contacto = document.getElementById('passwordtxt').value
        PostContactos({
          idUsuario: usuarioId,
          Nombre_Contacto: Nombre_Contacto,
          Email_Contacto: Email_Contacto,
          Celular_Contacto: Celular_Contacto
        },(response) => {
            if(!response.data.error){

                alert("Registro Exitoso")
                    window.location.href="/"
            }else{
                alert(response.data.error)
            }
           
            
        });
        
    }
    function Toggle() {
      const table = document.getElementById('table');
      const Switch = document.getElementById('switch');
      const Circle = document.getElementById('circle');
      
      table.classList.toggle('active');
      Switch.classList.toggle('active');
      Circle.classList.toggle('active');
    };

    function PopUp() {
      const open = document.getElementById('btnAg');
      const modal_container = document.getElementById('modal-container');
      const close = document.getElementById('closebtn');

      open.addEventListener('click', () =>{
        modal_container.classList.add('show');
      });

      close.addEventListener('click', () =>{
        modal_container.classList.remove('show');
      });
    };
    function PopUpe() {
      const open = document.getElementById('btnedit');
      const modal_container = document.getElementById('modal-containere');
      const close = document.getElementById('closebtne');

      open.addEventListener('click', () =>{
        modal_container.classList.add('show');
      });

      close.addEventListener('click', () =>{
        modal_container.classList.remove('show');
      });
    };
    return (<div className="crud">
        
    </div>);
}
}