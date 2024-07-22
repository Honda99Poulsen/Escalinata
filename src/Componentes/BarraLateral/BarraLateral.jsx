import styled from "styled-components"
import LinkNav from "../LinkNav"

const BarraLateralIzquiera = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: #D9D9D9;
    width: 258px;
    background: #d9d9d9;
    gap: 23px;
    flex: 17.92%;
`
const Con = styled.div`
    background-color: #F0464699;
    width: 100%;
`
const Ul = styled.ul`
    list-style-type: none;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`
const H2 = styled.h2`
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: center;
    color: #fff;
    
`
const Lista = styled.li`
    padding: 5px 10px;
    background-color: #F0464699;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    border: 1px solid #000;
    color: #fff;
    text-align: center;
`
const H2_Saludo = styled.h2`
    font-family: "Pacifico", 'Courier New', Courier, monospace;
    color: #3441BE;
    font-size: 20px;
    font-weight: 400;
    line-height: 35.12px;
    padding-bottom: 20px;
    
`

const BarraLateral = () => {
    return(
        <BarraLateralIzquiera>
            <Con>
                <H2>DASHBOARD</H2>
            </Con>
            <Ul>
                <LinkNav to='/gestion-de-usuario'>Gestion de Usuario</LinkNav>
                <Lista>Gestion de Inventario</Lista>
                <Lista>Control de Ventas</Lista>
                <Lista>Gestion de Citas</Lista>
                <Lista>Gestion de Servicios</Lista>
                <Lista>Reportes y Analisis</Lista>
                <Lista>Gestion de Proveedores</Lista>
            </Ul>
            <H2_Saludo>Buenos Dias</H2_Saludo>
            
        </BarraLateralIzquiera>
    )
}

export default BarraLateral