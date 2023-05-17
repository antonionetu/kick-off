import Tab from "../../atoms/client/tab"

const tabs = [
   { label: "HTML", icon: "/icons/html.png" },
   { label: "CSS", icon: "/icons/css.png" },
   { label: "JS", icon: "/icons/js.png" },
]

interface NavigationTabProps {
   selectedTab: string
   setSelectedTab: (name: string) => void
}

const NavigationTab = ({ selectedTab, setSelectedTab }: NavigationTabProps) => {
   return (
      <nav>
         <ul className="flex w-fit border-4">
            {tabs.map((item, index) => (
               <Tab
                  key={index}
                  item={item}
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
               />
            ))}
         </ul>
      </nav>
   )
}

export default NavigationTab
