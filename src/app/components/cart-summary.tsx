"use client"

import { useState } from "react"
import {  ArrowPathIcon } from '@heroicons/react/24/solid'

import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { Button } from "../components/ui/button"

export function CartSummary() {
  const { formattedTotalPrice, totalPrice, cartDetails, cartCount } = useShoppingCart()
  const [isLoading, setLoading] = useState(false)
  const isDisabled = isLoading || cartCount! === 0
  const shippingAmount = cartCount! > 0 ? 30000 : 0
  const totalAmount = totalPrice! + shippingAmount

  function envio() {
    
  }
  
  function onCheckout() {}

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
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <input type="text" className="border border-black rounded-lg p-2" />
          </dt>
          <dd className="text-sm font-medium">
            <Button onClick={envio} disabled={isDisabled} className='bg-yellow-300 rounded-md hover:bg-yellow-400' >
                Calcular envío
              </Button>
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Envio</span>
          </dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({ value: shippingAmount, currency: "ARS"})}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Total</dt>
          <dd className="text-base font-medium">ARS {formatCurrencyString({ value: totalAmount, currency: "ARS"})}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button onClick={onCheckout} className="w-full" disabled={isDisabled}>
          {isLoading && <ArrowPathIcon />}
          {isLoading ? "Loading..." : "Checkout"}
        </Button>
      </div>
    </section>
  )
}
