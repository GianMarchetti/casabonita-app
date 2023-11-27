"use client"

import { useState } from "react"
import Link from "next/link"
import {  ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "../../../config/tallerInventory"
import { getSizeName } from "../../../lib/utils"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"

interface Props {
  taller: SanityProduct
}

export function TallerInfo({ taller}: Props) {
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const { addItem, incrementItem, cartDetails } = useShoppingCart()
  const { toast } = useToast()
  const isInCart = !!cartDetails?.[taller._id]

  function addToCart() {
    const item = {
      ...taller,
    }
    isInCart ? incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name}`,
      description: "Product added to cart",
      action: (
        <Link href='/cart'>
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>Open Cart</span>
            <ArrowRightCircleIcon className="h-5 w-5" />
          </Button>
        </Link>
      )
    })
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{taller.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">{formatCurrencyString({ value: taller.price, currency: taller.currency})}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{taller.description}</div>
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            type="button"
            onClick={addToCart}
            className="w-full bg-green-600 py-6 text-base font-medium hover:bg-gradient-to-tr from-green-200 to-green-400 text-black focus:outline-none focus:ring-2 focus:ring-white-200"
          >
            Agregar al carrito
          </Button>
        </div>        
      </form>
      <form className="mt-6">
        <div className="mt-4 flex">
          <Link href={'/components/cart'} className="w-full">
            <Button
              type="button"
              className="w-full bg-yellow-400 py-6 text-base font-medium hover:bg-gradient-to-tr from-yellow-200 to-yellow-400 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Ir al carrito
            </Button>
          </Link>
        </div>        
      </form>
      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
              type="button"
              className="w-full bg-indigo-400 py-6 text-base font-medium hover:bg-gradient-to-tr from-indigo-200 to-indigo-400 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Comprar Ahora con MercadoPago
            </Button>
        </div>        
      </form>
    </div>
  )
}
