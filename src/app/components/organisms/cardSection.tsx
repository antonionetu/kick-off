import Link from "next/link"
import Card from "../molecules/card"
import ButtonLink from "../atoms/buttonLink"

interface CardSectionProps {
   titles: string[]
   subtitles: string[]
   imageSrcs: string[]
   imageAlts: string[]
   hrefs?: string[]
}

const CardSection = (props: CardSectionProps) => {
   const { titles, subtitles, imageSrcs, imageAlts, hrefs } = props

   return (
      <div className="flex flex-col items-center gap-8">
         <div className="flex gap-x-16 mx-32">
            {titles.map((title, index) => (
               <div
                  key={`card_${index}`}
                  className="flex flex-col items-center space-y-4"
               >
                  <Card
                     title={title}
                     subtitle={subtitles[index]}
                     imageSrc={imageSrcs[index]}
                     imageAlt={imageAlts[index]}
                     href="/"
                  />
               </div>
            ))}
         </div>
         <ButtonLink href="/">Ver tudo</ButtonLink>
      </div>
   )
}

export default CardSection
