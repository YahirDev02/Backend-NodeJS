//Función asíncrona para crear colecciones.
async function main(params){
    const {db} = params;
    await db.collection("example").doc("example").set({
        label:2
      })
      return "exitoso"
}

//Exportamos el módulo
module.exports = {
    main
}