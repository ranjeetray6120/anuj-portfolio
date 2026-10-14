import React from "react";

export const Contact: React.FC = () => {
  return (
    <>
      <section id="contact" className="contact py-24">
        <div className="wrap">
          <div className="contactgrid">
            <div>
              <h2 className="text-[clamp(36px,5.2vw,64px)] font-extrabold tracking-tight">
                thank you <em>!</em>
              </h2>
              <div className="lead text-[clamp(18px,2.2vw,24px)] font-semibold text-[var(--fg-2)] mt-2">
                Looking forward to <em>working</em> with you.
              </div>
              <div className="clist mt-7 flex flex-col gap-3">
                <a href="tel:+917519010642" className="flex items-center gap-3 hover:text-[var(--orange)] transition-colors">
                  <span className="ic">✆</span>+91 7519010642
                </a>
                <a href="mailto:Anujvharti7860@gmail.com" className="flex items-center gap-3 hover:text-[var(--orange)] transition-colors">
                  <span className="ic">✉</span>Anujvharti7860@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/anuj-bharti/" target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-[var(--orange)] transition-colors">
                  <span className="ic">in</span>linkedin.com/in/anuj-bharti
                </a>
                <div className="flex items-center gap-3 text-[var(--fg-3)]">
                  <span className="ic">◉</span>Noida / Delhi NCR, India
                </div>
              </div>
            </div>
            <div className="sigcard">
              <div className="ring">
                <img
                  src="/sites/anuj-bharti/img/anuj-bharti.webp"
                  width={370}
                  height={295}
                  decoding="async"
                  alt="Anuj Bharti"
                />
              </div>
              <div className="nm font-bold text-[18px] mt-4">Anuj Bharti</div>
              <div className="rl text-[13.5px] text-[var(--fg-4)]">Performance Marketing Specialist</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-[13.5px] text-[var(--fg-4)] border-t border-[var(--border-hair)]">
        Thank you for your time and consideration.
      </footer>
    </>
  );
};
