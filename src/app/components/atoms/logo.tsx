interface LogoProps {
   secondary?: boolean
}

const Logo = ({ secondary }: LogoProps) => {
   const logoBackground = secondary ? "bg-white" : "bg-blue-500"
   const logoTextColor = secondary ? "text-blue-500" : "text-white"
   const logoNameColor = secondary ? "text-white" : "text-black-500"

   return (
      <div className="flex items-center gap-2">
         <div
            className={`${logoBackground} w-16 h-16 rounded-full flex items-center justify-center`}
         >
            <span className={`${logoTextColor} text-4xl font-bold`}>K</span>
         </div>
         <p className={`${logoNameColor} text-4xl font-extrabold`}>Kick off</p>
      </div>
   )
}

export default Logo
