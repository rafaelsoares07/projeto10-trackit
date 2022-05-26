import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import styled from "styled-components";

export default function TelaHoje({image}){

    return(
       <>
              <Container>
                <Header image={image}/>

                <Cabecalho>
                    <div>
                        <h1>Dia da semana aqui</h1>
                        <p>Mensagem de quantos habitos concluidos aaqui</p>
                    </div>
                </Cabecalho>

                <SuasTarefas>


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