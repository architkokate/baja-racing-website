"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Stats from "@/components/Stats/Stats";
import Gallery from "@/components/Gallery/Gallery";
import Footer from "@/components/Footer/Footer";

const SESSION_KEY = "baja-loader-shown";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem(SESSION_KEY);

    if (hasSeenLoader) {
      setContentReady(true);
      return;
    }

    setShowLoader(true);
  }, []);

  const handleLoaderComplete = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setShowLoader(false);
  }, []);

  const handleExitComplete = useCallback(() => {
    setContentReady(true);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {showLoader && (
          <LoadingScreen key="loading-screen" onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>

      {contentReady && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Stats />
            <Gallery />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
