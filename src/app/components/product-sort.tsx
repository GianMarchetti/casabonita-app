"use client"

import { useRouter } from "next/navigation"
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import { ProductFilters } from "../components/product-filters"

const sortOptions = [
  { name: "Más nuevos", value: "/?date=desc" },
  { name: "Precio, mínimo a máximo", value: "/?price=asc" },
  { name: "Precio, máximo a mínimo", value: "/?price=desc" },
]

export function ProductSort() {
  const router = useRouter()

  return (
    <div className="flex items-center">
      <Select onValueChange={(value) => router.replace(value)}>
        <SelectTrigger className="sm:w-[180px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent className="bg-pink-100">
          {sortOptions.map(option => (
            <SelectItem key={option.name} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Sheet>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Categorias</SheetTitle>
            <SheetDescription>
              Ordená la busqueda de tus productos usando las opciones debajo.
            </SheetDescription>
          </SheetHeader>
          <ProductFilters />
        </SheetContent>
        <SheetTrigger className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
          <span className="sr-only">Filters</span>
          <AdjustmentsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
        </SheetTrigger>
      </Sheet>
    </div>
  )
}
