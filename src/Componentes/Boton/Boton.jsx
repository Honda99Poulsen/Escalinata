import styled from "styled-components"

const Button = styled.button`
    height: 54px;
    width: 180px;
    padding: 15px 20px;
    color: #2271D1;
    border: 1px solid #2271D1;
    background-color: #03122F;
    outline: none;
    border-radius: 10px;
`

const Boton = ({children}) => {
    return (
        <Button type="submit">{children}</Button>
    )
}

export default Boton