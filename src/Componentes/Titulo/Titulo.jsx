import styled from "styled-components"

const Title = styled.h1`
    color: #2968E1;
    font-family: "Raleway";
    font-size: 64px;
    font-weight: 400;
    line-height: normal;
`

const Titulo = ({children}) => {
    return(
        <Title>
            {children}
        </Title>
    )
}

export default Titulo