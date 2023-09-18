import styled from "styled-components"
import { textColor } from "../../styles/variables"

const Content=styled.footer`
    background-color:${({theme})=>theme.bg};
    color:${textColor};
    padding-block:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:1rem;
    p{
        font-size:1.1rem;
    }
    @media (min-width: 768px){
        padding-block:1.5rem;
        p{
            font-size:1.3rem;
        }
    }
    @media (min-width: 1024px){
        padding-block:1.5rem;
        p{
            font-size:1.5rem;
        }
    }
`
const Footer =()=>{
    return(
        <Content>
            <p>Kevin Molina Lazarte</p>
            <a href="https://github.com/molinalk/org" target="_blank "><img src="https://img.icons8.com/fluency/38/000000/github.png" alt="github" /></a>
            <a href="https://www.linkedin.com/in/kevin-molina-lazarte" target="_blank "><img src="https://img.icons8.com/fluency/35/linkedin.png" alt="linkedin" /></a>
        </Content>
    )
}
export default Footer;