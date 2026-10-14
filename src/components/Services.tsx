import React from "react";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="wrap">
        <div className="sechead mb-12">
          <h2 className="sec">what i do</h2>
          <p className="max-w-[520px] text-[16px] text-[var(--fg-3)] leading-relaxed">
            I help businesses grow through paid acquisition, conversion-focused creative, and
            data-driven optimization that shows up in the numbers.
          </p>
        </div>
        <div className="grid3 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card">
            <div className="num">01</div>
            <h3>Meta Ads</h3>
            <p>
              Campaign strategy, lead generation, purchase optimization, and remarketing across
              Facebook &amp; Instagram.
            </p>
          </div>
          <div className="card">
            <div className="num">02</div>
            <h3>Google Ads</h3>
            <p>
              Search campaigns, keyword research, ad copywriting, and performance tracking built for
              high-intent demand.
            </p>
          </div>
          <div className="card">
            <div className="num">03</div>
            <h3>Lead Generation</h3>
            <p>
              Lead forms, WhatsApp and call campaigns tuned for qualified enquiries, not just cheap
              volume.
            </p>
          </div>
          <div className="card">
            <div className="num">04</div>
            <h3>ROAS Optimization</h3>
            <p>
              Audience segmentation, creative testing, and bid strategy to push return on ad spend
              upward.
            </p>
          </div>
          <div className="card">
            <div className="num">05</div>
            <h3>Budget Management</h3>
            <p>
              Daily pacing and scaling decisions across accounts, from ₹1L test budgets to ₹65L+
              spends.
            </p>
          </div>
          <div className="card">
            <div className="num">06</div>
            <h3>KPI Reporting</h3>
            <p>
              Clear reporting on spend, CPL, CPA, and ROAS using Google Analytics and Google My
              Business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
