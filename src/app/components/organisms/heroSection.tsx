import Image from "next/image"
import TitleSubtitleAndButton from "../molecules/titleSubtitleAndButton"
import { reverse } from "dns"

interface HeroProps {
   title: string
   subtitle: string
   buttonLabel: string
   buttonOnClick: void
   image: string
   imageAlt: string
   reverse?: boolean
}

const HeroSection = (props: HeroProps) => {
   return (
      <section
         className={`flex ${
            props.reverse && "flex-row-reverse"
         } justify-between items-center my-auto h-screen`}
      >
         <TitleSubtitleAndButton
            title={props.title}
            subtitle={props.subtitle}
            buttonLabel={props.buttonLabel}
            buttonOnClick={props.buttonOnClick}
         />
         <Image
            src={props.image}
            alt={props.imageAlt}
            width={500}
            height={300}
            className="mx-32 z-20"
         />
      </section>
   )
}

export default HeroSection
