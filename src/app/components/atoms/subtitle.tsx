import { ReactNode } from "react"

const SubTitle = ({ children }: { children: ReactNode }) => {
   return <h2 className="text-xl font-medium text-gray-600">{children}</h2>
}

export default SubTitle
