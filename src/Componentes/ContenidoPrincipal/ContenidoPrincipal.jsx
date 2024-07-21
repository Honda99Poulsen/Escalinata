import styled from "styled-components"
import Bienvenido from "./Bienvenido/Bienvenido"

const Div = styled.div`
    flex: 82.08%;
    display: flex;
    gap: 51px;
    flex-direction: column;
`
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Resumen = styled.h1`
    font-family: "IBM Plex Mono";
    font-size: 18px;
    font-weight: 700;
` 
const Parrafo = styled.p`
    font-family: "IBM Plex Mono";
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;

`
const ContenedorDivs = styled.div`
    display: flex;
    gap: 190px;
`
const ContenedorNumeros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const ContenidoPrincipal = () => {
    return (
        <Div>
            <Bienvenido />
            <Section>
                <Resumen>Resumen de actividades recientes:</Resumen>
                <ContenedorDivs>
                    <ContenedorNumeros>
                        <Parrafo>Ventas del dia:</Parrafo>
                        <Parrafo>Citas Programadas:</Parrafo>
                        <Parrafo>Productos en Stock:</Parrafo>
                    </ContenedorNumeros>
                    <ContenedorNumeros> 
                        <Parrafo>1200 LPS</Parrafo>
                        <Parrafo>15</Parrafo>
                        <Parrafo>200</Parrafo>
                    </ContenedorNumeros>
                </ContenedorDivs>
            </Section>
        </Div>
    )
}

export default ContenidoPrincipal