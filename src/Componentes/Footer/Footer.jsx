import styled from "styled-components"

const Div = styled.div`
    height: 144px;
    width: 100%;
    background: #351414;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
    return (
        <Div>
            <img src="img/Logo.png" alt="Logo" />
        </Div>
    )   
}

export default Footer