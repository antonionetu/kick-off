import Button from "../atoms/client/button"
import SubTitle from "../atoms/subtitle"
import Title from "../atoms/title"

interface TitleSubtitleAndButtonProps {
   title: string
   subtitle: string
   buttonLabel: string
   buttonOnClick: void
}

const TitleSubtitleAndButton = (props: TitleSubtitleAndButtonProps) => {
   const { title, subtitle, buttonLabel, buttonOnClick } = props

   return (
      <div className="w-1/2 space-y-8 p-32">
         <Title>{title}</Title>
         <SubTitle>{subtitle}</SubTitle>
         <Button onClick={buttonOnClick}>{buttonLabel}</Button>
      </div>
   )
}

export default TitleSubtitleAndButton
