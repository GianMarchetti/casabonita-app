"use client"

import Link from "next/link"
import {  XCircleIcon, PlusIcon } from '@heroicons/react/24/solid'

import { Button } from "./ui/button"

export function CartItemsEmpty() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <XCircleIcon className="h-10 w-10 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">No has agregado productos</h3>
        <p className="mb-4 mt-2 text-sm text-emerald-500">
          Agrega productos a tu carrito.
        </p>
        <Link href="/components/products" className="mt-2">
          <Button size="sm" className="relative bg-green-500 hover:bg-green-400">
            <PlusIcon className="mr-2 h-4 w-4" />
            Agrega Productos
          </Button>
        </Link>
      </div>
    </div>
  )
}
