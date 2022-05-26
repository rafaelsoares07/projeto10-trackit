
import styled from "styled-components";


export default function Header({image}){

    console.log(image)
    return(
        <Container>
            <p>TrackIt</p>
            <img src={image} alt="imagem do usuario"/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width:375px;
    height:70px;
    background-color:#126BA5;
   
    p{
        font-family: 'Playball', cursive;
        color: #FFF;
        font-size: 39px;
        font-weight: 400;
        margin-left: 10px;
    }

    img{
        width: 50px;
        height: 50px;
        background-color: red;
        border-radius: 50%;
        margin-right: 10px;
    }
`;
