import react, {useState, useEffect} from 'react';
import '../css/crud.css';
import { GetContactos, DeleteContactos, PostContactos, editarContacto, BusquedaContactos, obtenerEContactos } from '../utils/index.js'
import { Link } from 'react-router-dom'
import { Login } from './Login';


export function Crud() {
  const [contacto, setContactos] = useState([]);
  const [filtroc, setFiltro] = useState("");
  
  useEffect(() => {
      
      GetContactos(
        (response) => {
          if(response.data.error){
            alert(response.data.error);
          }else{
            setContactos(response.data.filter((contacto)=>{ 
              if(filtroc === contacto.Celular_Contacto){
                //console.log(contacto)
                return(
                  contacto
                )
              }else if(filtroc === ""){
                return(
                  contacto
                )
              }
             }))
          }
        }
      );
  
    });
      const dataA = (e) => {
        e.preventDefault();
        let usuarioId = localStorage.getItem('userid');
        let Nombre_Contacto = document.getElementById('usernametxta').value
        let Email_Contacto = document.getElementById('emailtxta').value
        let Celular_Contacto = document.getElementById('numbertxta').value
        PostContactos({
          idUsuario: usuarioId,
          Nombre_Contacto: Nombre_Contacto,
          Email_Contacto: Email_Contacto,
          Celular_Contacto: Celular_Contacto
        },(response) => {
            if(!response.data.error){

                alert("Registro Exitoso")
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
      //editar(id) 
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
    function editar(id){
      obtenerEContactos(id, (response)=>{
        console.log(response.data);
      });
    };
    return (<div className="crud">
        <nav id="navbar">
            <ul>
                <li><h2>Contactos</h2></li>
                <li><input type="search" id="bsq" placeholder="Buscar" onChange={(e)=> {
                  console.log(e.target.value);
                  BusquedaContactos( e.target.value,
                    (response) => {
                      if(response.data.error){
                        alert(response.data.error);
                      }else{
                        if(e.target.value.length === 10){
                          setFiltro(e.target.value)
                        console.log(filtroc)
                        }else{
                          setFiltro("");
                        }
                        
                      }
                    }
                  )
                }} /></li>
                <li onClick ={ Toggle }><input type="button" id="switch" ></input> <div id="circle" ></div></li>
                <li><Link to="/"><button id="exit">Cerrar Sesi??n</button></Link></li>
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
                      <Link to = {`/Editar/${c.idContacto}`}>
                      <input type="button" value="Editar"/>                      
                      </Link>
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
          <form id="formag" action="" onSubmit={ dataA }>
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
          <form id="forme" action="" >
        <h1>Actualizaci??n Contacto</h1>
        <input type="text" id="usernametxte" name="usernamee" placeholder="Usuario" />
        <input type="email" id="emailtxte"name="emaile" placeholder="Email"/>
        <input type="number" id="numbertxte"name="passworde" placeholder="Numero"/>
        <input type="submit" id="btnse" name="submite" value="Enviar" ></input> <br />
        <input type="button" id="closebtne" value="X" />
        </form>
          </div>
          </div>
         </div>
    </div>);
 }

