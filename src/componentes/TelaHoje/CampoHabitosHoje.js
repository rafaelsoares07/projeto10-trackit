import React from "react";
import styled from "styled-components"
import axios from "axios";
import img from "../../imagens/check1.png"



export default function CampoDeHabitosHoje({setFeitos,feitos,text,sequenciaAtual, recorde,id, token,clicado}){


    const [seq, setSeq] = React.useState(sequenciaAtual)
    const [rec, setRec] = React.useState(recorde)

    const[checkItem, setCheckItem] = React.useState(clicado)

    const URL_DESMARCAR_ITEM = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
    const URL_MARCAR_ITEM = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`

    
    function marcarItem(){

        const promisse = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
            null,
            {headers:{Authorization:`Bearer ${token}`}}
        )

        promisse.then((response)=>{
            console.log(response)
            setCheckItem(!checkItem)
            setFeitos(feitos+1)
            setSeq(seq+1)
            setRec(rec+1)

        })
        
    }

    function desmarcarItem(){
        const promisse = axios.post(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
            null,
            {headers:{Authorization:`Bearer ${token}`}}
        )

        promisse.then((response)=>{
            console.log(response)
            setCheckItem(!checkItem)
            setFeitos(feitos-1)
            setSeq(seq-1)
            setRec(rec-1)
        })
    }




    return(
        <Container>
            
            <div>
                <h3>{text}</h3>
               
               
                {seq<1? <p>Sequencia Atual: 0</p>: seq===rec?<Esp>{`Sequencia Atual: ${seq}`}</Esp>:<p>{`Sequencia Atual: ${seq}`}</p>}

                {rec<1? <p>Recorde: 0</p>: seq===rec?<Esp>{`Recorde: ${rec}`}</Esp>:<p>{`Recorde: ${rec}`}</p>}
            </div>

            {checkItem === true? 
            <ButtonClicado onClick={desmarcarItem}><img src={img}/></ButtonClicado>:
            <ButtonNaoClicado onClick={marcarItem}><img src={img}/></ButtonNaoClicado>
            }
            
           
             
        
        </Container>
       
    )
}




const Container = styled.div`
    margin: 5px auto;
    width: 340px;
    min-height: 95px;
    border-radius: 5px;
    background-color: #FFF;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
       
        padding: 10px;
    }
    h3{
       
        font-size: 20px;
        color: #666666;
        font-weight: 400;
        
    }
   
    &:last-child{
        margin-bottom: 95px;
    }
 
`;

const ButtonClicado = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 5px;
        width: 70px;
        height: 70px;
        background-color:#8FC549;
        border: none;
        margin-right: 10px;
    
    img:hover{
        transform:scale(1.3)        
    }
`;

const ButtonNaoClicado = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    width: 70px;
    height: 70px;
    background-color:#E7E7E7;
    border: none;
    margin-right: 10px;

    img:hover{
    transform:scale(1.3)        
    }
`;

const Esp = styled.p`
color: green;
`