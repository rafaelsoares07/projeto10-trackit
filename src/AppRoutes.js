import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"

import TelaLogin from "./componentes/TelaLogin/TelaLogin"
import TelaCadastro from "./componentes/TelaCadastro/TelaCadastro"
import TelaHabitos from "./componentes/Habitos/TelaHabitos"
import TelaHistorico from "./componentes/TelaHistorico/TelaHistorico"
import TelaHoje from "./componentes/TelaHoje/TelaHoje"

export default function AppRoutes(){

    const [token , setToken] = React.useState("")
    const [image, setImage] = React.useState("")

    return(    
        <BrowserRouter>    
            <Routes>

                <Route path="/" element={<TelaLogin setToken={setToken} token={token} setImage={setImage} image={image} />}  />

                <Route path="/cadastro" element={<TelaCadastro/>}  />

                <Route path="/habitos" element={<TelaHabitos token={token} image={image}/> } />

                <Route path="/historico" element={<TelaHistorico image={image}/>} />

                <Route path="/hoje" element={<TelaHoje token={token} image={image}/>} />

            </Routes>
        </BrowserRouter>
       
        
        
    )
}