import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login/Login"
import Inicio from "./pages/Inicio/Inicio"
import GestionUsuario from "./pages/GestionUsuario/GestionUsuario"

function AppRoutes() {
 
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/gestion-de-usuario" element={<GestionUsuario/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes
