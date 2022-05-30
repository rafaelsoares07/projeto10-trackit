
import styled from "styled-components"


export default function Loading(){
    return(
        <L_loader>
            <C_loader>

            </C_loader>
        </L_loader>
    )
}

const L_loader = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: 0 auto;
align-items: center;
display: flex;
justify-content: center;
min-height: 100vh;
`;

const C_loader = styled.div`
animation: is-rotation 1s infinite;
width: 80px;
height: 80px;
border: 6px solid #8FC549 ;
border-top: aqua;
border-radius: 50%;
@keyframes is-rotation{
    to{
        transform: rotate(1turn)
    }
}

`;

