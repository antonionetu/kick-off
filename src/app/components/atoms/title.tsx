import { ReactNode } from "react"

interface TitleProps {
   children: ReactNode
   tag?: keyof JSX.IntrinsicElements
}

const Title = ({ children, tag = "h1" }: TitleProps) => {
   const TagComponent = tag

   return (
      <TagComponent className="text-4xl font-black text-gray-900">
         {children}
      </TagComponent>
   )
}

export default Title
