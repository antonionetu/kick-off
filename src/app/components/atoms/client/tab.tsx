import { motion } from "framer-motion"
import Image from "next/image"

interface TabProps {
   item: { label: string; icon: string }
   selectedTab: string
   setSelectedTab: (name: string) => void
}

const Tab = ({ item, selectedTab, setSelectedTab }: TabProps) => {
   const isSelected = item.label === selectedTab && "bg-slate-200"

   return (
      <li
         className={`flex flex-row items-center gap-4 w-full py-4 pr-16 pl-2 ${isSelected} border-2 hover:bg-slate-200 duration-150 cursor-pointer`}
         onClick={() => setSelectedTab(item.label)}
      >
         <Image
            src={item.icon}
            alt={`ícone de ${item.label}`}
            width={50}
            height={50}
         />
         <p className="font-bold text-xl">{item.label}</p>
         {item.label === selectedTab ? (
            <motion.div className="underline" layoutId="underline" />
         ) : null}
      </li>
   )
}

export default Tab
