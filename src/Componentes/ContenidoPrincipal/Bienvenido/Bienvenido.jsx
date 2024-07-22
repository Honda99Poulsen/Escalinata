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
    width: 100%;
    box-sizing: border-box;
`
const Titulo = styled.h2`
    color: #000;
    font-family: "Pacifico";
    font-weight: 400;
`

const Bienvenido = ({titulo}) => {

    const {login} = useContext(LoginContext)

    let loginConver = login.toUpperCase()

    return (
        <Div>
            <Titulo>{titulo ? titulo : `BIENVENIDO, ${loginConver}`}</Titulo>
        </Div>
    )
}

export default Bienvenido