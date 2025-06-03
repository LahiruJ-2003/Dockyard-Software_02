// "use client";

// import Head from "next/head";
// import React, { useState, useEffect, useRef } from "react";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";
// import Footer from "@/components/Footer";
// import { navItems } from "@/data";
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
// import Contact from "@/app/Pages/contact/Contact";

// export default function ContactPage() {
//   const { scrollYProgress } = useScroll();
//   const [logoVisible, setLogoVisible] = useState(true);
//   const heroRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const heroSection = heroRef.current;
//     if (!heroSection) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setLogoVisible(entry.isIntersecting);
//       },
//       { threshold: 1.0 }
//     );

//     observer.observe(heroSection);

//     return () => {
//       if (heroSection) observer.unobserve(heroSection);
//     };
//   }, []);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       const previous = scrollYProgress.getPrevious();
//       const direction = previous !== undefined ? current - previous : 0;

//       if (scrollYProgress.get() < 0.05) {
//         setLogoVisible(true);
//       } else {
//         setLogoVisible(direction < 0);
//       }
//     }
//   });

//   return (
//     <>
//       <Head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebPage",
//               name: "Careers",
//               url: "https://dockyardsoftware.com/contact",
//               description:
//                 "Explore career opportunities with Dockyard Software. Join our diverse, inclusive team and work in a dynamic environment where innovation thrives.",
//               potentialAction: {
//                 "@type": "SearchAction",
//                 target: "https: //dockyardsoftware.com/search?q={}",
//               },
//               contactPoint: {
//                 "@type": "ContactPoint",
//                 telephone: "011 2520388",
//                 contactType: "Contact Us",
//               },
//             }),
//           }}
//         />
//       </Head>
//       <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//         <div className="max-w-7xl w-full">
//           {/* Floating Navigation Bar */}
//           <FloatingNav navItems={navItems} className="z-50" />

//           <AnimatePresence mode="wait">
//             {logoVisible && (
//               <motion.header
//                 initial={{ opacity: 1, y: -100 }}
//                 animate={{
//                   y: logoVisible ? 0 : -100,
//                   opacity: logoVisible ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.2 }}
//                 className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-40"
//               >
//                 {/* Logo with animation matching the navbar */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0, y: -17 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-xl font-bold pl-4"
//                 ></motion.div>
//               </motion.header>
//             )}
//           </AnimatePresence>

//           {/* Contact Section */}
//           <section className="relative w-full flex-grow pt-40" ref={heroRef}>
//             <Contact />
//           </section>

//           {/* Footer */}
//           <Footer />
//         </div>
//       </main>
//     </>
//   );
// }
"use client";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Contact from "@/app/Pages/contact/Contact";

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const [logoVisible, setLogoVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setLogoVisible(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (scrollYProgress.get() < 0.05) {
        setLogoVisible(true);
      } else {
        setLogoVisible(direction < 0);
      }
    }
  });

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Careers",
              url: "https://dockyardsoftware.com/contact",
              description:
                "Explore career opportunities with Dockyard Software. Join our diverse, inclusive team and work in a dynamic environment where innovation thrives.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://dockyardsoftware.com/search?q={}",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "011 2520388",
                contactType: "Contact Us",
              },
            }),
          }}
        />
      </Head>
      <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          {/* Floating Navigation Bar */}
          <FloatingNav navItems={navItems} className="z-50" />
          <AnimatePresence mode="wait">
            {logoVisible && (
              <motion.header
                initial={{ opacity: 1, y: -100 }}
                animate={{
                  y: logoVisible ? 0 : -100,
                  opacity: logoVisible ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-40"
              >
                {/* Logo with animation matching the navbar */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, y: -17 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold pl-4"
                ></motion.div>
              </motion.header>
            )}
          </AnimatePresence>
          {/* Contact Section */}
          <section className="relative w-full flex-grow pt-40" ref={heroRef}>
            <Contact />
          </section>
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
