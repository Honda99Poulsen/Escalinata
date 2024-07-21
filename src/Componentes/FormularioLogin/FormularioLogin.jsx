import { useContext } from "react"
import Boton from "../Boton/Boton"
import ContainerFormulario from "../ContainerFormulario/ContainerFormulario"
import Input from "../Input/Input"
import Titulo from "../Titulo/Titulo"
import { LoginContext } from "../../Context/ContextLogin"


const FormularioLogin = () => {

    let placeHolderUs = 'Ingrese su nombre de usuario aqui'
    let placeHolderPs = 'Ingrese su contraseña aqui'
    let LabelUs = 'Usuario'
    let LabelPs = 'Contraseña'
    let ingresar = 'Ingresar'

    const {login, setLogin, password, setPassword} = useContext(LoginContext)

    return (
        <ContainerFormulario>
            <Titulo>Bienvenido</Titulo>
            <Input valor={login} setValor={setLogin} labelName={LabelUs} placeHolder={placeHolderUs} />
            <Input valor={password} setValor={setPassword} labelName={LabelPs} placeHolder={placeHolderPs} type="password"/>
            <Boton>{ingresar}</Boton>
        </ContainerFormulario>
    )
}

export default FormularioLogin