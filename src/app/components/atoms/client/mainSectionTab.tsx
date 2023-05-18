import { motion, AnimatePresence } from "framer-motion"

const tabContents = [
   {
      label: "HTML",
      content: `<!DOCTYPE html>  
<html lang="pt-br">
   <head>
      <title>Kick off</title>
      <meta charset="utf-8">
   </head>
   <body>
      <main>
      <h1>Você consegue!</h1>
      </main>
   </body>
</html>`,
   },
   {
      label: "CSS",
      content: `body {
   background-color: black;
   color: white;
}

h1 {
   font-family: Poppins;
}
      `,
   },
   {
      label: "JS",
      content: `const titulo = document.querySelector("h1")

titulo.addEventListener("click", function () {
   alert("Pois é... Você mesmo!");
});`,
   },
]

const MainSectionTab = ({ selectedTab }: { selectedTab: string }) => {
   return (
      <div className="h-[50vh] p-8">
         <AnimatePresence mode="wait">
            <motion.div
               key={selectedTab ? selectedTab : "empty"}
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -10, opacity: 0 }}
               transition={{ duration: 0.2 }}
            >
               <pre>
                  <code className="language-markup">
                     {tabContents.map(
                        (item, index) =>
                           item.label === selectedTab && (
                              <div key={index}>{item.content}</div>
                           )
                     )}
                  </code>
               </pre>
            </motion.div>
         </AnimatePresence>
      </div>
   )
}

export default MainSectionTab
