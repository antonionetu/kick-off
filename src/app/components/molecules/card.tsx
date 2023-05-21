import Image from "next/image"
import SubTitle from "../atoms/subtitle"
import Title from "../atoms/title"
import Link from "next/link"

interface CardProps {
   title: string
   subtitle: string
   imageSrc: string
   imageAlt: string
   href: string
}

const Card = (props: CardProps) => {
   const { title, subtitle, imageSrc, imageAlt, href } = props

   return (
      <div className="bg-white z-40">
         <div className="flex flex-col items-center shadow-lg p-8 rounded-md">
            <Image src={imageSrc} alt={imageAlt} width={200} height={200} />
            <div className="space-y-8">
               <div className="space-y-4">
                  <Title tag="h3">{title}</Title>
                  <SubTitle tag="p">{subtitle}</SubTitle>
               </div>
               <Link
                  className="text-blue-400 flex items-center gap-2 hover:gap-4 duration-150"
                  href={href}
               >
                  Saiba mais
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                     />
                  </svg>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Card
