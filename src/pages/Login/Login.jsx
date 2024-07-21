import styled from "styled-components"
import FormularioLogin from "../../Componentes/FormularioLogin/FormularioLogin"
import hexToRgba from "hex-to-rgba"
import Container from "../../Componentes/Container/Container"

const Seccion = styled.section`
    background-color: #fff;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Login = () => {

    const Fondo = {backgroundColor: hexToRgba('#112233', '0.5')}

    return(
        <Container>
            <Seccion style={Fondo}>
                <FormularioLogin/>
            </Seccion>
        </Container>
    )
}

export default Login