import { createContext, useState } from "react";

export const LoginContext = createContext()

LoginContext.displayName = "Datos_De_Ingreso"

export default function LoginContextProvider ({children}) {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [usuarios, setUsuarios] = useState([])

    return(
        <LoginContext.Provider value={{login, setLogin, setPassword, password, usuarios, setUsuarios}}>
            {children}
        </LoginContext.Provider>
    )

}

