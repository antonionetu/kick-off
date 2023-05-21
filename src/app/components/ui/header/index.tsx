import Logo from "../../atoms/logo"
import Navigation from "./client/navgation"

const Header = () => {
   return (
      <header className="flex fixed w-full md:px-32 pt-16 pb-2 items-center md:justify-between backdrop-blur-sm bg-white/0 z-50">
         <Logo />
         <Navigation />
      </header>
   )
}

export default Header
