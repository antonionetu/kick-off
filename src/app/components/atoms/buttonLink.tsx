"use client"

import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
   children: ReactNode
   href: string
}

const ButtonLink = ({ children, href }: ButtonProps) => {
   return (
      <>
         <button className="px-8 py-2 mt-4 text-white font-bold bg-blue-500 rounded-full duration-150 hover:bg-blue-600">
            <Link href={href}>{children}</Link>
         </button>
      </>
   )
}

export default ButtonLink
