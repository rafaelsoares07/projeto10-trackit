import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import styled from "styled-components";

export default function TelaHistorico({image}){

    return(
       <>
              <Container>
                <Header image={image}/>
                
                <MenuAddHabitos>
                    <h1>Histórico</h1>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </MenuAddHabitos>

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
    h1{
        font-size:22px;
        color:#126BA5;
        font-weight: 100;
    }

    p{
        margin-top: 10px;
        color: #666666;
        font-size: 18px;
    }


`;