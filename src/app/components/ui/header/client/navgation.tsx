"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
   const pathname = usePathname()
   const isCurrentPath = (path: string) => pathname === path

   const getClassForNavItem = (path: string) =>
      isCurrentPath(path)
         ? "font-black text-2xl"
         : "font-medium text-gray-400 text-2xl"

   return (
      <nav>
         <ul className="hidden md:flex gap-8">
            <li className={`${getClassForNavItem("/")}`}>
               <Link
                  href="/"
                  className="p-4 rounded-md duration-300 hover:text-gray-900 hover:bg-white/25"
               >
                  Início
               </Link>
            </li>

            <li className={`${getClassForNavItem("/sobre")}`}>
               <Link
                  href="/"
                  className="p-4 rounded-md duration-300 hover:text-gray-900 hover:bg-white/25"
               >
                  Sobre
               </Link>
            </li>

            <li className={`${getClassForNavItem("/cursos")}`}>
               <Link
                  href="/"
                  className="p-4 rounded-md duration-300 hover:text-gray-900 hover:bg-white/25"
               >
                  Cursos
               </Link>
            </li>

            <li className={`${getClassForNavItem("/contato")}`}>
               <Link
                  href="/"
                  className="p-4 rounded-md duration-300 hover:text-gray-900 hover:bg-white/25"
               >
                  Contato
               </Link>
            </li>
         </ul>
      </nav>
   )
}

export default Navigation
