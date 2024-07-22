

async function getElementByUser(usuario){

    try {
        let conexion = await fetch(`https://66972cf402f3150fb66cd356.mockapi.io/api/v1/users?usuario=${usuario}`, {
            method : "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
    
        let conexionConvertida = conexion.json()
        
        return conexionConvertida

    } catch (error) {
        console.log(error);
    }

}  

async function getAllUsers(){

    try {

        let conexion = await fetch(`https://66972cf402f3150fb66cd356.mockapi.io/api/v1/users`, {
            method : "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
    
        let conexionConvertida = conexion.json()
        
        return conexionConvertida

    } catch (error) {
        console.log(error);
    }

}

export const conexionApi = {getElementByUser, getAllUsers}