import styled from "styled-components";

const Contenedor = styled.div`
    display: flex;
    background: ${props => props.$backgroundColor ? '#fff' : 'linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%)'};
    max-width: 100%;
    flex-direction: column;
    align-items: center;
`  

const Container = ({children, backgroundcolor}) => {
    return (
        <Contenedor $backgroundColor={backgroundcolor}>
            {children}
        </Contenedor>
    )
}

export default Container;