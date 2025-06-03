"use client";

import { useState } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AIChat from "@/components/ui/AIChat";
import ChatWidget from "@/components/ui/ChatWidget";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <ChatWidget />
        {/* <Approach /> */}
        <Footer />
      </div>

      {/* Floating button to toggle chat */}
      {/* <button
        className="fixed bottom-6 right-6 z-50 bg-slate-800 text-white px-4 py-3 rounded-full shadow-xl hover:bg-slate-700 transition"
        onClick={() => setShowChat(true)}
      >
        Chat with AI
      </button> */}
      {/* Conditionally rendered chat component */}
      {showChat && <AIChat onClose={() => setShowChat(false)} />}
    </main>
  );
};

export default Home;

