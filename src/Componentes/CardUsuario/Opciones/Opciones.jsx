import styled from "styled-components"
import Editar from './Editar.png'
import Eliminar from './Eliminar.png'

const Div = styled.div`
    width: 100%;
    height: 40px;
    background: #000;
    display: flex;
    align-items: center;

`
const Boton = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 12px;
    font-family: 'Montserrat';
`

const Icono = styled.img`
    width: 10px;
`

const Opciones = () => {
    return (
        <Div>
            <div>
                <Boton><Icono src={Editar} alt="editar" />EDITAR</Boton>
            </div>
            <div>
                <Boton><Icono src={Eliminar} alt="eliminar" />ELIMINAR</Boton>
            </div>
        </Div>
    )
}

export default Opciones