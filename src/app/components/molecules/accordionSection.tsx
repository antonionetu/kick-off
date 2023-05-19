import Accordion from "../atoms/client/accordion"
import "@/style/animations/bouncing.css"
import Title from "../atoms/title"
import SubTitle from "../atoms/subtitle"
import ButtonLink from "../atoms/buttonLink"

interface AccordionSectionProps {
   texts: string[]
   imageSrcs: string[]
   altImageSrcs: string[]
}

const AccordionSection = (props: AccordionSectionProps) => {
   const { texts, imageSrcs, altImageSrcs } = props

   return (
      <>
         <div className="text-center space-y-4 w-2/5 z-20">
            <Title tag="h2">Nossos serviços</Title>
            <SubTitle tag="p">
               teste kick off teste kick off teste kick off teste kick off teste
               kick off teste kick off teste kick off!
            </SubTitle>
         </div>
         <div className="flex justify-center items-center gap-24 z-20">
            {texts.map((textItem, index) => (
               <div key={`accordion_${index}`}>
                  <Accordion
                     imageSrc={imageSrcs[index]}
                     text={textItem}
                     altImageSrc={altImageSrcs[index]}
                  />
               </div>
            ))}
         </div>
         <ButtonLink href="/">Saber mais</ButtonLink>
      </>
   )
}

export default AccordionSection
