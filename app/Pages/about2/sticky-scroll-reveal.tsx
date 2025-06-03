"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="p-10">
      {/* Topic/Title Section */}
      <div className="mb-8 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold text-center"
        >
          Explore Our <span className="text-purple">Features</span>
        </motion.h1>
        <p className="text-lg text-slate-400 mt-4">
          Discover how our platform can enhance your workflow and productivity.
        </p>
      </div>

      <motion.div
        className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 scrollbar-none bg-slate-900"
        ref={ref}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>

        <div
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>

      {/* Dockyard Software YouTube Video Section */}
      <div className="my-16 p-10">
        <h2 className="text-4xl font-semibold text-center">
          <span className="text-purple">About</span> Dockyard Software
        </h2>
        <div className="mt-6 flex justify-center">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/cGrq59wN9Ok" // Replace with the actual YouTube video URL
            title="Dockyard Software Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
// "use client";
// import React, { useRef, useState } from "react";
// import { useMotionValueEvent, useScroll } from "framer-motion";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const StickyScroll = ({
//   content,
//   contentClassName,
// }: {
//   content: {
//     title: string;
//     description: string;
//     content?: React.ReactNode | any;
//   }[];
//   contentClassName?: string;
// }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const ref = useRef<any>(null);
//   const { scrollYProgress } = useScroll({
//     container: ref,
//     offset: ["start start", "end start"],
//   });
//   const cardLength = content.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     console.log("Scroll Progress:", latest);
//     const cardsBreakpoints = content.map((_, index) => index / cardLength);
//     const closestBreakpointIndex = cardsBreakpoints.reduce(
//       (acc, breakpoint, index) => {
//         const distance = Math.abs(latest - breakpoint);
//         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
//           return index;
//         }
//         return acc;
//       },
//       0
//     );
//     setActiveCard(closestBreakpointIndex);
//   });

//   return (
//     <div className="p-6 sm:p-10">
//       {/* Topic/Title Section */}
//       <div className="mb-6 sm:mb-8 text-center">
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl sm:text-4xl font-semibold"
//         >
//           Explore Our <span className="text-purple">Features</span>
//         </motion.h1>
//         <p className="text-md sm:text-lg text-slate-400 mt-3 sm:mt-4">
//           Discover how our platform can enhance your workflow and productivity.
//         </p>
//       </div>

//       <motion.div
//         className="h-[30rem] overflow-y-auto flex flex-col lg:flex-row justify-center relative space-y-6 lg:space-y-0 lg:space-x-10 rounded-md p-6 sm:p-10 bg-slate-900"
//         ref={ref}
//         style={{
//           scrollbarWidth: "auto",
//           msOverflowStyle: "auto",
//         }}
//       >
//         <div className="flex flex-col items-start px-4 min-h-[50rem]">
//           <div className="max-w-xl">
//             {content.map((item, index) => (
//               <div key={item.title + index} className="my-10 sm:my-20">
//                 <motion.h2
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: activeCard === index ? 1 : 0.3 }}
//                   className="text-xl sm:text-2xl font-bold text-slate-100"
//                 >
//                   {item.title}
//                 </motion.h2>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: activeCard === index ? 1 : 0.3 }}
//                   className="text-md sm:text-lg text-slate-300 max-w-sm mt-6 sm:mt-10"
//                 >
//                   {item.description}
//                 </motion.p>
//               </div>
//             ))}
//             <div className="h-20 sm:h-40" />
//           </div>
//         </div>

//         <div
//           className={cn(
//             "hidden lg:block h-60 w-80 rounded-md bg-white overflow-hidden",
//             contentClassName
//           )}
//         >
//           {content[activeCard].content ?? null}
//         </div>
//       </motion.div>

//       {/* Dockyard Software YouTube Video Section */}
//       <div className="my-12 sm:my-16 p-6 sm:p-10">
//         <h2 className="text-3xl sm:text-4xl font-semibold text-center">
//           <span className="text-purple">About</span> Dockyard Software
//         </h2>
//         <div className="mt-6 flex justify-center">
//           <iframe
//             className="w-full sm:w-[800px] h-56 sm:h-[450px] rounded-md"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with the actual YouTube video URL
//             title="Dockyard Software Overview"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };
