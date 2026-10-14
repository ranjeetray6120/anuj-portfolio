import React from "react";

export const Hero: React.FC = () => {
  return (
    <header className="hero pt-[26px]">
      <div className="wrap">
        <div className="herotop flex justify-between items-start gap-5">
          <div className="hello inline-block border-[1.5px] border-[var(--border)] rounded-full px-5 py-[7px] font-semibold text-[15px]">
            Hello! 👋
          </div>
          <div className="yrs text-right shrink-0">
            <b className="block font-extrabold text-[clamp(24px,3.2vw,34px)] tracking-tight leading-none">
              2+ Years
            </b>
            <span className="block text-[13.5px] text-[var(--fg-4)] mt-1">
              Meta &amp; Google Ads
            </span>
          </div>
        </div>

        <h1 className="big font-extrabold tracking-[-0.04em] leading-[1.02] text-[clamp(38px,5.6vw,68px)] mt-[14px]">
          I&apos;m <em>Anuj Bharti</em>
        </h1>
        <div className="sub font-extrabold tracking-[-0.03em] text-[clamp(22px,3.4vw,42px)] mt-[2px]">
          A Performance Marketing Specialist
        </div>

        <div className="herogrid">
          <div>
            <div className="quote border-l-[3px] border-[var(--orange)] pl-5 max-w-[400px]">
              <p className="text-[17px] leading-[1.62] text-[var(--fg-2)]">
                Helping brands scale profitably through Meta Ads, Google Ads, and data-driven
                performance marketing — turning ad spend into measurable revenue.
              </p>
            </div>
            <div className="chiprow flex flex-wrap gap-[10px] mt-[26px] max-w-[640px]">
              <div className="chip">🎯 Lead Generation</div>
              <div className="chip">🚀 Meta Ads</div>
              <div className="chip">📊 Google Ads</div>
              <div className="chip">📈 ROAS Optimization</div>
              <div className="chip">🧾 Analytics</div>
            </div>
          </div>

          <div className="portrait relative justify-self-center">
            <img
              src="/sites/anuj-bharti/anuj-bharti.webp"
              width={760}
              height={723}
              alt="Anuj Bharti"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="statbar mt-14">
        <div className="inner">
          <div className="stat">
            <b>₹2Cr</b>
            <span>Ad Spend Managed</span>
          </div>
          <div className="stat">
            <b>₹4.8Cr</b>
            <span>Revenue Generated</span>
          </div>
          <div className="stat">
            <b>4–10x</b>
            <span>ROAS</span>
          </div>
          <div className="stat">
            <b>3,000+</b>
            <span>Leads Generated</span>
          </div>
          <div className="stat">
            <b>65,186</b>
            <span>Conversions Driven</span>
          </div>
          <div className="stat">
            <b>13</b>
            <span>Client Accounts</span>
          </div>
        </div>
      </div>
    </header>
  );
};
