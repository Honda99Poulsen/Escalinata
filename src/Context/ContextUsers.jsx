import { createContext, useEffect, useState } from "react";

export const ContextUsers = createContext()

ContextUsers.displayName = 'Informacion de Usuarios'

export default function ContextUsersProvider({children}){

    const [usuarios, setUsuarios] = useState([])

    useEffect(()=>{
        fetch('https://66972cf402f3150fb66cd356.mockapi.io/api/v1/users')
        .then((response) => response.json())
        .then( data => setUsuarios(data))
    },[])

    return <ContextUsers.Provider value={{usuarios, setUsuarios}}>
        {children}
    </ContextUsers.Provider>

}