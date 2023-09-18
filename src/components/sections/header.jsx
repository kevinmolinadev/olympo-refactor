import styled from "styled-components"
import { Link } from "react-router-dom"
const Content = styled.div`
    width:100%;
    background-color:${({ theme }) => theme.bg};
    display:flex;
    justify-content:center;
    align-items:center;
    padding:1rem 2rem;
    gap:1rem;
    flex-wrap:wrap;
    color:${({ theme }) => theme.text};
    p{
        padding:0.5rem 1rem;
        background-color:${({ theme }) => theme.bg};
        color:${({ theme }) => theme.text};
        cursor:pointer;
        @media (min-width: 768px) {
            font-size:1.2rem;
        }
        @media (min-width: 1024px) {
            font-size:1.3rem;
        }
    }
`
const Title = styled.h1`
    color:${({ theme }) => theme.text};
    text-align:center;
    font-size:1.5rem;
    flex-grow:1;
    @media (min-width: 768px){
        text-align:left;
        font-size:2rem;
    }
    @media (min-width: 1024px){
        font-size:2.2rem;
    }
`
const List = styled.ul`
    width:100%;
    list-style:none;
    display:flex;
    justify-content:space-around;
    text-align:center;
    @media (min-width: 768px){
        width:50%;
        justify-content:center;
        gap:1rem;
        &>*{
            text-align:center;
        }
    }
    @media (min-width: 1024px){
        width:25%;
        justify-content:end;
        gap:2rem;
        &>*{
            text-align:center;
        }
    }
`
const NavLink = styled(Link)`
    text-decoration:none;
    color:${({ theme }) => theme.text};
    border-radius:1rem;
    &:hover{
        cursor: pointer;
    };
    @media (min-width: 768px){
        font-size:1.2rem;
    }
    @media (min-width: 1024px){
        font-size:1.3rem;
    }
`
const Header = ({ event, value }) => {
    return (
        <Content>
            <Title>OLYMPO</Title>
            <p onClick={event}>Modo {value ? "Claro ☀️" : "Oscuro 🌙"}</p>
            <List>
                <li><NavLink to="/">Principal</NavLink></li>
                <li><NavLink to="/products">Productos</NavLink></li>
            </List>
        </Content>
    )
}
export default Header;