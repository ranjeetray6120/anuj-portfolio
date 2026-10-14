"use client";

import React, { useState } from "react";
import {
  Navbar,
  Hero,
  Marquee,
  About,
  Services,
  CaseStudies,
  Clients,
  Experience,
  Tools,
  Certifications,
  Contact,
  Lightbox,
} from "./";
import { usePortfolioAnimations } from "@/hooks/usePortfolioAnimations";

export function Portfolio() {
  const { theme, toggleTheme, scrollProgress } = usePortfolioAnimations();
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImg({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        scrollProgress={scrollProgress}
      />

      <Hero />

      <Marquee />

      <About />

      <Services />

      <CaseStudies openLightbox={openLightbox} />

      <Clients />

      <Experience />

      <Tools />

      <Certifications />

      <Contact />

      <Lightbox image={lightboxImg} onClose={closeLightbox} />
    </>
  );
}

export default Portfolio;
