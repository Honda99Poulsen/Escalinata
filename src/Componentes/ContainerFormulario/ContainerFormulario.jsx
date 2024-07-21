// ContainerFormulario es una caja de tipo formulario que sirve para contener entradas (Input) 
// y botones que componeran el formulario

import styled from "styled-components"
import { conexionApi } from "../../Js/Controllers/conexionApi"
import { useContext } from "react"
import { LoginContext } from "../../Context/ContextLogin"
import { useNavigate } from "react-router-dom";

const Formulario = styled.form`
    border: 5px solid var(--FrontEnd, #6BD1FF);
    border-radius: 50px;
    background: #03122F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 84px;
    width: 80%;
    box-sizing: border-box;
`

const ContainerFormulario = ({children}) => {

    const {login, password} = useContext(LoginContext)

    const navegar = useNavigate()

    async function manejarSubmit(e){
        
        e.preventDefault()

        let validacion = await conexionApi.getElementByUser(login)

        if(validacion[0].password === password){
            // salto de pagina a la inicial
            console.log('Contrasenia correcta');
            navegar('/inicio')
        }else{
            // Posible dialog con mensaje de contrasenia incorrecta
            console.log('Invalida');
        }

    }

    return (
        <Formulario onSubmit={manejarSubmit}>{children}</Formulario>
    )
}

export default ContainerFormulario