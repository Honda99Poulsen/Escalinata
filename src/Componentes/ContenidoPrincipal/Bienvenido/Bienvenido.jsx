import { useContext } from "react"
import styled from "styled-components"
import { LoginContext } from "../../../Context/ContextLogin"

const Div = styled.div`
    height: 57px;
    background: #d9d9d9;
    margin-top: 35px;
    display: flex;
    align-items: center;
    padding-left: 86px;
`
const Titulo = styled.h2`
    color: #000;
`

const Bienvenido = () => {

    const {login} = useContext(LoginContext)

    let loginConver = login.toUpperCase()

    return (
        <Div>
            <Titulo>BIENVENIDO, {loginConver}</Titulo>
        </Div>
    )
}

export default Bienvenido