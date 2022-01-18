import axios from 'axios';

export const IniciarS =  async (req, res) =>{
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/api/users/login',
        data: {
            email: req.email,
            password: req.password
        }
    } 
    await axios.request(options).then(res)
};
export const RegistrarU =  async (req, res) =>{
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/api/users/register',
        data: {
            username: req.email,
            email: req.email,
            password: req.password
        }
    }
    await axios.request(options).then(res)
};

export const GetContactos = async(successCallback) => {
    const token = localStorage.getItem('Token');
    const options = {
        method: 'GET',
        url: "http://localhost:4000/api/contactos",
        headers: {'user-token': token}
    };
    await axios.request(options).then(successCallback);
};
export const PostContactos = async(req, successCallback) => {
    const userId = localStorage.getItem('userid');
    const token = localStorage.getItem('Token');
    const options = {
        method: 'POST',
        url: "http://localhost:4000/api/contactos",
        headers: {'user-token': token},
        data: {
            idUsuario: userId,
            Nombre_Contacto: req.Nombre_Contacto,
            Email_Contacto: req.Email_Contacto,
            Celular_Contacto: req.Celular_Contacto,
        } 
    };
    await axios.request(options).then(successCallback);
};
export const BusquedaContactos = async(number, successCallback) => {
    const token = localStorage.getItem('Token');
    const options = {
        method: 'GET',
        url: `http://localhost:4000/api/contactos/${number}`,
        headers: {'user-token': token}
    };
    await axios.request(options).then(successCallback);
};
export const obtenerEContactos = async(id, successCallback) => {
    const token = localStorage.getItem('Token');
    const options = {
        method: 'GET',
        url: `http://localhost:4000/api/contactos/editar/${id}`,
        headers: {'user-token': token}
    };
    await axios.request(options).then(successCallback);
};
export const editarContacto = async(id, req, successCallback) => {
    const userId = localStorage.getItem('userid');
    const token = localStorage.getItem('Token');
    console.log(id, req)
    const options = {
        method: 'PUT',
        url: `http://localhost:4000/api/contactos/${id}`,
        headers: {'user-token': token},
        data: {
            idUsuario: userId,
            Nombre_Contacto: req.Nombre_Contacto,
            Email_Contacto: req.Email_Contacto,
            Celular_Contacto: req.Celular_Contacto,
        } 
    };
    await axios.request(options).then(successCallback);
};
export const DeleteContactos = async(id, successCallback) => {
    const token = localStorage.getItem('Token');
    const options = {
        method: 'DELETE',
        url: `http://localhost:4000/api/contactos/${id}`,
        headers: {'user-token': token}
    };
    await axios.request(options).then(successCallback);
};
