"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

import "@/style/animations/bouncing.css"

interface AccordionProps {
   text: string
   imageSrc: string
   altImageSrc: string
}

const Accordion = (props: AccordionProps) => {
   const [isOpen, setIsOpen] = useState(false)
   const { text, imageSrc, altImageSrc } = props

   const handleIsOpen = isOpen
      ? "w-[400px] shadow-md"
      : "w-[100px]"

   return (
      <motion.div
         layout
         data-isOpen={isOpen}
         initial={{ borderRadius: 50 }}
         className={`${handleIsOpen} h-[200px] flex justify-around items-center cursor-pointer`}
         onClick={() => setIsOpen(!isOpen)}
      >
         <Image src={imageSrc} alt={altImageSrc} width={100} height={100} />
         <p className={`${!isOpen && "hidden"}`}>{text}</p>
      </motion.div>
   )
}

export default Accordion
