import styled from "styled-components";
import Card from "../card";
import products from "../../data";
const Main = styled.main`
    background-color:${({theme})=>theme.content};
    text-align:center;
    padding:2.5rem 2rem;
    @media (min-width: 768px){
        display:flex;
        flex-direction:column;
        min-height:100vh;
    }

`
const Content=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    gap:1rem;
    padding-inline:1rem;
    padding-bottom:1rem;
    flex-grow:1;
`
const Products = () => {
    return (
        <Main>
            <Content>
                {
                    products.map((product, index) => <Card key={index} product={product} />)
                }
            </Content>
        </Main>
    )
}
export default Products;