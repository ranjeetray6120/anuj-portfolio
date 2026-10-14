import React from "react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="wrap">
        <div className="twocol">
          <div>
            <h2 className="sec" style={{ marginBottom: 26 }}>
              experience
            </h2>
            <div className="box">
              <div className="tl">
                <div className="item">
                  <h4>Google Ads Executive</h4>
                  <div className="meta">May 2026 – Present · Full-time · FK Sports</div>
                  <div className="text-[13px] text-[var(--fg-4)] mb-2">Noida, Uttar Pradesh, India · On-site</div>
                  <ul>
                    <li>Managed and optimized Google Ads campaigns across Search, Shopping, and Performance Max to scale e-commerce revenue.</li>
                    <li>Owned campaign strategy, feed diagnostics in Google Merchant Center, and tracking with Google Tag Manager &amp; GA4.</li>
                    <li>Executed detailed audience segmentation, negative keyword filtering, and budget pacing for maximum ROAS.</li>
                  </ul>
                </div>
                <div className="item">
                  <h4>Google Ads Specialist</h4>
                  <div className="meta">Sep 2024 – Mar 2026 · 1 yr 7 mos · Cognizant</div>
                  <div className="text-[13px] text-[var(--fg-4)] mb-2">Gurugram, Haryana, India · On-site</div>
                  <ul>
                    <li>Supported global Google Ads advertisers through phone, email, and chat, delivering strategic account resolutions.</li>
                    <li>Handled complex campaign structuring, conversion tracking diagnostics, Google Ads billing, and policy appeals.</li>
                    <li>Audited live ad accounts to identify growth bottlenecks and recommended high-converting paid media strategies.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="sec" style={{ marginBottom: 26 }}>
              education
            </h2>
            <div className="box edu">
              <div className="item">
                <h4>B-Tech</h4>
                <div className="field">Computer Science</div>
                <div className="meta">Baba Banda Singh Bahadur Engineering College · May 2020 – May 2024</div>
              </div>
              <div className="item">
                <h4>Licenses &amp; Certifications</h4>
                <div className="field">6x Google Certified Professional</div>
                <div className="meta">Google Ads Apps · Shopping · Performance Ads · Analytics · Search</div>
              </div>
            </div>
            <p className="note">
              Every campaign I&apos;ve run has sharpened the same instinct: read the data first, respect the metrics, then scale what performs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
