import React from "react";
import axios from "axios";
import styled from "styled-components"

export default function CampoParaAdicionarHabito({token,setArrayHabitos,arrayHabitos,btnAddHabito,setBtnAddHabito}){


    const [textoDoHabito, setTextoDoHabito] = React.useState('')
    const [arrayDeDias, setArrayDeDias] = React.useState([4])

    console.log(textoDoHabito)

    const URL_CRIAR_HABITO = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"


    function cadastrarHabito(event){
        event.preventDefault();

        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const objeto = {
            name: textoDoHabito,
            days:arrayDeDias
        }

        const promisse = axios.post(URL_CRIAR_HABITO, objeto, config)

        promisse.then(cadastrarHabitoSucess)

    }

    function cadastrarHabitoSucess(response){
        console.log(response.data)
        setTextoDoHabito('')
        setBtnAddHabito(!btnAddHabito)
 
        const newArray = [...arrayHabitos]
        newArray.push(response.data)

        setArrayHabitos(newArray)
       
    }


        return(
            <form onSubmit={cadastrarHabito}>
                <Container>
                    <input required type='text' value={textoDoHabito} onChange={(event)=>setTextoDoHabito(event.target.value)} />
                    <Dias>
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </Dias>

                    <Buttons>
                        <button cor={'blue'} onClick={()=> setBtnAddHabito(!btnAddHabito)}>Cancelar</button>
                        <button onClick={cadastrarHabito}>Salvar</button>
                    </Buttons>
                    
                </Container>
               
                
                
            </form>
        )
    }


const Container = styled.div`
    padding: 18px;
    margin: 0 auto;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color:#FFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input{
        
        width: 300px;
        height: 45px;
        border-radius: 5px;
        border-color: gray;
    }
`;

const Dias = styled.div`
    display: flex;
    
    div{
        margin: 10px 1.5px;
        width:25px;
        height: 25px;
        background-color: #fff;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
   

    button{
        border: none;
        width: 85px;
        height: 35px;
        margin: 2px;
        border-radius: 5px;
       
    }
`;