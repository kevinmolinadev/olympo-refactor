import { useState } from "react"
import GlobalStyle from "./styles/Global"
import styled, { ThemeProvider } from "styled-components"
import { Dark, Light } from "./styles/themes"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/sections/header"
import Footer from "./components/sections/footer"
import Home from "./components/pages/home"
import Products from "./components/pages/products"
import Product from "./components/product"
import NotFound from "./components/pages/notFount"
const Web = styled.div`
min-height:100vh;
display:flex;
flex-direction:column;
&>:nth-child(2){
  flex-grow:1;
}
`
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={darkMode ? Dark : Light}>
      <BrowserRouter basename="/olympo-refactor">
        <GlobalStyle />
        <Web>
          <Header value={darkMode} event={changeTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:title" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Web>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
