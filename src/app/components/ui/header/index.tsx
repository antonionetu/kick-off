import Navigation from "./client/navgation"

const Header = () => {
   return (
      <header className="flex fixed w-full p-8 md:px-32 py-16 items-center md:justify-between  backdrop-blur-sm bg-white/0 z-50">
         <div className="flex items-center gap-2">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
               <span className="text-white text-2xl md:text-4xl font-bold">
                  K
               </span>
            </div>
            <p className="text-2xl md:text-4xl font-extrabold">Kick off</p>
         </div>
         <Navigation />
      </header>
   )
}

export default Header
