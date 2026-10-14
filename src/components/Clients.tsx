import React from "react";

interface Client {
  name: string;
  category: string;
  domain?: string;
  website?: string;
  initials: string;
}

const clients: Client[] = [
  {
    name: "FK Sports",
    category: "Sports & Fitness E-commerce",
    domain: "fksports.co.uk",
    website: "https://www.fksports.co.uk/",
    initials: "FK",
  },
  {
    name: "Kiduno",
    category: "Baby & Family E-commerce",
    domain: "kiduno.co.uk",
    website: "https://www.kiduno.co.uk/",
    initials: "KD",
  },
  {
    name: "Nattyx",
    category: "Gym & Fitness Equipment",
    domain: "nattyx.co.uk",
    website: "https://nattyx.co.uk/",
    initials: "NX",
  },
  {
    name: "Lexvi",
    category: "Fashion & Lifestyle",
    domain: "lxvie.com",
    website: "https://lxvie.com/",
    initials: "LX",
  },
  {
    name: "Agile Capital Services",
    category: "Financial Consulting",
    domain: "agilecapitalservices.com",
    website: "https://www.agilecapitalservices.com/",
    initials: "ACS",
  },
  {
    name: "AIMs India",
    category: "Corporate Consulting",
    domain: "aimincorp.com",
    website: "https://www.aimincorp.com/",
    initials: "AIM",
  },
  {
    name: "Crossace",
    category: "Performance Marketing",
    domain: "crossace.com",
    website: "https://www.crossace.com/",
    initials: "CA",
  },
  {
    name: "Marketdojo",
    category: "Procurement B2B",
    domain: "marketdojo.in",
    website: "https://marketdojo.in/",
    initials: "MD",
  },
  {
    name: "Advorth",
    category: "Digital Growth",
    domain: "advorth.in",
    website: "https://www.advorth.in/",
    initials: "AD",
  },
  {
    name: "Younity",
    category: "Community Growth",
    initials: "YN",
  },
];

export const Clients: React.FC = () => {
  return (
    <section id="clients">
      <div className="wrap">
        <div className="sechead mb-12">
          <h2 className="sec">clients</h2>
          <p className="max-w-[520px] text-[16px] text-[var(--fg-3)] leading-relaxed">
            Brands whose paid campaigns I&apos;ve planned, launched, and optimized across Meta and
            Google.
          </p>
        </div>
        <div className="brands">
          {clients.map((c, i) => {
            const cardContent = (
              <div className="flex flex-col items-center justify-center text-center gap-1.5 w-full h-full">
                {c.domain ? (
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=128`}
                    alt={`${c.name} logo`}
                    width={32}
                    height={32}
                    loading="lazy"
                    className="w-8 h-8 object-contain rounded-md mb-1"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--orange)] font-bold text-xs flex items-center justify-center mb-1">
                    {c.initials}
                  </div>
                )}
                <span className="font-bold text-[15px] font-[var(--display)] text-[var(--fg-1)] leading-tight tracking-tight">
                  {c.name}
                </span>
                <span className="text-[11.5px] text-[var(--fg-4)] font-medium">
                  {c.category}
                </span>
              </div>
            );

            if (c.website) {
              return (
                <a
                  key={i}
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brandcard block no-underline"
                  title={`Visit ${c.name}`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={i} className="brandcard">
                {cardContent}
              </div>
            );
          })}
        </div>
        <div className="brandnote mt-7">
          10+ Brands Scaled · E-commerce, B2B, Finance &amp; Fitness · Meta &amp; Google Ads
        </div>
      </div>
    </section>
  );
};
