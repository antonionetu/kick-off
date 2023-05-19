import { ReactNode } from "react"

interface SubTitleProps {
   children: ReactNode
   tag?: keyof JSX.IntrinsicElements
}

const SubTitle = ({ children, tag = "p" }: SubTitleProps) => {
   const TagComponent = tag

   return (
      <TagComponent className="text-xl font-medium text-gray-400">
         {children}
      </TagComponent>
   )
}

export default SubTitle
