const dotenv = require("dotenv")
const express = require("express");
const routes = express.Router();

const { MongoClient } = require("mongodb");

dotenv.config();
const uri = process.env.MONGO_URI;

//SELECT Productos según ID TIENDA
routes.get("/:idTienda", (req, res) => {
  const idTienda = req.params.idTienda;
  async function seleccion() {
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const resultado = await findProducts(client, idTienda);
      res.send(resultado);
    } finally {
      await client.close();
    }
  }
  seleccion().catch(console.error);
});

async function findProducts(client, tiendaID) {
  const result = await client
    .db(`tienda-${tiendaID}`)
    .collection("productos")
    .find({}).toArray();

  if (result) {
    console.log(
      `Se encontró productos en la tienda ${tiendaID}':`
    );
    console.log(result);
    return result;
  } else {
    console.log(`No se encontró productos en la tienda '${tiendaID}'`);
  }
}
module.exports = routes;
