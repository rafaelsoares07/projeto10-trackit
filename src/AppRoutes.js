import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"

import TelaLogin from "./componentes/TelaLogin/TelaLogin"
import TelaCadastro from "./componentes/TelaCadastro/TelaCadastro"
import TelaHabitos from "./componentes/Habitos/TelaHabitos"

export default function AppRoutes(){

    const [token , setToken] = React.useState("")

    return(    
        <BrowserRouter>    
            <Routes>

                <Route path="/" element={<TelaLogin setToken={setToken} token={token} />}  />

                <Route path="/cadastro" element={<TelaCadastro/>}  />

                <Route path="/habitos" element={<TelaHabitos token={token}/> } />

            </Routes>
        </BrowserRouter>
       
        
        
    )
}