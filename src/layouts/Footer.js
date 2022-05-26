import { Link } from "react-router-dom";
import styled from "styled-components"

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Footer(){
    const percentage = 66;


    return(
        <Container>
            <Link to="/habitos"><p>Hábitos</p></Link>
            
            <div style={{ width: 90, height: 90, marginBottom:55 }}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
           
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

    
`;