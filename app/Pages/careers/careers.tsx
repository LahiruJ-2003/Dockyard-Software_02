"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/Pages/careers/lamp";
import MagicButton from "@/components/MagicButton";
import { ArrowRight } from "lucide-react"; // Example icon from Lucide React

export function Careers() {
  const imageUrl = "/sead.jpg"; // Update with the correct image path

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
      >
        Build your Career <br /> With Us!
      </motion.h1>

      {/* Button to Open Image in New Tab */}
      <a
        href={imageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block"
      >
        <MagicButton
          title="Available Vacancies"
          icon={<ArrowRight size={20} />}
          position="right"
        />
      </a>
    </LampContainer>
  );
}
