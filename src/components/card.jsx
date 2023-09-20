import styled from "styled-components";
import { buttonColor } from "../styles/variables";
import { Link, useResolvedPath } from "react-router-dom";
const Container = styled.div`
    width:clamp(250px, 35%, 380px);
    height:250px;
    border-radius:1rem;
    overflow:hidden;
    box-shadow:3px 5px 1rem rgba(0,0,0,0.3);
    div{
        width:100%;
    }
    &>:first-child{
        height:60%;
        overflow:hidden;
    }
    &>:last-child{
        background-color:${({theme})=>theme.bg};
        height:40%;
        color:${({theme})=>theme.text};
    }
    @media (min-width: 768px){
        height:300px;
    }
    @media (min-width: 1024px){
        height:350px;
    }
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-position:center;
    object-fit:cover;
`
const Description = styled.div`
    display:flex;
    flex-direction:column;
    padding:0.5rem;
    gap:0.5rem;
    p{
        font-weight:600;
        text-align:left;
    }
    div{
        flex-grow:1;
        display:flex;
        flex-direction:column;
        gap:5px;
    }
    @media (min-width: 768px){
        padding:1rem;
        &>:first-child{
            font-size:1.1rem;
        }
    }
    @media (min-width: 1024px){
        &>:first-child{
            font-size:1.3rem;
        }
    }
`
const Price = styled.p`
    text-align:left;
    font-size:0.8rem;
    text-decoration:${({ $ofert }) => !$ofert ? "none" : "line-through"};
    opacity:${({ $ofert }) => !$ofert ? "1" : "0.8"};
    @media (min-width: 768px){
        font-size:0.9rem;
    }
    @media (min-width: 1024px){
        font-size:1.1rem;
    }
`
const Buttom = styled(Link)`
    margin-left:auto;
    margin-right:2px;
    border:none;
    padding:3px 5px;
    position:relative;
    bottom:5px;
    border-radius:5px;
    text-decoration:none;
    background-color:${buttonColor};
    color:${({theme})=>theme.text};
    transition:color,background-color;
    transition-duration:.5s;
    &:hover{
        cursor:pointer;
        background-color:${buttonColor + 'E1'};
    }
    @media (min-width: 768px){
        padding:6px 8px;
        font-size:0.9rem;
        bottom:12px;
    }
    @media (min-width: 1024px){
        padding:0.7rem 1.5rem;
        font-size:1.2rem;
        bottom:1rem;
    }
`
const Card = ({ product }) => {
    const { title, price, img } = product;
    const discount = 0.15;
    const {pathname}=useResolvedPath()
    return (
        <Container>
            <div>
                <Image src={img} alt={title} />
            </div>
            <Description>
                <p>{title}</p>
                <div>
                    <Price $ofert >Antes: ${price}</Price>
                    <Price  >Ahora: ${(price - (price * discount)).toFixed(2)}</Price>
                    <Buttom to={`${pathname!=="/"?pathname:"/products"}/${title}`} >Comprar</Buttom>
                </div>
            </Description>
        </Container>
    )
}
export default Card;