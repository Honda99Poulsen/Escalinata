import styled from "styled-components"

const Entrada = styled.input`
    background: #FFF;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);
    padding: 20px 30px;
    border: 1px solid;
    stroke-width: 1px;
    stroke: #000;
    border-radius: 10px;
    margin-bottom: 20px;
`
const Label = styled.label`
    color: #7A7A7A;
    font-family: "Raleway";
    font-size: 24px;
    font-weight: 400;
`

const Input = ({valor, setValor , type='text', placeHolder='', labelName, required=true}) => {

    const manejarCambio = (e) => {
        setValor(e.target.value)
    }

    return (
        <>
            <Label>{labelName}</Label>
            <Entrada value={valor} onChange={manejarCambio} required={required} placeholder={placeHolder} type={type}></Entrada>
        </>
    )
}

export default Input