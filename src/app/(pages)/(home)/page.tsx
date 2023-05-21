import HeroSection from "@/app/components/organisms/heroSection"
import {
   FirstHomeGrid,
   FourthHomeGrid,
   SecondHomeGrid,
   ThirdHomeGrid,
} from "@/app/components/molecules/elements/grids/home"
import AccordionSection from "@/app/components/molecules/accordionSection"
import FirstHomeBlob from "@/app/components/molecules/elements/blobs/home"
import TabsSection from "@/app/components/organisms/tabsSection"
import CardSection from "@/app/components/organisms/cardSection"

import { mockImagesAlt, mockImagesSrc, mockSubtitles, mockTitles } from "./mock"

export default function Home() {
   return (
      <>
         <section className="relative top-8">
            <FirstHomeGrid />
            <HeroSection
               title="Teste do Kick off"
               subtitle="Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off!"
               buttonLabel="Saiba mais"
               href="/"
               image="/images/launchig-starship.svg"
               imageAlt="Imagem de um foguete"
            />
         </section>

         <section className="flex flex-col justify-center items-center space-y-8 h-[75vh]">
            <FirstHomeBlob />
            <AccordionSection
               texts={mockSubtitles}
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

         <section className="relative">
            <SecondHomeGrid />
            <HeroSection
               title="Teste do Kick off"
               subtitle="Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off!"
               buttonLabel="Saiba mais"
               href="/"
               image="/images/person-studying.svg"
               imageAlt="Imagem uma pessoa estudando"
               reverse
            />
         </section>

         <section className="relative">
            <ThirdHomeGrid />
            <HeroSection
               title="Teste do Kick off"
               subtitle="Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off Teste do Kick off!"
               buttonLabel="Saiba mais"
               href="/"
               image="/images/teacher-and-student.svg"
               imageAlt="Imagem uma pessoa estudando"
            />
         </section>

         <section className="flex flex-col w-fit mx-auto border-4 rounded-md my-4 max-w-[50vw]">
            <TabsSection />
         </section>

         <section className="m-32 relative">
            <FourthHomeGrid />
            <CardSection
               titles={mockTitles}
               subtitles={mockSubtitles}
               imageSrcs={mockImagesSrc}
               imageAlts={mockImagesAlt}
            />
         </section>
      </>
   )
}
