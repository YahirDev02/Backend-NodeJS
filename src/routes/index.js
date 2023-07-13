//Requerimos la librería Express
require("express")
const main = require("../components/main/network")
const users = require("../components/users/network")
const allRouters = require("..//utils/constants/routes.json")

//arrow functions
const routes = server =>{
    //La ruta pricipal.
    server.use(allRouters.main,main),
    //La ruta de usuarios que se creo en el archivo "rutes.json".
    server.use(allRouters.users, users)
}

module.exports=routes;