//Función asíncrona para crear colecciones.
async function addUser(params){
    const {auth, 
        email, 
        password, 
        displayName
    } = params;
    const user = await auth.createUser({
        email, 
        password, 
        displayName
    })
    return user.uid
}

async function getUser(params){
    const {auth, email} = params
    const user = await auth.getUserByEmail(email);
    return user;
}

async function updateUser(params){
    const {email, displayName = "", newPassword =""} = params;

    const dataToUpdate = {email, displayName, newPassword};

    if(email) {
        dataToUpdate.email = email;
    }
    if(displayName) {
        dataToUpdate.displayName = displayName;
    }
    if(newPassword) {
        dataToUpdate.newPassword = newPassword;
    }

    //Extracción del ID del usuario mediante la función get User.
    const user = await getUser({auth, email});
    const {uid} = user;
    //Envío de argumentos y para obtener datos se usa params.
    const newDaraUser = await auth.updateUser(uid, dataToUpdate);
    return newDaraUser;

}

async function deleteUser(params){
    //Recibimos los datos por medio de params
    const {auth, email} = params
    const user = await getUser({auth, email});
    const {uid} = user;
    await auth.deleteUser(uid);
}

//Exportamos el módulo
module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}