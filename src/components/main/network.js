//Hacemos uso de la librería express
const express = require("express");

const router = express.Router();

function main(req, res){
    const {db} = req
    Controller.main({
        db
    })
    .then((result) => res.send(result))
    .then((error) => res.send(error))
}
router.post("/", main )

module.exports=router;