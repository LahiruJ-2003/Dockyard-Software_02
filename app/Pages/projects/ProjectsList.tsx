// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC, useState, useRef } from "react";
// import Image from "next/image";

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0 },
// };

// const ProjectsList: FC = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
//   const projectsRef = useRef<HTMLDivElement>(null);

//   const scrollToSection = (index: number) => {
//     if (projectsRef.current) {
//       const sections = projectsRef.current.querySelectorAll("section");
//       if (sections[index]) {
//         sections[index].scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleNext = () => {
//     if (currentProjectIndex < allProjects.length - 1) {
//       setCurrentProjectIndex((prev) => prev + 1);
//       scrollToSection(currentProjectIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentProjectIndex > 0) {
//       setCurrentProjectIndex((prev) => prev - 1);
//       scrollToSection(currentProjectIndex - 1);
//     }
//   };

//   return (
//     <div ref={projectsRef} className="relative h-screen overflow-hidden">
//       {/* Left Arrow Button */}
//       <button
//         onClick={handlePrevious}
//         className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-50 hover:bg-opacity-80 transition-opacity"
//         disabled={currentProjectIndex === 0}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>

//       {/* Right Arrow Button */}
//       <button
//         onClick={handleNext}
//         className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-50 hover:bg-opacity-80 transition-opacity"
//         disabled={currentProjectIndex === allProjects.length - 1}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>

//       {/* Page Counter */}
//       <div className="fixed top-20 right-10 bg-black text-white px-6 py-3 rounded-full text-lg font-bold z-50">
//         {currentProjectIndex + 1} / {allProjects.length}
//       </div>

//       {allProjects.map((project, index) => (
//         <motion.section
//           key={project.id}
//           className={`h-screen flex flex-col gap-10 items-center justify-center p-6 relative md:flex-row ${
//             index === currentProjectIndex ? "block" : "hidden"
//           }`}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={index === currentProjectIndex ? "visible" : "hidden"}
//           transition={{ duration: 1 }}
//         >
//           <motion.div
//             className="w-full md:w-1/2 flex justify-center items-center"
//             variants={imageVariants}
//             transition={{ duration: 1 }}
//           >
//             {project.img && (
//               <Image
//                 src={project.img}
//                 alt={project.title}
//                 width={500}
//                 height={500}
//                 className="rounded-lg shadow-lg w-full h-auto"
//               />
//             )}
//           </motion.div>

//           <motion.div
//             className="w-full md:w-2/3 flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-lg"
//             variants={contentVariants}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">
//               {project.title}
//             </h1>
//             <h3 className="text-lg text-gray-600 mb-4">
//               {project.secondTitle}
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 mb-4">
//               {[
//                 project.des1,
//                 project.des2,
//                 project.des3,
//                 project.des4,
//                 project.des5,
//                 project.des6,
//               ]
//                 .filter(Boolean)
//                 .map((description, idx) => (
//                   <li key={idx} className="text-gray-800 text-base">
//                     {description}
//                   </li>
//                 ))}
//             </ul>
//             <div className="flex justify-center w-full mt-auto gap-4">
//               {project.icon.map((icon) => (
//                 <motion.div
//                   key={icon.id}
//                   className="w-10 h-10"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Image
//                     src={icon.img}
//                     width={40}
//                     height={40}
//                     alt="Technology Icon"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.section>
//       ))}
//     </div>
//   );
// };

// export default ProjectsList;
// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC, useState, useRef } from "react";
// import Image from "next/image";

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0 },
// };

// const ProjectsList: FC = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
//   const projectsRef = useRef<HTMLDivElement>(null);

//   const scrollToSection = (index: number) => {
//     if (projectsRef.current) {
//       const sections = projectsRef.current.querySelectorAll("section");
//       if (sections[index]) {
//         sections[index].scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleNext = () => {
//     if (currentProjectIndex < allProjects.length - 1) {
//       setCurrentProjectIndex((prev) => prev + 1);
//       scrollToSection(currentProjectIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentProjectIndex > 0) {
//       setCurrentProjectIndex((prev) => prev - 1);
//       scrollToSection(currentProjectIndex - 1);
//     }
//   };

//   return (
//     <div ref={projectsRef} className="relative h-screen w-full overflow-hidden">
//       {/* Navigation Buttons */}
//       <button
//         onClick={handlePrevious}
//         className="fixed left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-50 hover:bg-opacity-80 disabled:opacity-50 border-2 border-white"
//         disabled={currentProjectIndex === 0}
//       >
//         &#8592;
//       </button>

//       <button
//         onClick={handleNext}
//         className="fixed right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-50 hover:bg-opacity-80 disabled:opacity-50 border-2 border-white"
//         disabled={currentProjectIndex === allProjects.length - 1}
//       >
//         &#8594;
//       </button>

//       {/* Page Counter */}
//       <div className="fixed top-10 right-10 bg-black text-white px-4 py-2 rounded-lg text-sm md:text-lg font-bold z-50">
//         {currentProjectIndex + 1} / {allProjects.length}
//       </div>

//       {allProjects.map((project, index) => (
//         <motion.section
//           key={project.id}
//           className={`h-screen flex flex-col gap-6 md:gap-10 items-center justify-center p-4 md:p-10 text-center md:text-left md:flex-row transition-opacity duration-500 ease-in-out ${
//             index === currentProjectIndex ? "block" : "hidden"
//           }`}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={index === currentProjectIndex ? "visible" : "hidden"}
//           transition={{ duration: 1 }}
//         >
//           <motion.div
//             className="w-full md:w-1/2 flex justify-center items-center"
//             variants={imageVariants}
//             transition={{ duration: 1 }}
//           >
//             {project.img && (
//               <Image
//                 src={project.img}
//                 alt={project.title}
//                 width={500}
//                 height={500}
//                 className="rounded-lg shadow-lg max-w-full h-auto"
//               />
//             )}
//           </motion.div>

//           <motion.div
//             className="w-full md:w-2/3 flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-lg max-w-2xl"
//             variants={contentVariants}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-black text-2xl md:text-4xl font-bold mb-3">
//               {project.title}
//             </h1>
//             <h3 className="text-md md:text-lg text-gray-600 mb-3">
//               {project.secondTitle}
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 text-left">
//               {[
//                 project.des1,
//                 project.des2,
//                 project.des3,
//                 project.des4,
//                 project.des5,
//                 project.des6,
//               ]
//                 .filter(Boolean)
//                 .map((description, idx) => (
//                   <li key={idx} className="text-gray-800 text-sm md:text-base">
//                     {description}
//                   </li>
//                 ))}
//             </ul>
//             <div className="flex justify-center md:justify-start w-full mt-4 gap-4">
//               {project.icon.map((icon) => (
//                 <motion.div
//                   key={icon.id}
//                   className="w-8 h-8 md:w-10 md:h-10"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Image
//                     src={icon.img}
//                     width={40}
//                     height={40}
//                     alt="Technology Icon"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.section>
// //       ))}"use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC, useState, useRef } from "react";
// import Image from "next/image";

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0 },
// };

// const ProjectsList: FC = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
//   const projectsRef = useRef<HTMLDivElement>(null);

//   const scrollToSection = (index: number) => {
//     if (projectsRef.current) {
//       const sections = projectsRef.current.querySelectorAll("section");
//       if (sections[index]) {
//         sections[index].scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleNext = () => {
//     if (currentProjectIndex < allProjects.length - 1) {
//       setCurrentProjectIndex((prev) => prev + 1);
//       scrollToSection(currentProjectIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentProjectIndex > 0) {
//       setCurrentProjectIndex((prev) => prev - 1);
//       scrollToSection(currentProjectIndex - 1);
//     }
//   };

//   return (
//     <div ref={projectsRef} className="relative h-screen w-full overflow-hidden">
//       {/* Navigation Buttons */}
//       <button
//         onClick={handlePrevious}
//         className="fixed left-4 sm:left-8 md:left-12 lg:left-16 top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-50 hover:bg-opacity-80 disabled:opacity-50 border-2 border-white"
//         disabled={currentProjectIndex === 0}
//       >
//         &#8592;
//       </button>

//       <button
//         onClick={handleNext}
//         className="fixed right-4 sm:right-8 md:right-12 lg:right-16 top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-50 hover:bg-opacity-80 disabled:opacity-50 border-2 border-white"
//         disabled={currentProjectIndex === allProjects.length - 1}
//       >
//         &#8594;
//       </button>

//       {/* Page Counter */}
//       <div className="fixed top-10 right-10 bg-black text-white px-4 py-2 rounded-lg text-sm md:text-lg font-bold z-50">
//         {currentProjectIndex + 1} / {allProjects.length}
//       </div>

//       {allProjects.map((project, index) => (
//         <motion.section
//           key={project.id}
//           className={`h-screen flex flex-col gap-6 md:gap-10 items-center justify-center p-4 md:p-10 text-center md:text-left md:flex-row transition-opacity duration-500 ease-in-out ${
//             index === currentProjectIndex ? "block" : "hidden"
//           }`}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={index === currentProjectIndex ? "visible" : "hidden"}
//           transition={{ duration: 1 }}
//         >
//           <motion.div
//             className="w-full md:w-1/2 flex justify-center items-center"
//             variants={imageVariants}
//             transition={{ duration: 1 }}
//           >
//             {project.img && (
//               <Image
//                 src={project.img}
//                 alt={project.title}
//                 width={500}
//                 height={500}
//                 className="rounded-lg shadow-lg max-w-full h-auto"
//               />
//             )}
//           </motion.div>

//           <motion.div
//             className="w-full md:w-2/3 flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-lg max-w-2xl"
//             variants={contentVariants}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-black text-2xl md:text-4xl font-bold mb-3">
//               {project.title}
//             </h1>
//             <h3 className="text-md md:text-lg text-gray-600 mb-3">
//               {project.secondTitle}
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 text-left">
//               {[
//                 project.des1,
//                 project.des2,
//                 project.des3,
//                 project.des4,
//                 project.des5,
//                 project.des6,
//               ]
//                 .filter(Boolean)
//                 .map((description, idx) => (
//                   <li key={idx} className="text-gray-800 text-sm md:text-base">
//                     {description}
//                   </li>
//                 ))}
//             </ul>
//             <div className="flex justify-center md:justify-start w-full mt-4 gap-4">
//               {project.icon.map((icon) => (
//                 <motion.div
//                   key={icon.id}
//                   className="w-8 h-8 md:w-10 md:h-10"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* <Image
//                     src={icon.img}
//                     width={40}
//                     height={40}
//                     alt="Technology Icon"
//                   /> */}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.section>
//       ))}
//     </div>
//   );
// };

// export default ProjectsList;

//     </div>
//   );
// };

// export default ProjectsList;
// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC, useState, useRef } from "react";
// import Image from "next/image";

// // Animation Variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 },
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0 },
// };

// const ProjectsList: FC = () => {
//   const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
//   const projectsRef = useRef<HTMLDivElement>(null);

//   const scrollToSection = (index: number) => {
//     if (projectsRef.current) {
//       const sections = projectsRef.current.querySelectorAll("section");
//       if (sections[index]) {
//         sections[index].scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleNext = () => {
//     if (currentProjectIndex < allProjects.length - 1) {
//       setCurrentProjectIndex((prev) => prev + 1);
//       scrollToSection(currentProjectIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentProjectIndex > 0) {
//       setCurrentProjectIndex((prev) => prev - 1);
//       scrollToSection(currentProjectIndex - 1);
//     }
//   };

//   return (
//     <div ref={projectsRef} className="relative h-screen w-full overflow-hidden">
//       {/* Navigation Buttons */}
//       <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 z-50">
//         {/* Previous Button */}
//         <button
//           onClick={handlePrevious}
//           className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-80 disabled:opacity-50 border-2 border-white"
//           disabled={currentProjectIndex === 0}
//         >
//           &#8592;
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={handleNext}
//           className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-80 disabled:opacity-50 border-2 border-white"
//           disabled={currentProjectIndex === allProjects.length - 1}
//         >
//           &#8594;
//         </button>
//       </div>

//       {/* Page Counter */}
//       <div className="fixed top-10 right-10 bg-black text-white px-4 py-2 rounded-lg text-sm md:text-lg font-bold z-50">
//         {currentProjectIndex + 1} / {allProjects.length}
//       </div>

//       {allProjects.map((project, index) => (
//         <motion.section
//           key={project.id}
//           className={`h-screen flex flex-col gap-6 md:gap-10 items-center justify-center p-4 md:p-10 text-center md:text-left md:flex-row transition-opacity duration-500 ease-in-out ${
//             index === currentProjectIndex ? "block" : "hidden"
//           }`}
//           variants={sectionVariants}
//           initial="hidden"
//           animate={index === currentProjectIndex ? "visible" : "hidden"}
//           transition={{ duration: 1 }}
//         >
//           <motion.div
//             className="w-full md:w-1/2 flex justify-center items-center"
//             variants={imageVariants}
//             transition={{ duration: 1 }}
//           >
//             {project.img && (
//               <Image
//                 src={project.img}
//                 alt={project.title}
//                 width={500}
//                 height={500}
//                 className="rounded-lg shadow-lg max-w-full h-auto"
//               />
//             )}
//           </motion.div>

//           <motion.div
//             className="w-full md:w-2/3 flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-lg max-w-2xl"
//             variants={contentVariants}
//             transition={{ duration: 1 }}
//           >
//             <h1 className="text-black text-2xl md:text-4xl font-bold mb-3">
//               {project.title}
//             </h1>
//             <h3 className="text-md md:text-lg text-gray-600 mb-3">
//               {project.secondTitle}
//             </h3>
//             <ul className="list-disc pl-5 space-y-2 text-left">
//               {[
//                 project.des1,
//                 project.des2,
//                 project.des3,
//                 project.des4,
//                 project.des5,
//                 project.des6,
//               ]
//                 .filter(Boolean)
//                 .map((description, idx) => (
//                   <li key={idx} className="text-gray-800 text-sm md:text-base">
//                     {description}
//                   </li>
//                 ))}
//             </ul>
//             <div className="flex justify-center md:justify-start w-full mt-4 gap-4">
//               {project.icon.map((icon) => (
//                 <motion.div
//                   key={icon.id}
//                   className="w-8 h-8 md:w-10 md:h-10"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* <Image
//                     src={icon.img}
//                     width={40}
//                     height={40}
//                     alt="Technology Icon"
//                   /> */}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.section>
//       ))}
//     </div>
//   );
// };

// export default ProjectsList;
"use client";
import { allProjects } from "@/data/index";
import { motion } from "framer-motion";
import { FC, useState, useRef } from "react";
import Image from "next/image";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const imageVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsList: FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    if (projectsRef.current) {
      const sections = projectsRef.current.querySelectorAll("section");
      if (sections[index]) {
        sections[index].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNext = () => {
    if (currentProjectIndex < allProjects.length - 1) {
      setCurrentProjectIndex((prev) => prev + 1);
      scrollToSection(currentProjectIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex((prev) => prev - 1);
      scrollToSection(currentProjectIndex - 1);
    }
  };

  return (
    <div ref={projectsRef} className="relative h-screen w-full overflow-hidden">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 z-50">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-80 disabled:opacity-50 border-2 border-white"
          disabled={currentProjectIndex === 0}
        >
          &#8592;
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-80 disabled:opacity-50 border-2 border-white"
          disabled={currentProjectIndex === allProjects.length - 1}
        >
          &#8594;
        </button>
      </div>

      {/* Page Counter */}
      <div className="fixed top-10 right-10 bg-black text-white px-4 py-2 rounded-lg text-sm md:text-lg font-bold z-50">
        {currentProjectIndex + 1} / {allProjects.length}
      </div>

      {allProjects.map((project, index) => (
        <motion.section
          key={project.id}
          className={`h-screen flex flex-col gap-6 md:gap-10 items-center justify-center p-4 md:p-10 text-center md:text-left md:flex-row transition-opacity duration-500 ease-in-out ${
            index === currentProjectIndex ? "block" : "hidden"
          }`}
          variants={sectionVariants}
          initial="hidden"
          animate={index === currentProjectIndex ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            variants={imageVariants}
            transition={{ duration: 1 }}
          >
            {project.img && (
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={500}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            )}
          </motion.div>

          <motion.div
            className="w-full md:w-2/3 flex flex-col items-start justify-center p-4 md:p-6 bg-white rounded-lg shadow-lg max-w-2xl overflow-y-auto"
            variants={contentVariants}
            transition={{ duration: 1 }}
          >
            {/* Title */}
            <h1 className="text-black text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-3">
              {project.title}
            </h1>

            {/* Subtitle */}
            <h3 className="text-gray-600 text-sm sm:text-md md:text-lg mb-2 sm:mb-3">
              {project.secondTitle}
            </h3>

            {/* Description List */}
            <ul className="list-disc pl-5 space-y-1 text-left text-gray-800 text-xs sm:text-sm md:text-base">
              {[
                project.des1,
                project.des2,
                project.des3,
                project.des4,
                project.des5,
                project.des6,
              ]
                .filter(Boolean)
                .map((description, idx) => (
                  <li key={idx}>{description}</li>
                ))}
            </ul>

            {/* Icons */}
            <div className="flex justify-start w-full mt-4 gap-2 sm:gap-4 overflow-x-auto">
              {project.icon.map((icon) => (
                <motion.div
                  key={icon.id}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* <Image
                    src={icon.img}
                    width={40}
                    height={40}
                    alt="Technology Icon"
                  /> */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
};

export default ProjectsList;
