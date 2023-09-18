import GlobalStyle from "./styles/Global"
import { ThemeProvider } from "styled-components"
import { Dark, Light } from "./styles/themes"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/sections/header"
import Footer from "./components/sections/footer"
import Home from "./components/pages/home"
import Products from "./components/pages/products"
import { useState } from "react"
function App() {
  const [darkMode, setDarkMode]=useState(false);
  const changeTheme=()=>{
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={darkMode?Dark:Light}>
      <BrowserRouter>
        <GlobalStyle />
        <Header value={darkMode} event={changeTheme} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
