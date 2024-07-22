// ContenidoPrincipalGestionUsuario

import styled from "styled-components"
import Bienvenido from "../../../Componentes/ContenidoPrincipal/Bienvenido/Bienvenido"
import AgregarUsuario from "./AgregarUsuario/AgregarUsuario"
import MostrarUsuarios from "../../../Componentes/MostrarUsuarios/MostrarUsuarios"
import ContextUsersProvider from "../../../Context/ContextUsers"

const Div = styled.div`
    flex: 82.08%;
`
const Section = styled.section`
    margin: 18px 59px 0 59px;
`

const ConPriGeUsuario = () => {
    return (
            <Div>
                <Bienvenido titulo='GESTION DE USUARIOS'/>
                <Section>
                    <ContextUsersProvider>
                        <AgregarUsuario/>
                        <MostrarUsuarios/>
                    </ContextUsersProvider>
                </Section>
            </Div>
    )
}

export default ConPriGeUsuario