const { Router } = require("express");
const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();
const Mercado_Pago = Router();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKE || "",
});

Mercado_Pago.post("/", async (req, res) => {
  const product = req.body;

  const Product = product.map(e => {
    return {
      title: e.name,
      unit_price: e.price,
      currency_id: "ARS",
      quantity: e.quantity,
    }
  })

  try {
    const preference = {
      items: Product,

      back_urls: {
        success: "http://localhost:3000/",
        failure: "http://localhost:4000/fallo",
      },

      auto_return: "approved",
    };

    const respuesta = await mercadopago.preferences.create(preference);
    console.log(respuesta);
    res.status(200).json(respuesta.response.init_point);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

module.exports = Mercado_Pago;