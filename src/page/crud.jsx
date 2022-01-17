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
    return <div className="crud">
        <nav id="navbar">
            <ul>
                <li><h2>Contactos</h2></li>
                <li><input type="search" id="bsq" placeholder="Buscar" /><input type="button" value="Buscar" /></li>
                <li onClick ={ Toggle }><input type="button" id="switch" ></input> <div id="circle" ></div></li>
            </ul>
        </nav><br /><br /><br /><br />
        <div id="table">
        <table> 
        <thead>
              <tr>
                <th>Nombres</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {contacto.map((c) => {
                return (
                  <tr>
                    <td>
                      {c.Nombre_Contacto}
                    </td>
                    <td>
                      {c.Email_Contacto}
                    </td>
                    <td>
                      {c.Celular_Contacto}
                    </td>
                    <td>
                      <input type="button" id="btnedit" value="Editar" onClick={ PopUpe } />
                      <input type="button" value="Borrar" onClick={()=> DeleteContactos(c.idContacto, (response)=> {console.log(response)})} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
  
        </table>
        </div>
       <br />
    <div class="agregar">
        <input onClick={ PopUp } type="button" id="btnAg" value="+"></input>
        <div class="modal-container" id="modal-container">
          <div class="modal">
          <form id="formag" action="">
        <h1>Nuevo Contacto</h1>
        <input type="text" id="usernametxta" name="usernamea" placeholder="Usuario" />
        <input type="email" id="emailtxta"name="emaila" placeholder="Email"/>
        <input type="number" id="numbertxta"name="passworda" placeholder="Numero"/>
        <input type="submit" id="btnsa" name="submit" value="Enviar" ></input> <br />
        <input type="button" id="closebtn" value="X" />
        </form>
          </div>
        </div>
    </div>
    <div class="editar"><div class="modal-containere" id="modal-containere">
          <div class="modale">
          <form id="forme" action="">
        <h1>Actualización Contacto</h1>
        <input type="text" id="usernametxte" name="usernamee" placeholder="Usuario" />
        <input type="email" id="emailtxte"name="emaile" placeholder="Email"/>
        <input type="number" id="numbertxte"name="passworde" placeholder="Numero"/>
        <input type="submit" id="btnse" name="submite" value="Enviar" ></input> <br />
        <input type="button" id="closebtne" value="X" />
        </form>
          </div>
          </div>
          </div>
    </div>
}
}