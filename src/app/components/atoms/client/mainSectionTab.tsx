import { motion, AnimatePresence } from "framer-motion"

const tabContents = [
   {
      label: "HTML",
      content: "HTML content",
   },
   {
      label: "CSS",
      content: "CSS content",
   },
   {
      label: "JS",
      content: "JS content",
   },
]

const MainSectionTab = ({ selectedTab }: { selectedTab: string }) => {
   return (
      <div className="p-16">
         <AnimatePresence mode="wait">
            <motion.div
               key={selectedTab ? selectedTab : "empty"}
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -10, opacity: 0 }}
               transition={{ duration: 0.2 }}
            >
               {tabContents.map(
                  (item, index) =>
                     item.label === selectedTab && (
                        <div key={index}>{item.content}</div>
                     )
               )}
            </motion.div>
         </AnimatePresence>
      </div>
   )
}

export default MainSectionTab
