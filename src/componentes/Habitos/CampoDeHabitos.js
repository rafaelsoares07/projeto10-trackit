import React from "react";
import styled from "styled-components"
import axios from "axios";
import imgLixeira from "../../imagens/lixeira.png"


export default function CampoDeHabitos({texto,id,token, setArrayHabitos,elementoIndex, arrayHabitos, days}){

    function Dia({ide, name}){
        if(days.find(el=> el===ide)){
            return <Day backg={"#CFCFCF"} colorTexte={"#FFFFFF"} >{name}</Day>
        }
        else{
            return <Day backg={"#FFFFFF"} colorTexte={"#DBDBDB"} >{name}</Day>
        }
    }

    

    function deletarHabito(){
        const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

        const config ={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const promisse = axios.delete(URL_DELETE,config)

        promisse.then(response=> console.log(response.data))

        const newArray = [...arrayHabitos]
        newArray.splice(elementoIndex,1)
        setArrayHabitos(newArray)
        

    }

    return(
        <Container>
            
             <p>{texto}</p>

             <img onClick={deletarHabito} src={imgLixeira}/>
             <Dias>
                        <Dia  ide={7}  name={'D '}/>
                        <Dia  ide={1}  name={'S '}/>
                        <Dia  ide={2}  name={'T '}/>
                        <Dia  ide={3}  name={'Q '}/>
                        <Dia  ide={4}  name={'Q '}/>
                        <Dia  ide={5}  name={'S '}/>
                        <Dia  ide={6}  name={'S '}/>
            </Dias>
        
        </Container>
       
    )
}

const Container = styled.div`
    margin: 5px auto;
    width: 340px;
    min-height: 90px;
    border-radius: 5px;
    background-color: #FFF;
    position: relative;

    p{
        padding: 10px;
        
    }

    img{
        cursor: pointer;
        position: absolute;
        top: 15px;
        right: 10px;
    }

    img:hover{
        transform:scale(1.15)        
    }

    &:last-child{
        margin-bottom: 95px;
    }

`;


const Dias = styled.div`
    display: flex;
    margin-left: 5px;
    

`

const Day = styled.div`
        background-color: ${props=> props.backg};
        color: ${props=> props.colorTexte};
        margin: 10px 1.5px;
        width:25px;
        height: 25px;
        border:1px solid #D4D4D4 ;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
`