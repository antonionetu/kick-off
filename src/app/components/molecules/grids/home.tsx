import Grid from "../../atoms/grid"
import "@/style/animations/bouncing.css"

const FirstHomeGrid = () => {
   return (
      <span>
         <div className="absolute left-4 top-64 bouncing">
            <Grid />
         </div>
         <div className="absolute right-16 bottom-64 bouncing">
            <Grid />
         </div>
         <div className="absolute right-1/3 bottom-12 bouncing">
            <Grid />
         </div>
      </span>
   )
}

export default FirstHomeGrid
