import { Link } from 'react-router-dom';
import img from '../../assets/not-found.webp';
import styled from 'styled-components';
const Content=styled.main`
    background-image:url(${img});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:4rem;
    h1{
        color:#FFF;
        font-size:3rem;
        text-shadow:5px 5px 10px ${({theme})=>theme.bg};
    }
`
const NavLink=styled(Link)`
    text-decoration:none;
    background-color:${({theme})=>theme.bg};
    color:${({theme})=>theme.text};
    padding:1rem 1.5rem;
    font-size:1.2rem;
    border-radius:0.5rem;
    box-shadow:2px 3px 20px ${({theme})=>theme.section};
`
const NotFound=()=>{
    return(
        <Content>
            <h1>404 NOT FOUND :(</h1>
            <NavLink to="/">Home</NavLink>
        </Content>
    )
}
export default NotFound;