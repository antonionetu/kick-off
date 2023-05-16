"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {
   const pathname = usePathname()
   const isCurrentPath = (path: string) => pathname === path

   const getClassForNavItem = (path: string) =>
      isCurrentPath(path)
         ? "font-black text-2xl xl:text-4xl"
         : "font-medium text-gray-300 duration-150 hover:text-gray-900 text-2xl xl:text-4xl"

   return (
      <nav>
         <ul className="hidden md:flex gap-8">
            <li className={`${getClassForNavItem("/")}`}>
               <Link href="/">Início</Link>
            </li>

            <li className={`${getClassForNavItem("/sobre")}`}>
               <Link href="/">Sobre</Link>
            </li>

            <li className={`${getClassForNavItem("/cursos")}`}>
               <Link href="/">Cursos</Link>
            </li>

            <li className={`${getClassForNavItem("/contato")}`}>
               <Link href="/">Contato</Link>
            </li>
         </ul>
      </nav>
   )
}

export default Navigation
