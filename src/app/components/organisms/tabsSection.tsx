"use client"

import { useState } from "react"

import MainSectionTab from "../atoms/client/mainSectionTab"
import NavigationTab from "../molecules/client/navigationTab"

const TabsSection = () => {
   const [selectedTab, setSelectedTab] = useState("HTML")

   return (
      <>
         <NavigationTab
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
         />
         <MainSectionTab selectedTab={selectedTab} />
      </>
   )
}

export default TabsSection
