"use client";

import React, { useEffect } from "react";

interface LightboxProps {
  image: { src: string; alt: string } | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (image) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="lightbox open fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 cursor-zoom-out"
      id="lb"
      onClick={onClose}
    >
      <img
        id="lbimg"
        src={image.src}
        alt={image.alt}
        className="max-w-full max-h-[92vh] object-contain rounded-lg shadow-2xl"
      />
    </div>
  );
};
