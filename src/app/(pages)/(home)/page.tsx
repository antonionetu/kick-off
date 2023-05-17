import HeroSection from "@/app/components/organisms/heroSection"
import FirstHomeGrid from "@/app/components/molecules/elements/grids/home"
import AccordionSection from "@/app/components/molecules/accordionSection"
import FirstHomeBlob from "@/app/components/molecules/elements/blobs/home"

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

         <section className="flex flex-col justify-center items-center space-y-8 h-[75vh]">
            <FirstHomeBlob />
            <AccordionSection
               texts={[
                  "Teste do Kick off Teste do Kick Teste do Kick off Teste do Kick !",
                  "Teste do Kick off Teste do Kick Teste do Kick off Teste do Kick !",
                  "Teste do Kick off Teste do Kick Teste do Kick off Teste do Kick !",
               ]}
               imageSrcs={[
                  "/images/code-monitor.svg",
                  "/images/tin-tin.svg",
                  "/images/help-friend.svg",
               ]}
               altImageSrcs={[
                  "Imagem de um monitor com código",
                  "Imagem de um brinde",
                  "Imagem de duas pessoas estudando e se ajudando",
               ]}
            />
         </section>
      </>
   )
}
