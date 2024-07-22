import styled from "styled-components";
import Banner from "../../Componentes/Banner/Banner";
import Barra from "../../Componentes/Barra/Barra";
import BarraLateral from "../../Componentes/BarraLateral/BarraLateral";
import Container from "../../Componentes/Container/Container";
import ConPriGeUsuario from "./ContenidoPrincipalGestion";
import Footer from "../../Componentes/Footer/Footer";
import ModalCrearProducto from "../../Componentes/ModalCrearProducto";
import ContextProductosProvider from "../../Context/ContextProductos";

const Seccion = styled.section`
  display: flex;
  width: 100%;
`;

const GestionUsuario = () => {
  return (
    <>
      <ContextProductosProvider>
        <Banner />
        <Container backgroundcolor="#fff">
          <Barra />
          <Seccion>
            <BarraLateral />
            <ConPriGeUsuario />
          </Seccion>
        </Container>
        <ModalCrearProducto />
        <Footer />
      </ContextProductosProvider>
    </>
  );
};

export default GestionUsuario;
