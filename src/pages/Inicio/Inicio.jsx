import styled from "styled-components"
import Banner from "../../Componentes/Banner/Banner"
import Barra from "../../Componentes/Barra/Barra"
import BarraLateral from "../../Componentes/BarraLateral/BarraLateral"
import Container from "../../Componentes/Container/Container"
import ContenidoPrincipal from "../../Componentes/ContenidoPrincipal/ContenidoPrincipal"
import Footer from "../../Componentes/Footer/Footer"

const Seccion = styled.section`
    display: flex;
    width: 100%;
`

const Inicio = () => {
    return (
        <>
            <Banner/>
                <Container backgroundcolor='#fff'>
                    <Barra/>
                    <Seccion>
                        <BarraLateral />
                        <ContenidoPrincipal/>
                    </Seccion>
                </Container>
            <Footer/>
        </>
    )
}

export default Inicio