import { Link, useNavigate } from "react-router-dom"
import React from "react";
import logo from "../../imagens/logo.svg"
import styled from "styled-components";
import axios from "axios";
import Header from "../../layouts/Header";


export default function TelaCadastro(){
    const [name,setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [image, setImage] = React.useState('')
    const navigate = useNavigate()

    const body = {
        email:email,
        name:name,
        image:image,
        password:password
    }


    function cadastrarSucess(response){
        //console.log(response.data)
        navigate("/")
    }

    function cadastrar(event){
    event.preventDefault();

       if(name.length>0){
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
            const promisse = axios.post(URL, body )
            promisse.then(cadastrarSucess)
            
       }
       else{
           alert('Preencha todos os campos corretamente!')
       }
    }
   
    return(
        <>
        <Container>
            
            <img src={logo}/>
            <form onSubmit={cadastrar}>
                <input required type="email" placeholder="Email" value={email} onChange={(event)=> setEmail(event.target.value) } />
                <input required type="password" placeholder="Senha" value={password} onChange={(event)=> setPassword(event.target.value)} />
                <input required type="text" placeholder="Nome"  value={name} onChange={(event)=> setName(event.target.value)}/>
                <input required type="text" placeholder="Foto" value={image} onChange={(event)=> setImage(event.target.value)}/>
                <button onClick={cadastrar}>Cadastrar</button>
                <Link to ="/"><p>Já tem uma conta? Faça login! </p></Link>
            </form>
            
        </Container>
        </>
    )
}








const Container = styled.div`
    margin: 0 auto;
    max-width: 375px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;

    img{
        margin-top: 80px;
    }

    form{
       
        display: flex;
        flex-direction: column;
        align-items: center;
    
        input{
            margin: 10px;
            width: 300px;
            height: 45px;
            border-radius: 5px;
            border: none;
        }

        button{
            cursor: pointer;
            width: 300px;
            height: 45px;
            background-color:#52B6FF;
            color:#FFFFFF;
            border-radius: 5px;
            border: none;
            font-size:20px;
            margin-bottom: 10px;
        }

        button:hover{
            background-color: #40E0D0;
        }

        p{
            color: #52B6FF;
            
        }

        
    }
`;

