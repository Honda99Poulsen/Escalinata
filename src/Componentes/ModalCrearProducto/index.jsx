import { useContext } from "react";
import styled from "styled-components";
import { ContextProductos } from "../../Context/ContextProductos";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  background-color: #2A2733;
  border: none;
  width: 1156px;
`;

const ModalCrearProducto = () => {
    
  const { solicitudAgregar, setSolicitudAgregar } =
    useContext(ContextProductos);

  const manejarOnclick = () => {
    setSolicitudAgregar(!solicitudAgregar);
  };

  return (
    <>
      {solicitudAgregar && (
        <Overlay>
          <DialogEstilizado open={!!solicitudAgregar}>
            <p>Greetings, one and all!</p>
            <form method="dialog">
              <button onClick={manejarOnclick}>
                <img src="public/img/close.png" alt="close" />
              </button>
            </form>
          </DialogEstilizado>
        </Overlay>
      )}
    </>
  );
};

export default ModalCrearProducto;
