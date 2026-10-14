import React from "react";

interface CertItem {
  title: string;
  issuer: string;
  issued: string;
  expires: string;
  credentialId: string;
}

const certList: CertItem[] = [
  {
    title: "Google Ads Apps Certification",
    issuer: "Google",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialId: "192187266",
  },
  {
    title: "AI-Powered Shopping ads Certification",
    issuer: "Google",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialId: "191329168",
  },
  {
    title: "AI-Powered Performance Ads Certification",
    issuer: "Google",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialId: "191252925",
  },
  {
    title: "Google Analytics Certification (2026)",
    issuer: "Google",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialId: "191043296",
  },
  {
    title: "Google Ads Search Professional Certification (2026)",
    issuer: "Google",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialId: "191009690",
  },
  {
    title: "AI-Powered Shopping ads Certification",
    issuer: "Google",
    issued: "Aug 2026",
    expires: "Aug 2027",
    credentialId: "190966359",
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certs" className="py-24">
      <div className="wrap">
        <div className="sechead mb-12">
          <h2 className="sec">licenses &amp; certifications</h2>
          <p className="max-w-[520px] text-[16px] text-[var(--fg-3)] leading-relaxed">
            Official Google credentials and professional certifications validating hands-on campaign expertise.
          </p>
        </div>
        <div className="certs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certList.map((c, i) => (
            <div key={i} className="cert flex flex-col justify-between p-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-[13px] font-semibold text-[var(--fg-4)] uppercase tracking-wider">
                    {c.issuer}
                  </span>
                </div>
                <b className="text-[16px] font-bold text-[var(--fg-1)] leading-snug mb-2 block">
                  {c.title}
                </b>
              </div>
              <div className="pt-3 border-t border-[var(--border-hair)] mt-4 flex flex-col gap-1 text-[12.5px] text-[var(--fg-4)]">
                <div>Issued: <span className="text-[var(--fg-2)] font-medium">{c.issued}</span> · Expires: <span className="text-[var(--fg-2)] font-medium">{c.expires}</span></div>
                <div>Credential ID: <span className="font-mono text-[var(--orange)] font-semibold">{c.credentialId}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
