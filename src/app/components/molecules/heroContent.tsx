import ButtonLink from "../atoms/buttonLink"
import SubTitle from "../atoms/subtitle"
import Title from "../atoms/title"

interface TitleSubtitleAndButtonProps {
   title: string
   subtitle: string
   buttonLabel: string
   hrefButton: string
}

const HeroContent = (props: TitleSubtitleAndButtonProps) => {
   const { title, subtitle, buttonLabel, hrefButton } = props

   return (
      <div className="w-1/2 space-y-8 p-32">
         <Title tag="h1">{title}</Title>
         <SubTitle tag="p">{subtitle}</SubTitle>
         <ButtonLink href={hrefButton}>{buttonLabel}</ButtonLink>
      </div>
   )
}

export default HeroContent
