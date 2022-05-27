import { Link } from "react-router-dom";
import styled from "styled-components"
import {CircularProgressbar,CircularProgressbarWithChildren,buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


export default function Footer({tam}){
    
    //const numHabitos = (tam===undefined||tam===null? 0: tam.length)
   // const numCheck = numHabitos -2 

   // const percentage = (numCheck/numHabitos)*100 

   const percentage = 56


    return(
        <Container>
            <Link to="/habitos"><p>Hábitos</p></Link>
            
            <Link to="/hoje">

            <div style={{width:90, height:90, marginBottom:55}}>
            <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"})}
            />
            </div>
            

            </Link>
           
           
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

    div{
        background-color: #FFF;
        border-radius: 50%;
    }

    p{  
        padding: 15px;
        font-size: 22px;
        color: #52B6FF;
    }

    
`;