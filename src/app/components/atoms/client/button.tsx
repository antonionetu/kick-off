"use client"

import { ReactNode } from "react"

interface ButtonProps {
   children: ReactNode
   onClick: any
}

const Button = ({ children, onClick }: ButtonProps) => {
   return (
      <>
         <button
            className="px-8 py-2 mt-4 text-white font-bold bg-blue-500 rounded-full duration-150 hover:bg-blue-600"
            onClick={() => onClick()}
         >
            {children}
         </button>
      </>
   )
}

export default Button
