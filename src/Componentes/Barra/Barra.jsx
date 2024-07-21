import styled from "styled-components"
import CustomLink from "../Link/Link"

const Div = styled.div`
    height: 65px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #000;
`
const H1 = styled.h1`
    flex: 50%;
    color: #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`
const DivBotones = styled(Div)`
    flex: 50%;
    gap: 20px;
`

const Barra = () => {
    return (
        <Div>
            <H1>SISTEMA DE GESTION - ESTETICA C&C</H1>
            <DivBotones>
                <CustomLink to='/perfil'>PERFIL</CustomLink>
                <CustomLink to='/login'>CERRAR SESION</CustomLink>
            </DivBotones>
        </Div>
    )
}

export default Barra