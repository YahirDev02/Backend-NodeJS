//Elaboración de la conexión de la BDD de Firebase.
const {getFirestore} = require('firebase-admin/firestore')

const conexion = require("./");

//Esta funcion es un middelware
function db(req, res, next) { 
    req.db = getFirestore(conexion);
    next();
}

//Exportamos el módulo para usarlo de manera global.
module.exports = {db};