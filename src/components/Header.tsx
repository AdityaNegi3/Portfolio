import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<Array<HTMLSpanElement | null>>([]);
  const floatTl = useRef<gsap.core.Timeline | null>(null);
  const startCalled = useRef(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startAnimation = () => {
    if (startCalled.current) return;
    startCalled.current = true;

    if (!lettersRef.current.length) return;

    lettersRef.current.forEach((el) => {
      if (el) gsap.set(el, { opacity: 0, y: 6, scale: 0.98 });
    });

    const tl = gsap.timeline();

    tl.to(lettersRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.06,
      stagger: 0.045,
      ease: "power1.out",
    });

    tl.to({}, { duration: 0.05 });

    floatTl.current = gsap.timeline({ repeat: -1, yoyo: true });
    floatTl.current.to(lettersRef.current, {
      y: -3,
      duration: 0.25,
      stagger: { each: 0.06, from: "center" },
      ease: "power1.inOut",
    });

    tl.add(floatTl.current, "+=0");

    const cleanup = () => {
      tl.kill();
      floatTl.current && floatTl.current.kill();
    };
    return cleanup;
  };

  useEffect(() => {
    const pre = document.getElementById("preloader");
    if (!pre) {
      startAnimation();
      return;
    }

    const onCustom = () => {
      startAnimation();
      window.removeEventListener("preloaderDone", onCustom);
    };
    window.addEventListener("preloaderDone", onCustom);

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.removedNodes && m.removedNodes.length) {
          for (const n of Array.from(m.removedNodes)) {
            if ((n as HTMLElement).id === "preloader") {
              startAnimation();
              observer.disconnect();
              window.removeEventListener("preloaderDone", onCustom);
              return;
            }
          }
        }
      }
      if (!document.getElementById("preloader")) {
        startAnimation();
        observer.disconnect();
        window.removeEventListener("preloaderDone", onCustom);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const fallback = window.setTimeout(() => {
      startAnimation();
      observer.disconnect();
      window.removeEventListener("preloaderDone", onCustom);
    }, 3500);

    return () => {
      observer.disconnect();
      window.removeEventListener("preloaderDone", onCustom);
      clearTimeout(fallback);
    };
  }, []);

  const renderName = (name: string) => {
    lettersRef.current = [];
    return (
      <div
        ref={nameRef}
        className={`inline-flex font-extrabold text-2xl sm:text-3xl lg:text-4xl ${
          isScrolled ? "text-slate-900" : "text-white"
        }`}
      >
        {name.split("").map((char, i) =>
          char === " " ? (
            <span key={`sp-${i}`} className="mx-1" />
          ) : (
            <span
              key={`${char}-${i}`}
              ref={(el) => (lettersRef.current[i] = el)}
              className="inline-block will-change-transform"
              style={{ opacity: 1 }}
            >
              {char}
            </span>
          )
        )}
      </div>
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Name with typewriter + float */}
          {renderName("ADITYA NEGI")}

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled
                    ? "text-gray-600 hover:text-red-600"
                    : "text-gray-300 hover:text-red-400"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 py-4 shadow-lg border border-gray-100">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
