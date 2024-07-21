import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Inicio from "./pages/Inicio/Inicio"

function AppRoutes() {
 
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/inicio" element={<Inicio/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes
