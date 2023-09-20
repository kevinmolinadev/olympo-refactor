import { useNavigate, useParams } from "react-router-dom";
import products from "../data";
import styled from "styled-components";
import { useEffect } from "react";

const Content = styled.main`
    background-color:${({theme})=>theme.content};
    padding:1rem;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    &>div{
        width:80%;
        display:flex;
        flex-wrap:wrap;
        gap:1rem;
        &>:first-child{
            width:100%;
            display:flex;
            flex-direction:column;
            gap:1rem;
            color:${({theme})=>theme.title};
            transition:none;
            &>:last-child{
                font-weight:600;
            }
            @media (min-width: 768px) {
                width:40%;
                
            }
            @media (min-width: 1024px) {
                width:50%;
            }
        }
        &>:last-child{
            width:100%;
            img{
                width:100%;
                border-radius:5px;
            }
            @media (min-width: 768px) {
                width:calc(60% - 1rem);
            }
            @media (min-width: 1024px) {
                width:calc(50% - 1rem);
            }
        }
        @media (min-width: 768px) {
            width:70%;
        }
        @media (min-width: 1024px) {
             width:60%;
        }
    }
`
const Product = () => {
    const identificador = useParams();
    const navigate = useNavigate();
    const product = products.find(product => product.title === identificador.title);
    useEffect(() => {
        const empty = product
        if (!empty) {
            navigate("/not-found");
        }
    }, [identificador, navigate, product]);
    return (
        product &&
        <Content>
            <div>
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
                <div>
                    <img src={product.img} alt={product.title} />
                </div>
            </div>
        </Content>
    )
}
export default Product;