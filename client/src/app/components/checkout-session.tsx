"use client"

import { useEffect } from "react"
import {  CheckIcon, XCircleIcon } from '@heroicons/react/24/solid'
// import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { MercadoPago } from "mercadopago/interface"

interface Props {
  customerDetails: MercadoPago.Checkout.Session.CustomerDetails | null
}

export function CheckoutSession({ customerDetails}: Props) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    if (customerDetails) {
      clearCart()
    }
  }, [customerDetails])

  if (!customerDetails) {
    return (
      <>
        <XCircleIcon className="mx-auto h-10 w-10 text-red-400" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl">
          No checkout session found
        </h1>
      </>
    )
  }

  return (
    <>
      <CheckIcon className="mx-auto h-10 w-10 text-lime-500 dark:text-lime-400" />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-lime-500 dark:text-lime-400 sm:text-5xl">
        Order Successful!
      </h1>
      <h3 className="mt-8 text-2xl leading-7">
        Thank you, <span className="font-extrabold">{customerDetails.name}</span>!
      </h3>
      <p className="mt-8">
        Check your purchase email{" "}
        <span className="mx-1 font-extrabold text-indigo-500">{customerDetails.email}</span> for
        your invoice.
      </p>
    </>
  )
}

