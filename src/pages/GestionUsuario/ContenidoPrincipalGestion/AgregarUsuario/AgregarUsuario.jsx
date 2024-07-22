import { useContext } from "react"
import styled from "styled-components"
import { ContextProductos } from "../../../../Context/ContextProductos"

const Boton = styled.button`
    background: #532469;
    color: white;
    font-family: "IBM Plex Mono";
    border: 1px solid #000;
`

const AgregarUsuario = () => {

    const {solicitudAgregar, setSolicitudAgregar} = useContext(ContextProductos)

    const manejarOnClick = () => {
        setSolicitudAgregar(!solicitudAgregar)
    }

    return(
        <Boton onClick={manejarOnClick}>
            + Añadir Usuario
        </Boton>
    )
}

export default AgregarUsuario