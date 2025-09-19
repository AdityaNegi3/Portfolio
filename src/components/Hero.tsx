// src/components/Hero.tsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import LiquidEther from './LiquidEther';

const Hero: React.FC = () => {
  // content refs
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const socialIconsRef = useRef<HTMLDivElement | null>(null);
  const chevronRef = useRef<HTMLButtonElement | null>(null);

  // preloader/typewriter refs & state
  const [loaded, setLoaded] = useState<boolean>(false);
  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const typeContainerRef = useRef<HTMLDivElement | null>(null);
  const caretRef = useRef<HTMLSpanElement | null>(null);

  // glow and liquid refs
  const glowRef = useRef<HTMLDivElement | null>(null);
  const liquidContainerRef = useRef<HTMLDivElement | null>(null);

  // autoDemo toggle: start false, enable on first user pointer move
  const [autoDemo, setAutoDemo] = useState<boolean>(false);
  const autoResumeTimeout = useRef<number | null>(null);

  /* -------------------------
     GSAP entrance for hero content
     ------------------------- */
  useEffect(() => {
    if (!loaded) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    const heroContent = [
      subheadingRef.current,
      headingRef.current,
      paragraphRef.current,
      buttonsRef.current,
      socialIconsRef.current,
      chevronRef.current,
    ];

    tl.fromTo(heroContent, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.18 });

    gsap.to(socialIconsRef.current, {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2,
    });

    gsap.fromTo(
      chevronRef.current,
      { y: 0 },
      { y: -10, duration: 1.5, ease: 'power1.inOut', yoyo: true, repeat: -1, delay: 2.2 }
    );

    return () => {
      try { tl.kill(); } catch {}
    };
  }, [loaded]);

  /* -------------------------
     Preloader + Typewriter
     - deterministic fallback so it can't hang forever
     ------------------------- */
  useEffect(() => {
    if (loaded) return;

    const typeText = "hi, i'm Aditya Negi.";
    const chars = Array.from(typeText);
    const totalTime = 3; // seconds
    const perCharStagger = totalTime / Math.max(chars.length, 1);

    if (typeContainerRef.current) {
      typeContainerRef.current.innerHTML = '';
      chars.forEach((ch) => {
        const span = document.createElement('span');
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.opacity = '0';
        span.style.transform = 'translateY(6px)';
        span.style.display = 'inline-block';
        typeContainerRef.current!.appendChild(span);
      });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // hide caret
        gsap.to(caretRef.current, { autoAlpha: 0, duration: 0.12 });

        // final logo spin & hide preloader
        const endTl = gsap.timeline({
          onComplete: () => {
            setLoaded(true);
          },
        });

        endTl.to(logoRef.current, {
          rotate: 360,
          scale: 1.08,
          duration: 0.55,
          ease: 'power4.inOut',
        });

        endTl.to(
          preloaderRef.current,
          {
            autoAlpha: 0,
            y: -36,
            duration: 0.6,
            ease: 'power3.inOut',
          },
          '-=0.3'
        );
      },
    });

    tl.to(typeContainerRef.current!.children, {
      opacity: 1,
      y: 0,
      duration: 0.04,
      stagger: perCharStagger,
      ease: 'power1.out',
    });

    // caret blink
    gsap.to(caretRef.current, { opacity: 1, repeat: -1, yoyo: true, duration: 0.48, ease: 'linear' });

    // If the page load happens earlier, speed up the timeline to finish
    const onWindowLoad = () => {
      try {
        if (tl && tl.progress() < 1) tl.progress(1);
      } catch {}
    };
    window.addEventListener('load', onWindowLoad);

    // fallback close — guaranteed to close preloader after 3s
    const fallback = window.setTimeout(() => {
      try {
        if (tl && tl.progress() < 1) tl.progress(1);
      } catch {}
    }, (totalTime + 0.6) * 1000);

    return () => {
      window.removeEventListener('load', onWindowLoad);
      clearTimeout(fallback);
      try { tl.kill(); } catch {}
    };
  }, [loaded]);

  /* -------------------------
     Auto-demo activation on first pointer move / touch
     - default false so effect waits for user
     ------------------------- */
  useEffect(() => {
    setAutoDemo(false);
    let started = false;

    function startOnFirstMove() {
      if (started) return;
      started = true;
      setAutoDemo(true);
      // enable auto-resume behavior later when user stops interacting
      if (autoResumeTimeout.current) window.clearTimeout(autoResumeTimeout.current);
      autoResumeTimeout.current = window.setTimeout(() => setAutoDemo(true), 3000);
      // remove listeners
      window.removeEventListener('pointermove', startOnFirstMove);
      window.removeEventListener('touchstart', startOnFirstMove);
    }

    window.addEventListener('pointermove', startOnFirstMove, { passive: true });
    window.addEventListener('touchstart', startOnFirstMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', startOnFirstMove);
      window.removeEventListener('touchstart', startOnFirstMove);
      if (autoResumeTimeout.current) window.clearTimeout(autoResumeTimeout.current);
    };
  }, []);

  // cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (autoResumeTimeout.current) window.clearTimeout(autoResumeTimeout.current);
    };
  }, []);

  /* -------------------------
     Pointer forwarding to internal Liquid canvas (keeps lib happy)
     ------------------------- */
  const forwardPointerToLiquid = (
    clientX: number,
    clientY: number,
    type: 'pointermove' | 'pointerdown' | 'pointerup' = 'pointermove'
  ) => {
    // user interaction temporarily disables auto demo & schedules resume
    setAutoDemo(false);
    if (autoResumeTimeout.current) window.clearTimeout(autoResumeTimeout.current);
    autoResumeTimeout.current = window.setTimeout(() => setAutoDemo(true), 2500);

    const wrapper = liquidContainerRef.current;
    if (!wrapper) return;

    const canvas = wrapper.querySelector('canvas') as HTMLCanvasElement | null;
    const targetNode: EventTarget = canvas ?? wrapper;

    const rect = (targetNode as Element).getBoundingClientRect();
    const localX = clientX - rect.left;
    const localY = clientY - rect.top;

    // PointerEvent try
    try {
      const ev = new PointerEvent(type, {
        bubbles: true,
        cancelable: true,
        clientX,
        clientY,
        pageX: clientX + window.scrollX,
        pageY: clientY + window.scrollY,
        pointerType: 'mouse',
        isPrimary: true,
      } as PointerEventInit);
      targetNode.dispatchEvent(ev);
    } catch {}

    // MouseEvent fallback
    try {
      const me = new MouseEvent(type === 'pointerdown' ? 'mousedown' : type === 'pointerup' ? 'mouseup' : 'mousemove', {
        bubbles: true,
        cancelable: true,
        clientX,
        clientY,
      });
      targetNode.dispatchEvent(me);
    } catch {}

    // Custom normalized event
    try {
      const custom = new CustomEvent('liquid-pointer', {
        detail: {
          clientX,
          clientY,
          x: localX,
          y: localY,
          normalizedX: Math.max(0, Math.min(1, localX / Math.max(rect.width, 1))),
          normalizedY: Math.max(0, Math.min(1, localY / Math.max(rect.height, 1))),
          type,
        },
        bubbles: true,
        cancelable: true,
      });
      targetNode.dispatchEvent(custom);
    } catch {}
  };

  // pointer handlers attached to wrapper
  const handlePointerMove = (e: React.PointerEvent) => {
    forwardPointerToLiquid(e.clientX, e.clientY, 'pointermove');
    if (glowRef.current) {
      gsap.to(glowRef.current, { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power2.out', overwrite: 'auto' });
    }
  };
  const handlePointerDown = (e: React.PointerEvent) => forwardPointerToLiquid(e.clientX, e.clientY, 'pointerdown');
  const handlePointerUp = (e: React.PointerEvent) => forwardPointerToLiquid(e.clientX, e.clientY, 'pointerup');
  const handleTouchMove = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (!t) return;
    forwardPointerToLiquid(t.clientX, t.clientY, 'pointermove');
    if (glowRef.current) {
      gsap.to(glowRef.current, { x: t.clientX, y: t.clientY, duration: 0.18, ease: 'power2.out', overwrite: 'auto' });
    }
  };

  // small mousemove for glow when not forwarding (optional)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  /* -------------------------
     Scroll to about (native)
     ------------------------- */
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const githubUrl = 'https://github.com/AdityaNegi3';
  const linkedinUrl = 'https://www.linkedin.com/in/adityanegi03/';
  const mailTo = 'mailto:adi.negi730@gmail.com';

  /* -------------------------
     Render
     ------------------------- */
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black text-white overflow-hidden font-inter"
      aria-label="Hero"
      onMouseMove={handleMouseMove}
    >
      {/* Preloader overlay */}
      {!loaded && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4"
        >
          <div className="w-full max-w-xs sm:max-w-none sm:w-auto mx-auto">
            <div className="flex flex-col items-center justify-center">
              <div
                ref={logoRef}
                className="mx-auto w-16 h-16 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-3"
                style={{
                  background: 'linear-gradient(135deg, #ff1a1a 0%, #e60000 50%, #990000 100%)',
                  boxShadow: '0 30px 60px rgba(230,0,0,0.12)',
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8 8 3 9 3 13c0 3 3 6 9 9 6-3 9-6 9-9 0-4-5-5-9-11z" fill="#0b0b0b" />
                  <path d="M12 4c2.5 3 5.8 4 7 8-1.2 4-4.5 5-7 7-2.5-2-5.8-3-7-7 1.2-4 4.5-5 7-8z" fill="#fff" opacity="0.06" />
                </svg>
              </div>

              <div className="text-center select-none w-full px-2">
                <div className="text-lg sm:text-2xl font-semibold tracking-tight text-white inline-block leading-tight">
                  <div
                    ref={typeContainerRef}
                    className="inline-block text-left font-mono text-sm sm:text-base"
                    aria-hidden
                  />
                  <span
                    ref={caretRef}
                    className="inline-block ml-1 align-middle"
                    style={{ opacity: 1, width: 6, height: 22, background: 'white', display: 'inline-block' }}
                    aria-hidden
                  />
                </div>
                <div className="mt-2 text-xs sm:text-sm text-gray-400">a frontend developer who loves motion ✨</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* glow element (red theme) */}
      <div
        ref={glowRef}
        className="absolute z-0 pointer-events-none opacity-60 will-change-transform"
        style={{
          background: 'radial-gradient(600px circle at center, rgba(255,26,26,0.20), rgba(230,0,0,0.12) 45%, rgba(153,0,0,0.06) 80%)',
          filter: 'blur(40px)',
          width: 800,
          height: 800,
          transform: 'translate(-50%, -50%)',
          left: 0,
          top: 0,
        }}
      />

      {/* Liquid layer wrapper: receives pointer/touch events and forwards them */}
      <div
        ref={liquidContainerRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onTouchMove={handleTouchMove}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          touchAction: 'none',
          pointerEvents: 'auto',
        }}
        className="absolute inset-0 z-0"
      >
        <LiquidEther
          colors={['#ff1a1a', '#e60000', '#990000']} // bright red -> red -> dark red
          mouseForce={28}
          cursorSize={120}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={autoDemo}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          className="absolute inset-0"
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
      </div>

      {/* overlay & gradient to darken edges */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      <svg className="pointer-events-none absolute inset-0 w-full h-full z-0" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#2b0202" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g)" />
      </svg>

      {/* hero content (z-10 so it stays on top) */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center ${!loaded ? 'pointer-events-none select-none' : 'pointer-events-auto'}`}
      >
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-20 sm:pt-20">
          <h2 ref={subheadingRef} className="text-xs sm:text-sm tracking-widest text-red-400 uppercase mb-3 sm:mb-4 opacity-0">
           
          </h2>

          <h1 ref={headingRef} className="font-extrabold leading-tight text-3xl sm:text-5xl lg:text-6xl mb-5 sm:mb-6 opacity-0">
            <span className="block">I build</span>
            <span className="block bg-gradient-to-r from-red-400 via-red-600 to-black bg-clip-text text-transparent">
              bold, beautiful interfaces
            </span>
          </h1>

          <p ref={paragraphRef} className="mx-auto max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 opacity-0">
            Crafting striking digital experiences — clean code, polished interactions, and high-converting visuals.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 opacity-0 w-full">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-black font-semibold shadow-2xl hover:scale-103 transition-transform duration-200"
            >
              View My Work
            </a>

            <a
              href={mailTo}
              className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-red-600 text-red-300 font-semibold hover:bg-red-600 hover:text-black transition-colors duration-200 text-center"
            >
              Get In Touch
            </a>
          </div>

          <div ref={socialIconsRef} className="flex justify-center gap-3 mb-6 opacity-0">
            {[
              { Icon: Github, href: githubUrl, label: 'GitHub' },
              { Icon: Linkedin, href: linkedinUrl, label: 'LinkedIn' },
              { Icon: Mail, href: mailTo, label: 'Email' },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-700 bg-black/40 hover:bg-red-700/10 hover:border-red-600 transition-all"
              >
                <Icon size={16} className="text-gray-200" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        ref={chevronRef}
        onClick={scrollToAbout}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-red-400 z-10 opacity-0"
      >
        <div className="animate-bounce">
          <ChevronDown size={32} />
        </div>
      </button>
    </section>
  );
};

export default Hero;
