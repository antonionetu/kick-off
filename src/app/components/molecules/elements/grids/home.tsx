import Grid from "../../../atoms/grid"
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

const SecondHomeGrid = () => {
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

const ThirdHomeGrid = () => {
   return (
      <span>
         <div className="absolute left-16 top-32 bouncing">
            <Grid />
         </div>
         <div className="absolute right-16 bottom-32 bouncing">
            <Grid />
         </div>
      </span>
   )
}

export { FirstHomeGrid, SecondHomeGrid, ThirdHomeGrid }
