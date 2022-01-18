import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import  { Login } from "./page/Login";
import  { Crud }  from "./page/crud";
import { Registro } from "./page/registro"
import  Popupe  from "./page/popupe"

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Contactos" element={<Crud/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/Editar/:id" element={<Popupe/>}/>
        </Routes>
        </BrowserRouter>
    );
}