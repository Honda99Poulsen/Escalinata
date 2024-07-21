import styled from "styled-components"

const Div = styled.div`
    height: 144px;
    width: 100%;
    background: #C12E2E;
    padding-left: 94px;
    box-sizing: border-box;
`

const Banner = () => {
    return (
        <Div>
            <img src="img/Logo.png" alt="Logo" />
        </Div>
    )
}

export default Banner