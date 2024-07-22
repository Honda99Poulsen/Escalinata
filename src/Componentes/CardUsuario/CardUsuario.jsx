import styled from "styled-components";
import Opciones from "./Opciones/Opciones";

const Div = styled.div`
  width: 147px;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 15px;
`;
const DivImagen = styled.div`
    height: 144.33px;;
`
const Imagen = styled.img`
    width: 100%;
    height: 144.33px;
    border-radius: 15px 15px 0 0;
`
const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000E5;
    border-radius: 0 0 15px 15px;
`
const Texto = styled.span`
    color: #fff;
    box-sizing: border-box;
    padding: 5px;
    font-family: 'Roboto';
    font-weight: 800;
    font-size: 16px;
`

const CardUsuario = ({ usuario, llave, img }) => {
  return (
    <Div>
      <DivImagen>
        <Imagen src={img}/>
      </DivImagen>
      <Opciones/>
      <DivInfo>
        <Texto>{usuario}</Texto>
        <Texto>{llave}</Texto>
      </DivInfo>
    </Div>
  );
};

export default CardUsuario;
