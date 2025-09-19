// src/app/Page.tsx
import React, { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";

const projects = [
  {
    title: "Osiris Marketing",
    description:
      "A premium marketing & automation agency focused on luxury and high-end brands — brand campaigns, paid media, and marketing automations to scale acquisition & retention.",
    image: "/marketing.png",
    tags: ["Marketing Strategy", "Automation", "SEO"],
    liveUrl: "https://osirismarketing.site",
  },
  {
    title: "Osiris Clothing",
    description:
      "Luxury limited-run streetwear — premium product pages, size/wash guides, and exclusive drop/waitlist features for members-only access.",
    image: "/clothing.png",
    tags: ["E-commerce", "Drops", "Responsive"],
    liveUrl: "https://osirisclothing.site",
  },
  {
    title: "Monaarc Clothing",
    description:
      "Performance-driven retail site: fast checkout, collection pages, seasonal promotions and store management.",
    image: "/monaarc.png",
    tags: ["Catalog", "Checkout", "Mobile-first"],
    liveUrl: "https://monaarcclothing.com",
  },
  {
    title: "Gurunanak Housing",
    description:
      "Property development & construction brochure site — project galleries, services, and contact/quote capture for homeowners and small developers.",
    image: "/gurunanak.png",
    tags: ["Brochure", "Galleries", "Lead Capture"],
    liveUrl: "https://gurunanakhousing.co.uk",
  },
  {
    title: "Hope & Care Foundation",
    description:
      "Nonprofit website with donation flows, volunteer sign-up, event listings, and a resource hub to support community programs and fundraising.",
    image: "/care.png",
    // Add a file named hopeandcare.png to /public/images for local fallback
    fallback: "/images/hopeandcare.png",
    tags: ["Nonprofit", "Donations", "Events"],
    liveUrl: "https://hopeandcarefoundation.netlify.app",
  },
];

const Page: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const typeRef = useRef<HTMLDivElement | null>(null);
  const caretRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (loaded) return;
    try {
      const text = "Please wait";
      const chars = Array.from(text);
      if (typeRef.current) {
        typeRef.current.innerHTML = "";
        chars.forEach((ch) => {
          const s = document.createElement("span");
          s.textContent = ch === " " ? "\u00A0" : ch;
          s.style.opacity = "0";
          s.style.display = "inline-block";
          s.style.transform = "translateY(6px)";
          typeRef.current!.appendChild(s);
        });
      }

      const totalTime = 1.0;
      const perChar = totalTime / Math.max(chars.length, 1);
      const tl = gsap.timeline({ onComplete: () => setLoaded(true) });
      tl.to(typeRef.current!.children, {
        opacity: 1,
        y: 0,
        duration: 0.03,
        stagger: perChar,
        ease: "power1.out",
      });

      if (caretRef.current) gsap.to(caretRef.current, { opacity: 0, repeat: -1, yoyo: true, duration: 0.45, ease: "linear" });

      const safety = window.setTimeout(() => setLoaded(true), 3000);
      return () => clearTimeout(safety);
    } catch {
      setLoaded(true);
    }
  }, [loaded]);

  useEffect(() => {
    if (!loaded) return;
    try {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".proj-item", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.08 });
      return () => tl.kill();
    } catch {}
  }, [loaded]);

  // --- NEW: scroll to top when the projects are ready (preloader ended)
  useEffect(() => {
    if (!loaded) return;
    // instant top (no jank) — change behavior to 'smooth' if you want a smooth ride
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [loaded]);

  // helper to scroll to top (used on click before navigation)
  const scrollToTop = (options: ScrollToOptions = { top: 0, left: 0, behavior: "smooth" }) => {
    try {
      window.scrollTo(options);
    } catch {
      // fallback
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* SOLID preloader (no transparency) */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="max-w-lg w-full mx-6 text-center p-6">
            <div className="mx-auto w-20 h-20 rounded-full p-3 bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-xl">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8 8 3 9 3 13c0 3 3 6 9 9 6-3 9-6 9-9 0-4-5-5-9-11z" fill="#0b0b0b" />
              </svg>
            </div>

            <div className="mt-6 text-lg font-extrabold tracking-tight">
              <div className="inline-flex items-center justify-center">
                <div ref={typeRef} className="font-mono text-base sm:text-lg" />
                <span ref={caretRef} className="ml-3 inline-block w-1 h-6 rounded-sm" style={{ background: "#ef4444", opacity: 1 }} />
              </div>
              <p className="mt-3 text-sm text-zinc-300">Loading projects…</p>
            </div>
          </div>
        </div>
      )}

      {/* Projects-only layout */}
      <main className={`${loaded ? "" : "pointer-events-none"}`}>
        <header className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Projects</h1>
              <p className="text-zinc-400 mt-2">Selected case studies & builds — scroll to see everything.</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href="/" className="text-sm text-zinc-300">Home</a>
              <a href="/contact" className="text-sm text-red-500 font-semibold">Contact</a>
            </div>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="flex flex-col gap-8">
            {projects.map((p, idx) => (
              <article key={idx} className="proj-item bg-[#070707] border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                <div className="md:w-1/2 h-56 md:h-auto relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover block"
                    onError={(e) => (e.currentTarget.src = "/images/project-fallback.jpg")}
                  />
                </div>

                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                    <p className="text-zinc-400 mt-3">{p.description}</p>

                    <div className="mt-4 flex gap-2 flex-wrap">
                      {p.tags.map((t, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      // NEW: scroll to top before going to the project's live URL
                      onClick={(e) => {
                        // scroll to top visually before navigation
                        scrollToTop({ top: 0, left: 0, behavior: "smooth" });
                        // if you prefer instant jump, use: window.scrollTo(0,0);
                        // allow the click to proceed (don't call preventDefault)
                      }}
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      View Project <ExternalLink className="w-3 h-3" />
                    </a>

                    <div className="text-xs text-zinc-500">{p.liveUrl ? new URL(p.liveUrl).hostname : ""}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} Aditya Negi — Projects only view.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Page;
