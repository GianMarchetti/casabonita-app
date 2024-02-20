"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "../../../sanity/lib/image"
import {  XMarkIcon, PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { Product } from "use-shopping-cart/core"

import { shimmer, toBase64 } from "../../../lib/image"
import { getSizeName } from "../../../lib/utils"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast, useToast } from "./ui/use-toast"
import { CartItemsEmpty } from "./cart-items-empty"
import { product } from "../../../sanity/schemas/product-schema"
import { ArrowLeft, MoveLeft } from "lucide-react"


export function CartItems() {
  const { cartDetails, removeItem, setItemQuantity } = useShoppingCart()
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product)
  const {toast} = useToast()

  function removeCartItem(product: Product) {
    removeItem(product._id)
    toast({
      title: `${product.name} removed`,
      description: " Product removed from cart",
      variant: "destructive"
    })
  }

  if (cartItems.length === 0) return <CartItemsEmpty />

  return (
    <ul
      role="list"
      className="relative float-none w-full h-fit top-0 divide-y divide-gray-200 border-y border-gray-200 rounded-md dark:divide-gray-500 dark:border-gray-500 text-black lg:w-fit p-4"
    >
      <Link href="/components/products" className="h-fit w-fit flex items-center gap-2 p-2 text-sm font-medium bg-amber-100 lg:bg-transparent hover:bg-amber-100 sm:bg-amber-100 text-black rounded-lg">
        <ArrowLeft className="h-5 w-5 " aria-hidden="true" />
        <p>Volver</p>
      </Link>
      {cartItems.map((product, productIdx) => (
        <li key={product._id} className="flex h-fit py-6 sm:py-10">
          <div className="shrink-0">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(200, 200))}`}
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link href={`/components/products/${product.slug}`} className="font-medium">
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">{formatCurrencyString({ value: product.price, currency: product.currency})}</p>
               
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, {product.name}
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-16"
                  min={1}
                  max={10}
                  value={product.quantity}
                  onChange={event => setItemQuantity(product._id, Number(event.target.value))}
                />
                <div className="absolute right-0 top-0">
                  <Button
                    variant="ghost"
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={() => removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </li>
      ))} 

      <Link href="/components/products" className="mt-2">
        <Button size="sm" className="relative bg-green-500 hover:bg-green-400">
          <PlusIcon className="mr-2 h-4 w-4" />
          Agrega Productos
        </Button>
      </Link>

    </ul>
  )
}
