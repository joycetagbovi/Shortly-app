import * as React from "react"
import {ChakraProvider } from "@chakra-ui/react"
//import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage"
import PricePage from "./pages/PricePage";
import {Fonts} from './assets/Fonts'
import theme from './theme'



export const App = () => (
  <ChakraProvider theme={theme}>
    <Fonts />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-up" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="price" element={<PricePage />} />
      </Routes>
  </ChakraProvider>
)
