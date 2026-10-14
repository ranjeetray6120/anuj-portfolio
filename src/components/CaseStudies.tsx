import React from "react";

interface CaseStudiesProps {
  openLightbox: (src: string, alt: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ openLightbox }) => {
  return (
    <>
      <section id="work" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="sechead mb-12">
            <h2 className="sec">case studies</h2>
            <p className="max-w-[520px] text-[16px] text-[var(--fg-3)] leading-relaxed">
              A showcase of the client accounts, campaigns, and optimizations I&apos;ve run to drive
              purchases, leads, and measurable return.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          {/* 1. SCRAP UNCLE */}
          <div className="study">
            <div className="top">
              <div>
                <img
                  src="/sites/anuj-bharti/img/scrap-uncle-logo.webp"
                  width={414}
                  height={177}
                  loading="lazy"
                  decoding="async"
                  className="clogo"
                  alt="Scrap Uncle logo"
                />
                <div className="name">scrap uncle</div>
                <p className="tag">
                  Google Ads &amp; Meta Ads for a scrap pickup and recycling service — scaled to the
                  largest spend in my portfolio.
                </p>
              </div>
              <div className="pill">GOOGLE ADS + META ADS</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <b>₹1.11Cr</b>
                <span>Total ad spend</span>
              </div>
              <div className="metric">
                <b>65,186</b>
                <span>Google Ads conversions</span>
              </div>
              <div className="metric">
                <b>28,336</b>
                <span>Meta pickups scheduled</span>
              </div>
              <div className="metric">
                <b>₹100.98</b>
                <span>Google cost / conversion</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>10,412</b>
                <span>Phone calls (Google)</span>
              </div>
              <div className="metric">
                <b>7.31L</b>
                <span>Clicks · 3.98% CTR</span>
              </div>
              <div className="metric">
                <b>₹7.02</b>
                <span>Meta cost per action</span>
              </div>
              <div className="metric">
                <b>5.02L</b>
                <span>Landing page views</span>
              </div>
            </div>
            <div className="insight">
              <b>key insight</b>
              Built city-by-city — Delhi, Gurugram, Noida, Ghaziabad, Faridabad and Bangalore run as
              separate campaigns so budget, bids and creative follow local demand instead of one
              national average. On Search, that discipline holds{" "}
              <span style={{ fontWeight: 700 }}>
                78.6% impression share in Delhi NCR and 90.7% in Bangalore
              </span>
              , with the ad at the absolute top of the page most of the time.
            </div>

            <div className="proof">
              <div className="shotnote">
                Account screenshots · campaign names blurred for client privacy
              </div>

              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/google-ads-campaign-dashboard-for-scrap-uncle.webp"
                  width={1400}
                  height={504}
                  loading="lazy"
                  decoding="async"
                  alt="Google Ads campaign dashboard for Scrap Uncle"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/google-ads-campaign-dashboard-for-scrap-uncle.webp",
                      "Google Ads campaign dashboard for Scrap Uncle"
                    )
                  }
                />
                <figcaption>
                  <b>Google Ads — city-wise Search campaigns</b>
                  <span>
                    1 Jan 2025 – 4 Aug 2026 · ₹65.8L cost · 65,186 conversions · ₹100.98 cost/conv ·
                    7.31L clicks · 10,412 phone calls
                  </span>
                </figcaption>
              </figure>

              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/meta-ads-manager-account-overview-for-scrap-uncle.webp"
                  width={1400}
                  height={527}
                  loading="lazy"
                  decoding="async"
                  alt="Meta Ads Manager account overview for Scrap Uncle"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/meta-ads-manager-account-overview-for-scrap-uncle.webp",
                      "Meta Ads Manager account overview for Scrap Uncle"
                    )
                  }
                />
                <figcaption>
                  <b>Meta Ads — full account, 42 campaigns</b>
                  <span>
                    1 Jun 2025 – 4 Aug 2026 · ₹45.8L spent · 28,336 pickups scheduled · ₹7.02 cost per
                    action · 5.02L landing page views
                  </span>
                </figcaption>
              </figure>

              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/meta-ads-manager-march-performance-for-scrap-uncle.webp"
                  width={1400}
                  height={535}
                  loading="lazy"
                  decoding="async"
                  alt="Meta Ads Manager March performance for Scrap Uncle"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/meta-ads-manager-march-performance-for-scrap-uncle.webp",
                      "Meta Ads Manager March performance for Scrap Uncle"
                    )
                  }
                />
                <figcaption>
                  <b>Meta Ads — single month snapshot</b>
                  <span>
                    March 2026 · ₹3.22L spent · 3,312 pickups scheduled · 52,546 link clicks · ₹6.14
                    CPC across 39 campaigns
                  </span>
                </figcaption>
              </figure>

              <div className="shots">
                <figure className="shot">
                  <img
                    src="/sites/anuj-bharti/img/google-ads-auction-insights-for-delhi-ncr.webp"
                    width={1400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    alt="Google Ads auction insights for Delhi NCR"
                    onClick={() =>
                      openLightbox(
                        "/sites/anuj-bharti/img/google-ads-auction-insights-for-delhi-ncr.webp",
                        "Google Ads auction insights for Delhi NCR"
                      )
                    }
                  />
                  <figcaption>
                    <b>Auction insights — Delhi NCR</b>
                    <span>
                      78.57% impression share · 94.20% top of page · 82.33% absolute top, ahead of
                      every competing domain
                    </span>
                  </figcaption>
                </figure>
                <figure className="shot">
                  <img
                    src="/sites/anuj-bharti/img/google-ads-auction-insights-for-bangalore.webp"
                    width={1400}
                    height={343}
                    loading="lazy"
                    decoding="async"
                    alt="Google Ads auction insights for Bangalore"
                    onClick={() =>
                      openLightbox(
                        "/sites/anuj-bharti/img/google-ads-auction-insights-for-bangalore.webp",
                        "Google Ads auction insights for Bangalore"
                      )
                    }
                  />
                  <figcaption>
                    <b>Auction insights — Bangalore</b>
                    <span>
                      90.74% impression share · 94.97% top of page · 91.28% absolute top, outranking
                      share above 88%
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* 2. PARTSBABA */}
          <div className="study">
            <div className="top">
              <div>
                <img
                  src="/sites/anuj-bharti/img/partsbaba-logo.webp"
                  width={612}
                  height={225}
                  loading="lazy"
                  decoding="async"
                  className="clogo"
                  alt="PartsBaba logo"
                />
                <div className="name">partsbaba</div>
                <p className="tag">
                  Google Ads and Meta Ads for an electronic parts supply-chain brand — Search,
                  Shopping, Performance Max and paid social running together.
                </p>
              </div>
              <div className="pill">GOOGLE ADS + META ADS</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <b>₹3.4L</b>
                <span>Google Ads cost</span>
              </div>
              <div className="metric">
                <b>₹3.66Cr</b>
                <span>Google conversion value</span>
              </div>
              <div className="metric">
                <b>107x</b>
                <span>Google ROAS (10,723%)</span>
              </div>
              <div className="metric">
                <b>22.4K</b>
                <span>Google conversions</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>₹1.96L</b>
                <span>Meta ad spend</span>
              </div>
              <div className="metric">
                <b>1,976</b>
                <span>Meta purchases</span>
              </div>
              <div className="metric">
                <b>10.43x</b>
                <span>Meta ROAS</span>
              </div>
              <div className="metric">
                <b>₹20.5L</b>
                <span>Meta conversion value</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>47,531</b>
                <span>Adds to cart</span>
              </div>
              <div className="metric">
                <b>₹99.43</b>
                <span>Customer acquisition cost</span>
              </div>
              <div className="metric">
                <b>₹1,037</b>
                <span>Average order value</span>
              </div>
              <div className="metric">
                <b>51%</b>
                <span>Search impression share</span>
              </div>
            </div>
            <div className="insight">
              <b>key insight</b>
              Two channels doing two jobs — Google Search and Shopping catch people already hunting
              for a specific part at ₹1.47 a click, while Meta prospecting and lookalikes build the
              demand. Against amazon.in in the same auctions, the account holds 51% impression share
              and shows at the absolute top of the page 86% of the time.
            </div>

            <div className="proof">
              <div className="shotnote">
                Account screenshots · campaign names blurred for client privacy
              </div>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/google-ads-overview-for-partsbaba.webp"
                  width={1400}
                  height={359}
                  loading="lazy"
                  decoding="async"
                  alt="Google Ads overview for PartsBaba"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/google-ads-overview-for-partsbaba.webp",
                      "Google Ads overview for PartsBaba"
                    )
                  }
                />
                <figcaption>
                  <b>Google Ads — account overview</b>
                  <span>
                    18 Dec 2024 – 22 Sep 2025 · ₹341K cost · 36.6M conversion value · 22.4K
                    conversions · actual ROAS 10,723.73%
                  </span>
                </figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/google-ads-campaign-breakdown-for-partsbaba.webp"
                  width={1400}
                  height={603}
                  loading="lazy"
                  decoding="async"
                  alt="Google Ads campaign breakdown for PartsBaba"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/google-ads-campaign-breakdown-for-partsbaba.webp",
                      "Google Ads campaign breakdown for PartsBaba"
                    )
                  }
                />
                <figcaption>
                  <b>Google Ads — Performance Max, Shopping &amp; Search</b>
                  <span>
                    1,67,571 clicks on the top campaign at ₹1.47 avg. CPC · 10.17% conversion rate ·
                    ₹13.88 cost per conversion · 83% budget impression share on Shopping
                  </span>
                </figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/meta-ads-manager-campaigns-for-partsbaba.webp"
                  width={1400}
                  height={598}
                  loading="lazy"
                  decoding="async"
                  alt="Meta Ads Manager campaigns for PartsBaba"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/meta-ads-manager-campaigns-for-partsbaba.webp",
                      "Meta Ads Manager campaigns for PartsBaba"
                    )
                  }
                />
                <figcaption>
                  <b>Meta Ads — 12 campaigns</b>
                  <span>
                    1 Jun – 22 Sep 2025 · ₹1,96,471.37 spent · 1,976 purchases · 10.43 average ROAS
                    · ₹20,49,574 conversion value · 47,531 adds to cart
                  </span>
                </figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/google-ads-auction-insights-for-partsbaba.webp"
                  width={1067}
                  height={627}
                  loading="lazy"
                  decoding="async"
                  alt="Google Ads auction insights for PartsBaba"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/google-ads-auction-insights-for-partsbaba.webp",
                      "Google Ads auction insights for PartsBaba"
                    )
                  }
                />
                <figcaption>
                  <b>Auction insights — vs Amazon and direct competitors</b>
                  <span>
                    51% impression share · 86% absolute top of page, against amazon.in at 46% · 31%
                    overlap with the closest competitor
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* 3. MATRI */}
          <div className="study">
            <div className="top">
              <div>
                <img
                  src="/sites/anuj-bharti/img/matri-logo.webp"
                  width={570}
                  height={186}
                  loading="lazy"
                  decoding="async"
                  className="clogo"
                  alt="Matri logo"
                />
                <div className="name">matri</div>
                <p className="tag">
                  Google Ads and Meta Ads for a D2C brand — the highest return-on-spend account in my
                  portfolio.
                </p>
              </div>
              <div className="pill">GOOGLE ADS + META ADS</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <b>₹30K</b>
                <span>Google Ads cost</span>
              </div>
              <div className="metric">
                <b>₹2.49L</b>
                <span>Google conversion value</span>
              </div>
              <div className="metric">
                <b>8.31x</b>
                <span>Google ROAS (830.95%)</span>
              </div>
              <div className="metric">
                <b>2.94K</b>
                <span>Clicks</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>₹30,603</b>
                <span>Meta ad spend</span>
              </div>
              <div className="metric">
                <b>81</b>
                <span>Purchases</span>
              </div>
              <div className="metric">
                <b>5.91x</b>
                <span>Meta average ROAS</span>
              </div>
              <div className="metric">
                <b>₹1.81L</b>
                <span>Meta conversion value</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>20.39x</b>
                <span>Best ad set ROAS</span>
              </div>
              <div className="metric">
                <b>385</b>
                <span>Adds to cart</span>
              </div>
              <div className="metric">
                <b>214</b>
                <span>Checkouts initiated</span>
              </div>
              <div className="metric">
                <b>₹108.68</b>
                <span>Lowest cost per purchase</span>
              </div>
            </div>
            <div className="insight">
              <b>key insight</b>
              Small budgets, tight targeting. Rather than scaling spend, the work went into keyword
              intent and audience quality — which is why a ₹30K month returned 8x on Search and the
              best Meta ad sets crossed 20x.
            </div>

            <div className="proof">
              <div className="shotnote">Account screenshots</div>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/google-ads-performance-for-matri.webp"
                  width={1280}
                  height={279}
                  loading="lazy"
                  decoding="async"
                  alt="Google Ads performance for Matri"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/google-ads-performance-for-matri.webp",
                      "Google Ads performance for Matri"
                    )
                  }
                />
                <figcaption>
                  <b>Google Ads — performance snapshot</b>
                  <span>
                    1–18 Jun 2025 · ₹30K cost · ₹249K conversion value · 2.94K clicks · actual ROAS
                    830.95%
                  </span>
                </figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/meta-ads-sales-columns-for-matri.webp"
                  width={985}
                  height={362}
                  loading="lazy"
                  decoding="async"
                  alt="Meta Ads sales columns for Matri"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/meta-ads-sales-columns-for-matri.webp",
                      "Meta Ads sales columns for Matri"
                    )
                  }
                />
                <figcaption>
                  <b>Meta Ads — sales view</b>
                  <span>
                    ₹30,603.26 spent · 81 purchases · 5.91 average ROAS · ₹1,81,016 conversion value ·
                    385 adds to cart · 214 checkouts initiated
                  </span>
                </figcaption>
              </figure>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/best-performing-matri-ad-sets.webp"
                  width={572}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  alt="Best performing Matri ad sets"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/best-performing-matri-ad-sets.webp",
                      "Best performing Matri ad sets"
                    )
                  }
                />
                <figcaption>
                  <b>Best performing ad sets</b>
                  <span>
                    16.36x, 16.82x, 11.77x and 20.39x purchase ROAS · cost per purchase between
                    ₹108.68 and ₹191.08 · 16.11 average across the view
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* 4. VIOC */}
          <div className="study">
            <div className="top">
              <div>
                <img
                  src="/sites/anuj-bharti/img/vioc-logo.webp"
                  width={678}
                  height={258}
                  loading="lazy"
                  decoding="async"
                  className="clogo"
                  alt="VIOC logo"
                />
                <div className="name">vioc</div>
                <p className="tag">
                  Meta Ads for a leading cancer care centre — lead form and WhatsApp campaigns built
                  for qualified patient enquiries.
                </p>
              </div>
              <div className="pill">HEALTHCARE · LEAD GEN</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <b>₹1.72L</b>
                <span>Meta ad spend</span>
              </div>
              <div className="metric">
                <b>4.16L</b>
                <span>Reach</span>
              </div>
              <div className="metric">
                <b>225+</b>
                <span>Lead form submissions</span>
              </div>
              <div className="metric">
                <b>1,225+</b>
                <span>WhatsApp conversations</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>11</b>
                <span>Ad sets live</span>
              </div>
              <div className="metric">
                <b>₹34.74</b>
                <span>Best cost per conversation</span>
              </div>
              <div className="metric">
                <b>₹133.35</b>
                <span>Best cost per lead form</span>
              </div>
              <div className="metric">
                <b>2.74</b>
                <span>Avg. frequency</span>
              </div>
            </div>
            <div className="insight">
              <b>key insight</b>
              Sensitive category, so the objective mix mattered more than volume — lead forms
              captured high-intent patients while WhatsApp handled the ones who wanted to talk first,
              at roughly a tenth of the cost per result.
            </div>

            <div className="proof">
              <div className="shotnote">
                Account screenshot · ad set names blurred for client privacy
              </div>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/meta-ads-manager-ad-sets-for-vioc-cancer-care-campai.webp"
                  width={1148}
                  height={460}
                  loading="lazy"
                  decoding="async"
                  alt="Meta Ads Manager ad sets for VIOC cancer care campaigns"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/meta-ads-manager-ad-sets-for-vioc-cancer-care-campai.webp",
                      "Meta Ads Manager ad sets for VIOC cancer care campaigns"
                    )
                  }
                />
                <figcaption>
                  <b>Meta Ads — lead forms &amp; WhatsApp ad sets</b>
                  <span>
                    1 Apr – 4 Aug 2026 · ₹1.72L spent across 11 ad sets · 415,979 reach · lead forms
                    down to ₹133 and messaging conversations down to ₹34.74 per result
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* 5. ECOFREAKY */}
          <div className="study">
            <div className="top">
              <div>
                <img
                  src="/sites/anuj-bharti/img/ecofreaky-logo.webp"
                  width={288}
                  height={177}
                  loading="lazy"
                  decoding="async"
                  className="clogo"
                  alt="EcoFreaky logo"
                />
                <div className="name">ecofreaky</div>
                <p className="tag">
                  Meta Ads for a D2C brand — conversion-focused targeting and optimization across 21
                  campaigns.
                </p>
              </div>
              <div className="pill">META ADS · E-COMMERCE</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <b>₹6.09L</b>
                <span>Ad spend</span>
              </div>
              <div className="metric">
                <b>3,579</b>
                <span>Purchases</span>
              </div>
              <div className="metric">
                <b>3.57x</b>
                <span>Average ROAS</span>
              </div>
              <div className="metric">
                <b>₹21.7L</b>
                <span>Purchase value</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>22,421</b>
                <span>Adds to cart</span>
              </div>
              <div className="metric">
                <b>₹170</b>
                <span>Customer acquisition cost</span>
              </div>
              <div className="metric">
                <b>27</b>
                <span>Ad sets live</span>
              </div>
              <div className="metric">
                <b>21</b>
                <span>Campaigns</span>
              </div>
            </div>
            <div className="insight">
              <b>key insight</b>
              The top two ad sets carry most of the spend and still hold ROAS around 3x — the rest of
              the account exists to keep testing new angles without dragging the blended return down.
            </div>

            <div className="proof">
              <div className="shotnote">
                Account screenshot · ad set names blurred for client privacy
              </div>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/meta-ads-manager-ad-sets-for-ecofreaky.webp"
                  width={1119}
                  height={542}
                  loading="lazy"
                  decoding="async"
                  alt="Meta Ads Manager ad sets for Ecofreaky"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/meta-ads-manager-ad-sets-for-ecofreaky.webp",
                      "Meta Ads Manager ad sets for Ecofreaky"
                    )
                  }
                />
                <figcaption>
                  <b>Meta Ads — 27 ad sets, sales columns</b>
                  <span>
                    1 Jan 2025 – 4 Aug 2026 · ₹6,08,923.89 spent · 3,579 purchases · ₹21,72,142.37
                    conversion value · 3.57 average purchase ROAS
                  </span>
                </figcaption>
              </figure>

              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/best-performing-ecofreaky-ad-set-in-meta-ads-manager.webp"
                  width={1400}
                  height={309}
                  loading="lazy"
                  decoding="async"
                  alt="Best performing Ecofreaky ad set in Meta Ads Manager"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/best-performing-ecofreaky-ad-set-in-meta-ads-manager.webp",
                      "Best performing Ecofreaky ad set in Meta Ads Manager"
                    )
                  }
                />
                <figcaption>
                  <b>Best performing ad set — 5.00x ROAS</b>
                  <span>
                    ₹57,019.37 spent · 513 purchases · ₹2,85,178.19 conversion value · 2,599 adds to
                    cart · 1,465 checkouts initiated
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* 6. JK STONE */}
          <div className="study">
            <div className="top">
              <div>
                <img
                  src="/sites/anuj-bharti/img/jk-stones-logo.webp"
                  width={300}
                  height={216}
                  loading="lazy"
                  decoding="async"
                  className="clogo"
                  alt="JK Stones logo"
                />
                <div className="name">jk stone</div>
                <p className="tag">
                  Google Search campaigns for commercial stone and cladding enquiries — pure B2B lead
                  generation across All India.
                </p>
              </div>
              <div className="pill">GOOGLE ADS · B2B</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <b>₹1.69L</b>
                <span>Ad spend</span>
              </div>
              <div className="metric">
                <b>189</b>
                <span>Lead form submissions</span>
              </div>
              <div className="metric">
                <b>₹892</b>
                <span>Cost per lead</span>
              </div>
              <div className="metric">
                <b>33</b>
                <span>Phone calls</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>13.06%</b>
                <span>CTR</span>
              </div>
              <div className="metric">
                <b>6,573</b>
                <span>Clicks</span>
              </div>
              <div className="metric">
                <b>₹25.66</b>
                <span>Avg. CPC</span>
              </div>
              <div className="metric">
                <b>2.88%</b>
                <span>Conversion rate</span>
              </div>
            </div>
            <div className="insight">
              <b>key insight</b>
              A 13% CTR on Search means the keywords and copy are matched tightly to buyer intent.
              The cladding campaign delivered three times the leads of the cobble campaign at a
              lower cost per lead — so that is where the budget went.
            </div>

            <div className="proof">
              <div className="shotnote">
                Account screenshot · campaign names blurred for client privacy
              </div>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/google-ads-campaigns-for-jk-stone.webp"
                  width={1400}
                  height={255}
                  loading="lazy"
                  decoding="async"
                  alt="Google Ads campaigns for JK Stone"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/google-ads-campaigns-for-jk-stone.webp",
                      "Google Ads campaigns for JK Stone"
                    )
                  }
                />
                <figcaption>
                  <b>Google Ads — B2B lead generation campaigns</b>
                  <span>
                    ₹1,68,672.75 cost · 50,345 impressions · 6,573 clicks · 189 lead form submissions
                    · ₹892.45 cost per conversion · 33 phone calls
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* 7. TABBSZ */}
          <div className="study">
            <div className="top">
              <div>
                <img
                  src="/sites/anuj-bharti/img/tabbsz-logo.webp"
                  width={486}
                  height={192}
                  loading="lazy"
                  decoding="async"
                  className="clogo"
                  alt="TABBSZ logo"
                />
                <div className="name">tabbsz</div>
                <p className="tag">
                  Meta Ads for an e-commerce brand — a full funnel of prospecting, retargeting and
                  conversion campaigns built for purchases.
                </p>
              </div>
              <div className="pill">META ADS · E-COMMERCE</div>
            </div>
            <div className="metrics">
              <div className="metric">
                <b>₹10.47L</b>
                <span>Ad spend</span>
              </div>
              <div className="metric">
                <b>7,863</b>
                <span>Purchases</span>
              </div>
              <div className="metric">
                <b>3.03x</b>
                <span>Average ROAS</span>
              </div>
              <div className="metric">
                <b>₹31.7L</b>
                <span>Conversion value</span>
              </div>
            </div>
            <div className="metrics" style={{ marginTop: 16 }}>
              <div className="metric">
                <b>48</b>
                <span>Campaigns run</span>
              </div>
              <div className="metric">
                <b>29,308</b>
                <span>Checkouts initiated</span>
              </div>
              <div className="metric">
                <b>14,282</b>
                <span>Payment info added</span>
              </div>
              <div className="metric">
                <b>₹2.94</b>
                <span>Cost per click</span>
              </div>
            </div>
            <div className="insight">
              <b>key insight</b>
              Forty-eight campaigns across the full funnel — broad prospecting fed the top, dynamic
              retargeting closed the bottom, and the blended return held at 3.03x on a ₹10L spend.
            </div>

            <div className="proof">
              <div className="shotnote">
                Account screenshot · campaign names blurred for client privacy
              </div>
              <figure className="shot">
                <img
                  src="/sites/anuj-bharti/img/meta-ads-manager-campaigns-for-tabbsz.webp"
                  width={1400}
                  height={574}
                  loading="lazy"
                  decoding="async"
                  alt="Meta Ads Manager campaigns for TABBSZ"
                  onClick={() =>
                    openLightbox(
                      "/sites/anuj-bharti/img/meta-ads-manager-campaigns-for-tabbsz.webp",
                      "Meta Ads Manager campaigns for TABBSZ"
                    )
                  }
                />
                <figcaption>
                  <b>Meta Ads — 48 campaigns, sales ROAS view</b>
                  <span>
                    1 Sep 2024 – 28 Feb 2025 · ₹10,47,150.18 spent · 7,863 purchases · ₹31,74,510.25
                    conversion value · 3.03 average purchase ROAS · 1.86% CTR
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
