import React from "react";
import styled from "styled-components"
import axios from "axios";
import img from "../../imagens/check1.png"



export default function CampoDeHabitosHoje({text,currentSequence, highestSequence,id}){

    const[checkItem, setCheckItem] = React.useState(false)

    console.log(checkItem)



    return(
        <Container>
            
            <div>
                <h3>{text}</h3>
                <h4>{id}</h4>
                <p>Sequência atual: {currentSequence}</p>
                <p>Seu Recorde: {highestSequence}</p>
            </div>

            {checkItem === true? 
            <ButtonClicado onClick={()=>setCheckItem(!checkItem)}><img src={img}/></ButtonClicado>:
            <ButtonNaoClicado onClick={()=>setCheckItem(!checkItem)}><img src={img}/></ButtonNaoClicado>
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