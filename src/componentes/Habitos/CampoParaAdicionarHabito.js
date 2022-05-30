import React from "react";
import axios from "axios";
import styled from "styled-components"

export default function CampoParaAdicionarHabito({token,setArrayHabitos,arrayHabitos,btnAddHabito,setBtnAddHabito}){


    const [textoDoHabito, setTextoDoHabito] = React.useState('')
    const [arrayDeDias, setArrayDeDias] = React.useState([])
    //console.log(arrayDeDias)

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

    function adicionarDia(dia){
        if(arrayDeDias.find(el=> el===dia)){
            const newArray = arrayDeDias.filter(el=> el!=dia)

            return setArrayDeDias(newArray)
        }
        setArrayDeDias([...arrayDeDias,dia])
       
    }

    function Dia({id,name}){
        
       
        function render(){
            if(arrayDeDias.find(el=> el===id)){
                return (
                    <C_DIA onClick={()=>adicionarDia(id)} cor={'#CFCFCF'} colorText={"#FFF"}>{name}</C_DIA>
                )
            }
            else{
                return(
                    <C_DIA onClick={()=>adicionarDia(id)} cor={'#FFFFFF'} colorText={"#DBDBDB"}>{name}</C_DIA>
                )
            }
        }
        

        return(
            <>
                {render()}
            </>
            
        )
    }
   

        return(
            <form onSubmit={cadastrarHabito}>
                <Container>
                    <input required type='text' value={textoDoHabito} onChange={(event)=>setTextoDoHabito(event.target.value)} />
                    <Dias>
                        <Dia  id={7}  name={'D'}>D</Dia>
                        <Dia  id={1}  name={'S'}>S</Dia>
                        <Dia  id={2}  name={'T'}>T</Dia>
                        <Dia  id={3}  name={'Q'}>Q</Dia>
                        <Dia  id={4}  name={'Q'}>Q</Dia>
                        <Dia  id={5} name={'S'}>S</Dia>
                        <Dia  id={6}  name={'S'}>S</Dia>
                    </Dias>

                    <Buttons>
                        <button cor={"#666"} onClick={()=> setBtnAddHabito(!btnAddHabito)}>Cancelar</button>
                        <Btn onClick={cadastrarHabito}>Salvar</Btn>
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
    
   

`

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
   
    button{
        cursor: pointer;
        border: none;
        width: 85px;
        height: 35px;
        margin: 2px;
        border-radius: 5px;
        background-color:${props => props.cor}
       
    }
`;


const C_DIA =styled.div`
        color: ${props=> props.colorText};
        background-color: ${props => props.cor};
        margin: 10px 1.5px;
        width:25px;
        height: 25px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
`

const Btn = styled.button`

background-color:#52B6FF ;
color: #FFFFFF;


`