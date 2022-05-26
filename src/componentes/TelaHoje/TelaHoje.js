import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import styled from "styled-components";
import dayjs from "dayjs";
import React from "react";
import axios from "axios";
import CampoDeHabitosHoje from "./CampoHabitosHoje";

//console.log(dayjs().set("day",dayjs().day()).set("month",dayjs().month()))
    //console.log(dayjs().day())
    //console.log(dayjs().month())
    //const dia= dayjs().day()
    //const mes = dayjs().month()


export default function TelaHoje({image, token}){
    
    const [arrayHabitosHoje, setArrayHabitosHoje]= React.useState(null);


    const URL_GET_HABITOS_DO_DIA = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

    React.useEffect(()=>{

        const config={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        
        const promisse = axios.get(URL_GET_HABITOS_DO_DIA,config)

        promisse.then(response=>{
            setArrayHabitosHoje(response.data)
        })

    },[])

    function exibirHabitosDoDia(response){
        if(arrayHabitosHoje!=null){
            return(
                <>
                    {arrayHabitosHoje.map((el,i)=> <CampoDeHabitosHoje key={i} id={el.id} text={el.name} sequenciaAtual={el.currentSequence} recorde={el.highestSequence} />)}
                </>
            )
        }
        else{
            return(
                <h1>sem habitos hoje</h1>
            )
        }

    }


    return(
       <>
              <Container>
                <Header image={image}/>
               

                <Cabecalho>
                    <div>
                        <h1>dia do mes aqui</h1>
                        <p>Mensagem de quantos habitos concluidos aaqui</p>
                    </div>
                </Cabecalho>

                <SuasTarefas>
                    {exibirHabitosDoDia()}

                </SuasTarefas>
                
               <Footer/>
        
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