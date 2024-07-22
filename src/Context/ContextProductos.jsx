import { createContext, useState } from "react";

export const ContextProductos = createContext()

ContextProductos.displayName = 'ProductosContext'

export default function ContextProductosProvider({children}){

    const [solicitudAgregar, setSolicitudAgregar] = useState(false)

    return <ContextProductos.Provider value={{solicitudAgregar, setSolicitudAgregar}}>
                {children}
           </ContextProductos.Provider>

}