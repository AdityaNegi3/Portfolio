// src/components/Projects.tsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
};

const Projects: React.FC = () => {
  // Load from /public folder (Vite/CRA safe)
  const images = {
    marketing: new URL("/marketing.png", import.meta.url).href,
    clothing: new URL("/clothing.png", import.meta.url).href,
    monaarc: new URL("/monaarc.png", import.meta.url).href,
    gurunanak: new URL("/gurunanak.png", import.meta.url).href,
  };

  const projects: Project[] = [
    {
      title: "Osiris Marketing",
      description:
        "A premium marketing & automation agency focused on luxury and high-end brands — strategy, brand campaigns, paid media, and marketing automations to scale customer acquisition and retention.",
      image: images.marketing,
      tags: ["Marketing Strategy", "Marketing Automation", "SEO / SEM", "Landing Page UX", "Analytics"],
      liveUrl: "https://osirismarketing.site",
    },
    {
      title: "Osiris Clothing",
      description:
        "Luxury limited-run streetwear — product pages with premium photography, size/wash guides, and exclusive drop / waitlist features for members-only access.",
      image: images.clothing,
      tags: ["E-commerce", "Product Catalog", "Inventory + Waitlist", "Payments & Checkout", "Responsive UI"],
      liveUrl: "https://osirisclothing.site",
    },
    {
      title: "Monaarc Clothing",
      description:
        "A performance-driven retail site for a clothing brand: product listings, collection pages, easy checkout flow, and store management for seasonal drops and promos.",
      image: images.monaarc,
      tags: ["E-commerce", "Catalog Management", "Promotions / Discounts", "Fast Checkout", "Mobile-first Design"],
      liveUrl: "https://monaarcclothing.com",
    },
    {
      title: "Gurunanak Housing",
      description:
        "Property development & construction brochure site — showcases services (new builds, refurbishments, fit-outs), project galleries, and contact/quote capture for homeowners and small developers.",
      image: images.gurunanak,
      tags: ["Brochure Site", "Project Galleries", "Lead Capture", "Content Management", "Local SEO"],
      liveUrl: "https://gurunanakhousing.co.uk",
    },
  ];

  const loopProjects = [...projects, ...projects];

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<any>(null);

  useEffect(() => {
    if (!wrapRef.current || !trackRef.current) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const track = trackRef.current;
    if (tlRef.current) tlRef.current.kill();

    const totalWidth = track.scrollWidth / 2;
    const speedPxPerSec = 80;
    const duration = totalWidth / speedPxPerSec;

    tlRef.current = gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      duration,
      repeat: -1,
    });

    const onResize = () => {
      if (!track) return;
      tlRef.current?.kill();
      const newTotal = track.scrollWidth / 2;
      const newDuration = newTotal / speedPxPerSec;
      tlRef.current = gsap.to(track, {
        x: -newTotal,
        ease: "none",
        duration: newDuration,
        repeat: -1,
      });
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      tlRef.current?.kill();
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full" />
          <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto">
            Selected work that blends design, performance, and automation.
          </p>
        </div>

        {/* Carousel */}
        <div ref={wrapRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 will-change-transform"
            style={{ alignItems: "stretch" }}
          >
            {loopProjects.map((project, index) => (
              <a
                key={`${project.title}-${index}`}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-b from-black/40 to-black/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
                style={{ minWidth: 320 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover transform transition-transform duration-400 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 text-xs font-medium rounded-full border border-gray-800 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] text-red-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div>Role: Full-stack</div>
                    <div className="text-red-400 font-semibold">Featured</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border-2 border-red-500 text-red-400 font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
          >
            View All Projects
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
