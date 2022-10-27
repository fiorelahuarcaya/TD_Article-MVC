const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const express = require("express");
const routes = express.Router();

const functionModel = require('../Model/Functions.model');
dotenv.config();
const uri = process.env.MONGO_URI;

//SELECT Productos según ID TIENDA
routes.get("/:idTienda", (req, res) => {
  const idTienda = req.params.idTienda;
  async function seleccion() {
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const resultado = await functionModel.findProducts(client, idTienda);
      res.send(resultado);
    } finally {
      await client.close();
    }
  }
  seleccion().catch(console.error);
});

module.exports = routes;
