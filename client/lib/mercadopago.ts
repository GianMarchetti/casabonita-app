// import Stripe from "stripe"

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2022-11-15",
// })

import mercadopago from "../../server/src/router/Mercado_Pago_Router"

export const MP = mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})
