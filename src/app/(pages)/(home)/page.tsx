import HeroSection from "@/app/components/organisms/heroSection"
import FirstHomeGrid from "@/app/components/molecules/grids/home"

export default function Home() {
   return (
      <>
         <div className="pt-16" />
         <FirstHomeGrid />
         <HeroSection
            title="Teste do Kick off"
            subtitle="Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off!"
            buttonLabel="Saiba mais"
            buttonOnClick={console.log("Teste do Kick off")}
            image="/images/launchig-starship.svg"
            imageAlt="Imagem de um foguete"
         />
      </>
   )
}
