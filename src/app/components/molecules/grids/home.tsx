import Grid from "../../atoms/grid"

const FirstHomeGrid = () => {
   return (
      <span>
         <div className="absolute left-4 top-64">
            <Grid />
         </div>
         <div className="absolute right-16 bottom-64">
            <Grid />
         </div>
         <div className="absolute right-1/3 bottom-12">
            <Grid />
         </div>
      </span>
   )
}

export default FirstHomeGrid
