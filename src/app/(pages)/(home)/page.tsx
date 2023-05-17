import HeroSection from "@/app/components/organisms/heroSection"
import FirstHomeGrid from "@/app/components/molecules/grids/home"
import AccordionSection from "@/app/components/molecules/accordionSection"

export default function Home() {
   return (
      <>
         <div className="pt-16" />
         <FirstHomeGrid />

         <HeroSection
            title="Teste do Kick off"
            subtitle="Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off!"
            buttonLabel="Saiba mais"
            href="/"
            image="/images/launchig-starship.svg"
            imageAlt="Imagem de um foguete"
         />

         <AccordionSection
            texts={[
               "Teste do Kick off Teste do Kick Teste do Kick off Teste do Kick !",
               "Teste do Kick off Teste do Kick Teste do Kick off Teste do Kick !",
               "Teste do Kick off Teste do Kick Teste do Kick off Teste do Kick !",
            ]}
            imageSrcs={[
               "/images/code-monitor.svg",
               "/images/code-monitor.svg",
               "/images/code-monitor.svg",
            ]}
            altImageSrcs={[
               "Imagem de um monitor com código",
               "Imagem de um monitor com código",
               "Imagem de um monitor com código",
            ]}
         />
      </>
   )
}
