import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Github,
  Linkedin,
  Copy,
  ExternalLink,
  Check,
} from "lucide-react";

const Contact: React.FC = () => {
  const email = "adi.negi730@gmail.com";
  const phone = "+91 70226 53033";
  const location = "Bangalore, India";

  const [copied, setCopied] = useState<{ [k: string]: boolean }>({});

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((s) => ({ ...s, [key]: true }));
      setTimeout(() => setCopied((s) => ({ ...s, [key]: false })), 1400);
    } catch (e) {
      console.error("copy failed", e);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-red-500 via-red-700 to-red-900 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
        </div>

        <div className="relative bg-gradient-to-b from-black/40 to-black/10 rounded-2xl p-6 lg:p-10 flex flex-col lg:flex-row items-stretch gap-6">
          {/* Left vertical social strip on large screens */}
          <aside className="hidden lg:flex flex-col items-center gap-4 w-20 shrink-0">
            <SocialIcon href="https://instagram.com/adi.3_" icon={<Instagram size={20} />} label="Instagram" />
            <SocialIcon href="https://github.com/AdityaNegi3" icon={<Github size={20} />} label="GitHub" />
            <SocialIcon href="https://www.linkedin.com/in/adityanegi03/" icon={<Linkedin size={20} />} label="LinkedIn" />
          </aside>

          {/* Main contact card */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <div className="rounded-xl border border-gray-800 p-4 bg-black/60">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-semibold">Reach me directly</div>
                    <div className="text-sm text-gray-400 mt-1">
                      Pick whatever works — quick links and copy buttons for convenience.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            {/* Desktop */}
            <div className="hidden md:block">
              <ContactCardCompact
                icon={<Mail size={18} />}
                label="Email"
                value={email}
                href={`mailto:${email}`}
                onCopy={() => copy("email", email)}
                copied={!!copied.email}
              />
            </div>
            {/* Mobile */}
            <div className="block md:hidden">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 rounded-lg border border-gray-800 p-3 bg-black/50"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-200 font-medium">Email</div>
                  <div className="text-sm text-gray-400">{email}</div>
                </div>
              </a>
            </div>

            {/* PHONE */}
            {/* Desktop */}
            <div className="hidden md:block">
              <ContactCardCompact
                icon={<Phone size={18} />}
                label="Phone"
                value={phone}
                href={`tel:+917022653033`}
                onCopy={() => copy("phone", phone)}
                copied={!!copied.phone}
              />
            </div>
            {/* Mobile */}
            <div className="block md:hidden">
              <a
                href={`tel:+917022653033`}
                className="flex items-center gap-3 rounded-lg border border-gray-800 p-3 bg-black/50"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-200 font-medium">Phone</div>
                  <div className="text-sm text-gray-400">{phone}</div>
                </div>
              </a>
            </div>

            {/* LOCATION */}
            {/* Desktop */}
            <div className="hidden md:block">
              <ContactCardCompact
                icon={<MapPin size={18} />}
                label="Location"
                value={location}
                href={undefined}
                onCopy={() => copy("location", location)}
                copied={!!copied.location}
              />
            </div>
            {/* Mobile */}
            <div className="block md:hidden">
              <div className="flex items-center gap-3 rounded-lg border border-gray-800 p-3 bg-black/50">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm text-gray-200 font-medium">Location</div>
                  <div className="text-sm text-gray-400">{location}</div>
                </div>
              </div>
            </div>

            {/* Social icons shown inline for small screens */}
            <div className="col-span-1 md:col-span-2 flex items-center justify-start md:justify-end gap-3">
              <div className="flex items-center gap-3">
                <SocialIcon href="https://instagram.com/adi.3_" icon={<Instagram size={18} />} label="Instagram" />
                <SocialIcon href="https://github.com/AdityaNegi3" icon={<Github size={18} />} label="GitHub" />
                <SocialIcon href="https://www.linkedin.com/in/adityanegi03/" icon={<Linkedin size={18} />} label="LinkedIn" />
              </div>
            </div>
          </div>

          {/* Floating badge on the right */}
          <div className="hidden lg:flex items-center justify-center absolute right-6 top-6">
            <div className="px-3 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 font-semibold shadow-lg">
              Let's talk
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCardCompact: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  onCopy?: () => void;
  copied?: boolean;
}> = ({ icon, label, value, href, onCopy, copied }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-800 p-3 bg-black/50">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 to-red-800">
          {icon}
        </div>
        <div>
          <div className="text-sm text-gray-200 font-medium">{label}</div>
          <div className="text-sm text-gray-400 truncate max-w-[220px]">{value}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {href ? (
          <a
            href={href}
            className="p-2 rounded-md border border-gray-700 hover:border-red-500 transition-all"
            aria-label={`Open ${label}`}
          >
            <ExternalLink size={16} />
          </a>
        ) : (
          <div className="w-9" />
        )}

        <button
          onClick={onCopy}
          className="p-2 rounded-md border border-gray-700 hover:border-red-500 transition-all"
          aria-label={`Copy ${label}`}
        >
          <Copy size={16} />
        </button>

        {copied && (
          <div className="ml-2 text-xs text-green-400 inline-flex items-center gap-1">
            <Check size={12} />
            Copied
          </div>
        )}
      </div>
    </div>
  );
};

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label?: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 flex items-center justify-center rounded-lg bg-black/60 border border-gray-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 transition-all"
  >
    {icon}
  </a>
);

export default Contact;
