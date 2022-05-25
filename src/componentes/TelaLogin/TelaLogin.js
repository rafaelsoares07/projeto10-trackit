import { Link , useNavigate } from "react-router-dom"
import axios from "axios";
import React from "react";
import logo from "../../imagens/logo.svg"
import styled from "styled-components";


export default function TelaLogin({setToken, token}){

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    const navigate = useNavigate();

    const user = {
        email:email,
        password:password
    }

    
    


    function LoginUserSucess(response){
        
        setToken(response.data.token)
        navigate("/habitos")
    }

    function LoginUserFail(response){
        console.log(response.data)
    }



    function LoginUser(event){
        event.preventDefault();
        //console.log(user)
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promisse = axios.post(URL, user)

        promisse.then(LoginUserSucess)

        promisse.catch(LoginUserFail)

    }
    

    return(
        <>
        
        <Container>
            <img src={logo}/>

            <form onSubmit={LoginUser}>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}   />
                <input type="password" placeholder="Senha" valeu={password}  onChange={(e)=>setPassword(e.target.value)}   />
                <button onClick={LoginUser}>Entrar</button>
                <Link to ="/cadastro"><p>Não tem uma conta? Cadastre-se </p></Link>
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