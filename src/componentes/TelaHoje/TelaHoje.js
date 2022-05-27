import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import styled from "styled-components";
import dayjs from "dayjs";
import React from "react";
import axios from "axios";
import CampoDeHabitosHoje from "./CampoHabitosHoje";



export default function TelaHoje({image, token}){

   

    const [arrayHabitosHoje, setArrayHabitosHoje]= React.useState(null);
    const feitos = arrayHabitosHoje!=null? arrayHabitosHoje.filter(el=> el.done===true).length:0
    const [checkFeitos, setCheckFeitos] = React.useState(feitos)

    const total = arrayHabitosHoje!=null? arrayHabitosHoje.length:0
    

    const URL_GET_HABITOS_DO_DIA = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

    React.useEffect(()=>{

        const config={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        
        const promisse = axios.get(URL_GET_HABITOS_DO_DIA,config)

        promisse.then(response=>{
            //console.log(response.data)
            setArrayHabitosHoje(response.data)
            
        })

    },[])

    function exibirHabitosDoDia(response){
        if(arrayHabitosHoje!=null){
            return(
                <>
                    {arrayHabitosHoje.map((el,i)=> <CampoDeHabitosHoje checkFeitos={checkFeitos} setCheckFeitos={setCheckFeitos} clicado={el.done} key={i} id={el.id} text={el.name} sequenciaAtual={el.currentSequence} recorde={el.highestSequence} token={token} />)}
                </>
            )
        }
        else{
            return(
                <h1>sem habitos hoje</h1>
            )
        }

    }

   

    console.log(total)
    console.log(checkFeitos)

    return(
       <>
              <Container>
                <Header image={image}/>
               

                <Cabecalho>
                    <div>
                        <h1>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h1>
                        <p>{arrayHabitosHoje!=null? `Você fez ${Math.round((feitos/total)*100,2)}% dos seus hábitos`:"Você não tem hábito para hoje!" }</p>
                    </div>
                </Cabecalho>

                <SuasTarefas>
                    {exibirHabitosDoDia()}

                </SuasTarefas>
                
               <Footer tam={arrayHabitosHoje}/>
        
            </Container>
       </>
    )
}


const Container = styled.div`
    background-color: #E5E5E5;
    margin: 0 auto;
    max-width: 375px;
    height: 100vh;
    overflow-y: scroll;

`;

const Cabecalho = styled.div`

    div{
        padding: 10px;
    }
    h1{ 
       
        font-size:22px;
        color:#126BA5;
        font-weight: 100;
    }

    p{  
        
        font-size: 18px;
        color:#BABABA;
    }
`;


const SuasTarefas = styled.div`
`;