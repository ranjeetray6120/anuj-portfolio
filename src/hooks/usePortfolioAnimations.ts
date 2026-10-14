"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function usePortfolioAnimations() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Theme initialization
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = saved === "dark" || (!saved && prefersDark) ? "dark" : "light";
    queueMicrotask(() => setTheme(initialTheme));
    if (initialTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    // Scroll progress handler
    const updateScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
      setScrollProgress(p);
    };
    window.addEventListener("scroll", updateScroll, { passive: true });

    // GSAP Setup
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero intro timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        [".hero .hello", ".hero .yrs"],
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }
      )
        .fromTo(
          ".hero h1.big",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.15
        )
        .fromTo(
          ".hero .sub",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.35
        )
        .fromTo(
          ".hero .quote",
          { opacity: 0, x: -22 },
          { opacity: 1, x: 0, duration: 0.6 },
          0.55
        )
        .fromTo(
          ".hero .chip",
          { opacity: 0, y: 14, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.06 },
          0.7
        )
        .fromTo(
          ".hero .portrait",
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)" },
          0.3
        )
        .fromTo(
          ".statbar",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.85
        );

      // Scroll reveals
      function reveal(els: Element[], trigger: Element, stagger = 0) {
        if (!els.length) return;
        gsap.fromTo(
          els,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            stagger,
            scrollTrigger: {
              trigger,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      document.querySelectorAll("section").forEach((sec) => {
        const head = sec.querySelector(".sechead");
        if (head) reveal([head], head);

        const cards = Array.from(sec.querySelectorAll(".card"));
        if (cards.length) reveal(cards, cards[0].parentElement || sec, 0.09);

        const studies = Array.from(sec.querySelectorAll(".study"));
        studies.forEach((st) => reveal([st], st));

        const brands = Array.from(sec.querySelectorAll(".brandcard"));
        if (brands.length) reveal(brands, brands[0].parentElement || sec, 0.05);

        const tools = Array.from(sec.querySelectorAll(".tool"));
        if (tools.length) reveal(tools, tools[0].parentElement || sec, 0.04);

        const certs = Array.from(sec.querySelectorAll(".cert"));
        if (certs.length) reveal(certs, certs[0].parentElement || sec, 0.08);

        const box = sec.querySelector(".box");
        if (box) reveal([box], box);
      });

      // Number count-up animation (statbar + case study metrics)
      function countUp(el: Element, duration = 1.6) {
        let original = el.getAttribute("data-original");
        if (!original) {
          original = el.textContent?.trim() || "";
          el.setAttribute("data-original", original);
        }

        const nums = original.match(/[0-9][0-9,]*(?:\.[0-9]+)?/g);
        // "4–10x" jaise range me do numbers hote hain — unhe count nahi karte
        if (!nums || nums.length !== 1) {
          el.textContent = original;
          return;
        }

        const raw = nums[0];
        const i = original.indexOf(raw);
        const pre = original.slice(0, i);
        const post = original.slice(i + raw.length);
        const grouped = raw.includes(",");
        const dec = (raw.split(".")[1] || "").length;
        const target = parseFloat(raw.replace(/,/g, ""));
        if (isNaN(target)) return;

        const obj = { v: 0 };

        gsap.to(obj, {
          v: target,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
          onUpdate: () => {
            const n = grouped
              ? Math.round(obj.v).toLocaleString("en-IN")
              : obj.v.toFixed(dec);
            el.textContent = pre + n + post;
          },
          onComplete: () => {
            el.textContent = original;
          },
        });
      }

      document.querySelectorAll(".stat b").forEach((el) => countUp(el, 1.6));
      document.querySelectorAll(".metric b").forEach((el) => countUp(el, 1.2));

      // Timeline items slide from left
      document.querySelectorAll(".tl").forEach((tlBox) => {
        const items = Array.from(tlBox.querySelectorAll(".item"));
        if (!items.length) return;
        gsap.fromTo(
          items,
          { x: -26, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.12,
            scrollTrigger: { trigger: tlBox, start: "top 84%" },
          }
        );
      });

      // Marquee skew on scroll
      const track = document.querySelector(".track");
      if (track) {
        const skew = gsap.quickTo(track, "skewX", { duration: 0.5, ease: "power3.out" });
        ScrollTrigger.create({
          onUpdate: (self) => {
            const v = self.getVelocity() / 320;
            const clamped = Math.max(-10, Math.min(10, v));
            skew(clamped);
          },
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      document.querySelectorAll(".stat b, .metric b").forEach((el) => {
        const orig = el.getAttribute("data-original");
        if (orig) el.textContent = orig;
      });
    };
  }, []);

  const toggleTheme = () => {
    const btn = document.getElementById("themebtn");
    if (btn) {
      gsap.fromTo(
        btn,
        { rotate: -90, scale: 0.7 },
        { rotate: 0, scale: 1, duration: 0.45, ease: "back.out(2)" }
      );
    }
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return {
    theme,
    toggleTheme,
    scrollProgress,
  };
}
