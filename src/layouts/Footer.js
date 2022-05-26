import { Link } from "react-router-dom";
import styled from "styled-components"


export default function Footer(){

    return(
        <Container>
            <Link to="/habitos"><p>Hábitos</p></Link>
            
            <Link to="/hoje"><div></div></Link>
           
            <Link to="/historico"><p>Histórico</p></Link>
        
        </Container>
    )
}


const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 70px;
    background-color:#FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{  
        padding: 5px;
        font-size: 22px;
        color: #52B6FF;
    }

    div{
        margin-bottom: 40px;
        width: 90px;
        height: 90px;
        background-color: black;
        border-radius: 50%;
    }
`;