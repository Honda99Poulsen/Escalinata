import styled from "styled-components"
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

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

const Opciones = () => {

    return (
        <Div>
            <div>
                <Boton><CiEdit />EDITAR</Boton>
            </div>
            <div>
                <Boton><MdDeleteOutline />ELIMINAR</Boton>
            </div>
        </Div>
    )
}

export default Opciones