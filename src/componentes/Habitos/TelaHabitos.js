import Header from "../../layouts/Header"
import React from "react";
import axios from "axios";
import styled from "styled-components"

import CampoParaAdicionarHabito from "./CampoParaAdicionarHabito";
import CampoDeHabitos from "./CampoDeHabitos";
import Footer from "../../layouts/Footer";

export default function TelaHabitos({token, image}){   


    const [btnAddHabito, setBtnAddHabito] = React.useState(false)
    const [arrayHabitos, setArrayHabitos] = React.useState(null)
    const [novoHabitoAdicionado, setNovoHabitoAdicionado] = React.useState(false)

    console.log(novoHabitoAdicionado)


    console.log(arrayHabitos)
   // console.log(btnAddHabito)

    const ULR_GET_HABITOS = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

    React.useEffect(()=>{
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const promisse = axios.get(ULR_GET_HABITOS, config)

        promisse.then(response => {
            console.log(response.data)
            setArrayHabitos(response.data)
            
        });

        promisse.catch(err => console.log(err))

    },[])


    function exibirHabitosUser(){  
        if (arrayHabitos!= null){

            return (
                <>
                    {arrayHabitos.map((el,i)=> <CampoDeHabitos elementoIndex={i} key={i} setArrayHabitos={setArrayHabitos} arrayHabitos={arrayHabitos} token={token} id={el.id} texto={el.name}/>)}
                </>
            )
        }
        else{
            return( <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)
        }
    }

    function exibirCampoParaAddHabito(){
        if(btnAddHabito===true){
            return <CampoParaAdicionarHabito token={token} arrayHabitos={arrayHabitos} setArrayHabitos={setArrayHabitos} setBtnAddHabito={setBtnAddHabito} btnAddHabito={btnAddHabito}/>
        }
        return null
    }

    return(
        <>
            <Container>
                <Header image={image}/>
                <MenuAddHabitos>
                    <h1>Meus Hábitos</h1>
                    <div onClick={()=> setBtnAddHabito(!btnAddHabito)}>+</div>
                </MenuAddHabitos>

                {exibirCampoParaAddHabito()}
                

                <ListaDeHabitos>
                {exibirHabitosUser()} {/* se tiver ele exibe, se nao ele coloca mensagem que não tem*/}
                </ListaDeHabitos>
                
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

const MenuAddHabitos = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size:22px;
        color:#126BA5;
        font-weight: 100;
    }

    div{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width:40px ;
        height: 35px;
        background-color:#52B6FF;
        border-radius: 5px;
        color: #FFF;
        font-size: 32px;
    }


`;


const ListaDeHabitos = styled.div`
  
    width: 100%;
    padding: 10px;

    p{
        margin-top: 10px;
        color: #666666;
        font-size: 18px;

    }
`;