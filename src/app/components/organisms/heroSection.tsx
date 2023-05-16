import Image from "next/image"
import TitleSubtitleAndButton from "../molecules/titleSubtitleAndButton"

interface HeroProps {
   title: string
   subtitle: string
   buttonLabel: string
   href: string
   image: string
   imageAlt: string
   reverse?: boolean
}

const HeroSection = (props: HeroProps) => {
   const { title, subtitle, buttonLabel, href, image, imageAlt } = props

   return (
      <section
         className={`flex ${
            props.reverse && "flex-row-reverse"
         } justify-between items-center my-auto h-screen`}
      >
         <TitleSubtitleAndButton
            title={title}
            subtitle={subtitle}
            buttonLabel={buttonLabel}
            hrefButton={href}
         />
         <Image
            src={image}
            alt={imageAlt}
            width={500}
            height={300}
            className="mx-32 z-20"
         />
      </section>
   )
}

export default HeroSection
