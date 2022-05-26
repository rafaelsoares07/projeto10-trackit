import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import styled from "styled-components";

export default function TelaHoje({image}){

    return(
       <>
              <Container>
                <Header image={image}/>
                
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