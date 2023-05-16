import "@/style/globals.css"
import { Poppins } from "next/font/google"
import Header from "./components/ui/header"

export const metadata = {
   title: "Kick off",
   description: "Protótipo do kick off",
}

interface LayoutProps {
   children: React.ReactNode
}

const PoppinsFont = Poppins({
   weight: ["200", "400", "800"],
   style: ["normal"],
   subsets: ["latin-ext"],
})

export default function RootLayout({ children }: LayoutProps) {
   return (
      <html lang="pt-BR" className={PoppinsFont.className}>
         <body>
            <Header />
            <main>{children}</main>
         </body>
      </html>
   )
}
