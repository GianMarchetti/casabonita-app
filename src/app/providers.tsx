'use client'

import "./globals.css"
import {NextUIProvider} from '@nextui-org/react'
import { CartProvider } from "use-shopping-cart"
import { Toaster } from "./components/ui/toaster"
import { TailwindIndicator } from "./components/tailwind-indicator"


interface Props {
  children: React.ReactNode
}
export function Providers({ children }: Props) {
  return (
    <CartProvider
    currency='ARS'
    shouldPersist
    cartMode='checkout-session'
    stripe={process.env.NEXT_PUBLIC_MP_TOKEN!}
    >
      <NextUIProvider>
        <Toaster />
        {children}
      <TailwindIndicator />

      </NextUIProvider>
    </CartProvider>
  )
}



// import { Toaster } from "@/components/ui/toaster"
// import { TailwindIndicator } from "@/components/tailwind-indicator"
// import { ThemeProvider } from "@/components/theme-provider"

//     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//       <Toaster />
//     {children}
//     <TailwindIndicator />
//     </ThemeProvider>
