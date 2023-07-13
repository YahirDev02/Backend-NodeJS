//Hacemos uso de la librería express
const express = require("express");
const Controller = require("./controller");

const router = express.Router();

function addUser(req, res){
    const {auth} = req;
    const {
        email, 
        password, 
        displayName
    } = req.body;

    Controller.addUser({
        auth,
        email,
        password,
        displayName
    })
    .then((result) => res.send(result))
    .then((error) => res.send(error))
}

function getUser(req, res){
    const {auth} = req;
    const {email} = req.body;
    Controller.getUser({
        auth, email
    })
    .then((result) => res.send(result))
    .then((error) => res.send(error))
}

function updateUser(req, res){
    const {auth} = req;
    const {email, displayName, newPassword} = req.body;
    Controller.updateUser({
        auth, 
        email, 
        displayName, 
        newPassword
    })
    .then((result) => res.send(result))
    .then((error) => res.send(error))
}

function deleteUser(req, res){
    const {auth} = req;
    const {email} = req.body;

    Controller.deleteUser({
        auth, email
    })
    .then((result) => res.send(result))
    .then((error) => res.send(error))
}

router.post("/", addUser)
router.get("/get-user", getUser)
router.patch("/", updateUser)
router.delete("/")

module.exports=router;