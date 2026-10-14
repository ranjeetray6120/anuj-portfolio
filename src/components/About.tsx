import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="wrap">
        <div className="sechead mb-12">
          <h2 className="sec">about</h2>
          <p className="max-w-[520px] text-[16px] text-[var(--fg-3)] leading-relaxed">
            Performance marketer based in Delhi NCR, running high-ROI paid acquisition across Google
            and Meta for e-commerce, D2C, and growth brands.
          </p>
        </div>
        <div className="about">
          <div>
            <p>
              Hi, I&apos;m Anuj Bharti — a results-driven Performance Marketer with{" "}
              <span className="hl">hands-on expertise in Google Ads and Meta Ads</span>, currently
              working as a Google Ads Executive at FK Sports and previously at Cognizant.
            </p>
            <p>
              I specialize in turning paid media into scalable growth: structuring search, shopping,
              and Performance Max campaigns from scratch, optimizing feed diagnostics, and implementing
              robust tracking frameworks across GA4, Google Tag Manager, and Meta Conversions API.
            </p>
            <p>
              My focus is always where strategy meets measurable return: granular keyword intent,
              audience segmentation, offer testing, and disciplined budget pacing against the one
              metric that matters — bottom-line profitability and ROAS.
            </p>
          </div>
          <div className="aboutcard">
            <h4>Quick facts</h4>
            <ul>
              <li>
                <b>Role</b>
                <span>Google Ads Executive, FK Sports</span>
              </li>
              <li>
                <b>Prior</b>
                <span>Google Ads Specialist, Cognizant</span>
              </li>
              <li>
                <b>Base</b>
                <span>Noida / Delhi NCR, India</span>
              </li>
              <li>
                <b>Education</b>
                <span>B-Tech, Computer Science</span>
              </li>
              <li>
                <b>Certifications</b>
                <span>6x Google Certified Professional</span>
              </li>
              <li>
                <b>Platforms</b>
                <span>Google Ads · Meta Ads · GA4 · GTM</span>
              </li>
              <li>
                <b>Open to</b>
                <span>Full-time roles &amp; growth consulting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
