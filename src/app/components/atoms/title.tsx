import { ReactNode } from "react"

const Title = ({ children }: { children: ReactNode }) => {
   return <h1 className="text-4xl font-black text-gray-900">{children}</h1>
}

export default Title
