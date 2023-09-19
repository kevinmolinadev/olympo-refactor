import styled from "styled-components";
import { bgImage } from "../../styles/variables";
import products from "../../data";
import Card from "../card"
const Main = styled.main`
    background-color:${({ theme }) => theme.content};
    display:flex;
    flex-direction:column;
    align-items:center;
    &>h2{
        color:${({ theme }) => theme.title};
        padding-top:1rem;
        @media (min-width: 768px) {
            font-size:1.6rem
        }
        @media (min-width: 1024px) {
            font-size:1.7rem
        }
    }
`
const Information = styled.div`
    background-image:url(${bgImage});
    padding-inline:10%;
    width:100%;
    height:60vh;
    display:flex;
    margin:auto;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:${({ theme }) => theme.text};
    gap:2rem;
    p{
        font-size:1.2rem;
        white-space:pre-line;
        line-height:1.3;
    }
    @media (min-width: 768px) {
    }
`
const Button = styled.button`
    padding:1rem;
    background-color:${({ theme }) => theme.bg};
    color:${({ theme }) => theme.text};
    border:none;
    font-size:1rem;
    border-radius:10px;
    cursor:pointer;
    &::first-letter{
        text-transform:uppercase;
    }
    @media (min-width: 768px) {
        padding:1rem 1.5rem;
        font-size:1.3rem;
    }
    @media (min-width: 1024px) {
        padding:1rem 1.5rem;
        font-size:1.3rem;
    }
`
const ContentProducts = styled.section`
    width:100%;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-wrap:wrap;    
    gap:1rem;
    padding:2rem 1rem;
    `
const ContactMe = styled.section`
    background-color:${({ theme }) => theme.section};
    width:100%;
    padding:1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    gap:2rem;
    ul{
        background-color:${({ theme }) => theme.text};
        list-style:none;
        border-radius:10px;
        overflow:hidden;
        li{
            padding:0.5rem 1rem;
        }
        &>:nth-child(even){
            border-block:1px solid black;
        }
        
    }
    form{
        width:100%;
        display:flex;
        flex-direction:column;
        border:3px dashed ${({ theme }) => theme.color};
        justify-content:center;
        align-items:center;
        padding:1rem;
        gap:1rem;
        color:${({ theme }) => theme.color};
        h2{
            padding-block:1rem;
        }
        label{
            width:100%;
            font-size:1.1rem;
            text-align:left;
        }
        input,textarea{
            width:100%;
            padding:0.5rem 1rem;
            border-radius:5px;
            border:none;
            &:focus{
                border:none;
                outline-color:${({ theme }) => theme.content};
            }
        }
        textarea{
            resize:vertical;
            min-height:10vh;
        }
        @media (min-width: 1024px) {
            width:40%;
        }
    }

`
const Home = () => {
    return (
        <Main>
            <Information>
                <p>
                    Olympo nacio con la Visión es crecer y abarcar nuestra distribución y servicio a todo el país para ser líderes en cada uno de los aspectos que involucran el deporte que es primordial para nuestra empresa
                    Importaciones, distribución de artículos e indumentaria deportiva de diferentes marcas y trofeos Champion, ventas al por mayor y menor, entre sus principales servicios.
                    Contamos con sucursales tanto en la ciudad de La Paz, como también en Santa Cruz, asimismo distribución a todo el país .
                    Proveedora de diferentes marcas en varias disciplinas deportivas, la calidad, esfuerzo y la disposición esta a su servicio de nuestro equipo de trabajo.
                </p>
                <Button>conocer mas</Button>
            </Information>
            <h2>Productos Destacados</h2>
            <ContentProducts>
                {
                    products.filter((_, index) => index < 4).map((product, index) => <Card key={index} product={product} />)
                }
            </ContentProducts>
            <ContactMe>
                <ul>
                    <li>Paises afiliados: Mantis Polvoneo Dinasuri </li>
                    <li>Direccion: Renacer del viento</li>
                    <li>Telefono: 74451273</li>
                    <li>Celular: 64751245</li>
                    <li>Direccion: olympo@negocios.com</li>
                </ul>
                <form>
                    <h2>Contacto</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" />
                </form>
            </ContactMe >
        </Main >
    )
}
export default Home;