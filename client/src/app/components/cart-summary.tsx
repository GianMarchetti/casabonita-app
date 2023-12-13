"use client"

import { useState } from "react"

import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { ClockIcon } from "lucide-react"

import { Button } from "../components/ui/button"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { Product } from "use-shopping-cart/core"

export function CartSummary() {
  const { formattedTotalPrice, totalPrice, cartDetails, cartCount, redirectToCheckout } = useShoppingCart()
  const [isLoading, setLoading] = useState(false)
  const isDisabled = isLoading || cartCount! === 0
  // const shippingAmount = cartCount! > 0 ? 300000 : 0
  const totalAmount = totalPrice! 
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product)


  function envio() {
    
  }
  
  const Comprar = async (product: any) => {
    const response = await axios.post(
      "http://localhost:4000/Mercado_Pago",
      product
    )
    window.location.href = response.data
  }

  async function onCheckout() {
    setLoading(true)
    const response = await axios.post(
      "http://localhost:4000/Mercado_Pago",{
      body: JSON.stringify(cartDetails)
    })
    const data = await response.data
    const result = await redirectToCheckout(data.id)
    if (result?.error) {
      console.error(result);
    }
    setLoading(false)
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 text-black px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg text-pink-200 font-medium">
        Mi Compra
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex flex-col items-start justify-between border-t border-gray-200 pt-4 dark:border-gray-600 sm:flex-row">
          <p className="mt-4 flex space-x-2 text-sm">
            <span>Arreglar Envio por WhastApp</span>
            <ClockIcon className="h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
          </p>
        </div>
        {/* <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Envio</span>
          </dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({ value: shippingAmount, currency: "ARS"})}
          </dd>
        </div> */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Total</dt>
          <dd className="text-base font-medium">ARS {formatCurrencyString({ value: totalAmount, currency: "ARS"})}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button onClick={onCheckout} className="w-full bg-green-500 hover:bg-green-400" disabled={isDisabled}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin "/>}
          {isLoading ? "Loading..." : "Checkout"}
        </Button>
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
              onClick={() => Comprar(product)}
              type="button"
              disabled={isDisabled}
              className="w-full bg-indigo-400 py-6 text-base font-medium hover:bg-gradient-to-tr from-indigo-200 to-indigo-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
              {isLoading ? "Loading..." : "MercadoPago"}
            </Button>
        </div>        
      </form>
    </section>
  )
}

function product(product: any): void {
  throw new Error("Function not implemented.")
}

