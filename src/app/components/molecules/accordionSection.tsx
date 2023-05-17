import Accordion from "../atoms/client/accordion"
import "@/style/animations/bouncing.css"
import Title from "../atoms/title"
import SubTitle from "../atoms/subtitle"

interface AccordionSectionProps {
   texts: string[]
   imageSrcs: string[]
   altImageSrcs: string[]
}

const AccordionSection = (props: AccordionSectionProps) => {
   const { texts, imageSrcs, altImageSrcs } = props

   return (
      <section className="flex flex-col justify-center items-center space-y-16 h-[75vh]">
         <div className="text-center space-y-4 w-2/5">
            <Title>Nossos serviços</Title>
            <SubTitle>
               teste kick off teste kick off teste kick off teste kick off teste
               kick off teste kick off teste kick off!
            </SubTitle>
         </div>
         <div className="flex justify-center items-center gap-24 ">
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
      </section>
   )
}

export default AccordionSection
