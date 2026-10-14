import React from "react";

export const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-24">
      <div className="wrap">
        <div className="sechead mb-12">
          <h2 className="sec">tools &amp; platforms</h2>
          <p className="max-w-[520px] text-[16px] text-[var(--fg-3)] leading-relaxed">
            Enterprise advertising, server-side attribution, and analytics tools deployed to run high-ROI campaigns.
          </p>
        </div>
        <div className="tools">
          {/* Google Ads */}
          <div className="tool">
            <svg viewBox="0 0 256 230" fill="none" aria-hidden="true">
              <path
                fill="#FBBC04"
                d="M5.888 166.405L90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23z"
              />
              <path
                fill="#4285F4"
                d="M250.084 166.402L165.092 20.906C153.21 1.132 127.62-6.054 106.601 5.625S79.182 42.462 91.064 63.119l84.992 145.514c11.882 19.765 37.473 26.95 58.492 15.272c20.1-11.68 27.418-37.73 15.536-57.486z"
              />
              <ellipse cx="42.664" cy="187.924" fill="#34A853" rx="42.664" ry="41.604" />
            </svg>
            <small>Google Ads</small>
          </div>

          {/* Meta Ads */}
          <div className="tool">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="metaToolGradSimple" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#0064E0" />
                  <stop offset="45%" stopColor="#0072F5" />
                  <stop offset="85%" stopColor="#0081FB" />
                  <stop offset="100%" stopColor="#0064E0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#metaToolGradSimple)"
                d="M23.6 7.6c-2.6 0-4.8 1.4-6.4 3.4-1.6-2-3.8-3.4-6.4-3.4C6 7.6 2 11.6 2 16.8c0 5.2 4 9.2 8.8 9.2 2.6 0 4.8-1.4 6.4-3.4 1.6 2 3.8 3.4 6.4 3.4 4.8 0 8.8-4 8.8-9.2 0-5.2-4-9.2-8.8-9.2zm-12.8 15c-3.1 0-5.4-2.5-5.4-5.8s2.3-5.8 5.4-5.8c2.2 0 4.2 1.8 5.4 4.6-1.2 2.8-3.2 7-5.4 7zm12.8 0c-2.2 0-4.2-4.2-5.4-7 1.2-2.8 3.2-4.6 5.4-4.6 3.1 0 5.4 2.5 5.4 5.8s-2.3 5.8-5.4 5.8z"
              />
            </svg>
            <small>Meta Ads Manager</small>
          </div>

          {/* GA4 */}
          <div className="tool">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22.84 2.998v17.999c.009 1.647-1.32 2.99-2.967 2.998a2.98 2.98 0 0 1-.368-.02c-1.528-.227-2.648-1.557-2.61-3.101V3.12c-.038-1.545 1.085-2.876 2.615-3.1 1.636-.191 3.118.98 3.31 2.616.014.12.02.24.02.362Z"
                fill="#F9AB00"
              />
              <path
                d="M12.005 9.045c-.017 0-.034 0-.051 0-1.65.09-2.93 1.474-2.891 3.126v7.985c0 2.166.953 3.482 2.35 3.762 1.612.327 3.184-.715 3.51-2.327.04-.197.06-.398.06-.6v-8.958c.003-1.647-1.33-2.985-2.978-2.988Z"
                fill="#E37400"
              />
              <circle cx="4.133" cy="21.027" r="2.973" fill="#F9AB00" />
            </svg>
            <small>Google Analytics 4</small>
          </div>

          {/* GTM */}
          <div className="tool">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12.003 0a3 3 0 0 0-2.121 5.121l6.865 6.865-4.446 4.541 1.745 1.836a3.432 3.432 0 0 1 .7.739l.012.011-.001.002a3.432 3.432 0 0 1 .609 1.953 3.432 3.432 0 0 1-.09.78l7.75-7.647c.031-.029.067-.05.098-.08.023-.023.038-.052.06-.076a2.994 2.994 0 0 0-.06-4.166l-9-9A2.99 2.99 0 0 0 12.003 0Z"
                fill="#246FDB"
              />
              <path
                d="M8.63 2.133L.88 9.809a2.998 2.998 0 0 0 0 4.238l7.7 7.75a3.432 3.432 0 0 1-.077-.729 3.432 3.432 0 0 1 3.431-3.431 3.432 3.432 0 0 1 .826.101l-5.523-5.81 4.371-4.373-2.08-2.08c-.903-.904-1.193-2.183-.898-3.342Z"
                fill="#4285F4"
              />
              <circle cx="11.934" cy="21.069" r="2.932" fill="#8AB4F8" />
            </svg>
            <small>Google Tag Manager</small>
          </div>

          {/* Google Merchant Center */}
          <div className="tool">
            <svg viewBox="0 0 256 256" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="gmcGradSimple" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#246FDB" />
                  <stop offset="5.5%" stopColor="#2973DF" />
                  <stop offset="28%" stopColor="#377DEB" />
                  <stop offset="55%" stopColor="#3F83F2" />
                  <stop offset="100%" stopColor="#4285F4" />
                </linearGradient>
              </defs>
              <path
                fill="#EA4335"
                d="M173.2 82.8c25 25 25 65.5 0 90.5-12.5 12.5-12.5 32.8 0 45.2 12.5 12.5 32.8 12.5 45.3 0 50-50 50-131 0-181z"
              />
              <path
                fill="url(#gmcGradSimple)"
                d="M218.4 37.5c-50-50-130.9-50-180.9 0s-50 131 0 181l45.3-45.2c-25-25-25-65.5 0-90.5s65.5-25 90.5 0c12.5 12.5 32.8 12.5 45.3 0 12.3-12.5 12.3-32.8-.2-45.3"
              />
              <path
                fill="#FBBC04"
                d="m218.4 218.5-45.3-45.2c-25 25-65.5 25-90.5 0l-45.3 45.2c50.2 50 131.1 50 181.1 0"
              />
              <path
                fill="#34A853"
                d="M37.5 173.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.8 0 45.3-32.7 12.5-45.2 0-12.5-32.8 0-45.3"
              />
            </svg>
            <small>Merchant Center</small>
          </div>

          {/* Meta CAPI */}
          <div className="tool">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path
                fill="#0081FB"
                d="M23.6 7.6c-2.6 0-4.8 1.4-6.4 3.4-1.6-2-3.8-3.4-6.4-3.4C6 7.6 2 11.6 2 16.8c0 5.2 4 9.2 8.8 9.2 2.6 0 4.8-1.4 6.4-3.4 1.6 2 3.8 3.4 6.4 3.4 4.8 0 8.8-4 8.8-9.2 0-5.2-4-9.2-8.8-9.2zm-12.8 15c-3.1 0-5.4-2.5-5.4-5.8s2.3-5.8 5.4-5.8c2.2 0 4.2 1.8 5.4 4.6-1.2 2.8-3.2 7-5.4 7zm12.8 0c-2.2 0-4.2-4.2-5.4-7 1.2-2.8 3.2-4.6 5.4-4.6 3.1 0 5.4 2.5 5.4 5.8s-2.3 5.8-5.4 5.8z"
              />
            </svg>
            <small>Meta CAPI</small>
          </div>

          {/* Looker Studio */}
          <div className="tool">
            <svg viewBox="0 0 256 239" fill="none" aria-hidden="true">
              <path fill="#669DF6" d="M224.022 173.159h-92.959c-22.48 0-35.07 15.736-35.07 32.485 0 15.455 10.679 32.484 35.07 32.484h92.959Z" />
              <ellipse cx="224.022" cy="205.587" fill="#1A73E8" rx="31.979" ry="32.485" />
              <path fill="#669DF6" d="M128.028 86.551H35.07C12.59 86.551 0 102.288 0 119.036c0 15.456 10.678 32.485 35.07 32.485h92.958Z" />
              <ellipse cx="128.028" cy="119.036" fill="#1A73E8" rx="31.979" ry="32.485" />
              <path fill="#669DF6" d="M224.022 0h-92.959c-22.48 0-35.07 15.737-35.07 32.485 0 15.455 10.679 32.485 35.07 32.485h92.959Z" />
              <ellipse cx="224.022" cy="32.485" fill="#1A73E8" rx="31.979" ry="32.485" />
            </svg>
            <small>Looker Studio</small>
          </div>

          {/* Google Search Console */}
          <div className="tool">
            <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path
                d="m11.081 30.527-4.72 4.721a.933.933 0 0 1-1.317 0l-.292-.292a.933.933 0 0 1 0-1.316l4.72-4.721a.933.933 0 0 1 1.318 0l.291.291a.93.93 0 0 1 0 1.317Z"
                fill="#FBBC04"
              />
              <path
                d="M23.75 32.5h6.042a6.04 6.04 0 0 0 6.041-6.042v-16.25a6.04 6.04 0 0 0-6.041-6.041 6.04 6.04 0 0 0-6.042 6.041Z"
                fill="#4285F4"
              />
              <path
                d="M13.75 32.5a6.04 6.04 0 0 0 6.042-6.042 6.04 6.04 0 0 0-6.042-6.041 6.04 6.04 0 0 0-6.042 6.041 6.04 6.04 0 0 0 6.042 6.042Z"
                fill="#FBBC04"
              />
              <path
                d="M27.97 32.5h-5.887a6.04 6.04 0 0 1-6.041-6.042v-7.916a6.04 6.04 0 0 1 6.041-6.042a6.04 6.04 0 0 1 6.042 6.042v13.804a.154.154 0 0 1-.154.154Z"
                fill="#34A853"
              />
            </svg>
            <small>Search Console</small>
          </div>

          {/* Semrush */}
          <div className="tool">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002Zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002Zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114Z"
                fill="#FF642D"
              />
            </svg>
            <small>Semrush</small>
          </div>

          {/* Ahrefs */}
          <div className="tool">
            <svg viewBox="0 0 128 128" fill="none" aria-hidden="true">
              <path
                d="M24 8v24h64v16l-26.104.456C26.8 51.712 16 60.08 16 84.96v6.512C16 110.536 30.328 120 48 120c7.984 0 16.32-1.56 25.04-5.976l14.96-6.024v12h24v-112H24Zm64 76-18.112 7.472C63.592 94.96 57.056 96.816 51.968 96.816c-6.288 0-11.968-1.136-11.968-8.816v-5.12c.48-8.136 7.376-11.176 26.256-13.032l21.744-1.848V84Z"
                fill="#FF8000"
              />
            </svg>
            <small>Ahrefs</small>
          </div>

          {/* Screaming Frog */}
          <div className="tool">
            <svg viewBox="0 0 128 128" fill="none" aria-hidden="true">
              <path
                d="M14.16 48.37c-.43 4.5-10 10.84-9.57 26.89s13.09 44.06 57.72 44.77c44.63.7 60.96-27.31 61.1-46.6.13-17.88-8.58-21.43-9.57-26.04-.84-3.94 6.76-21.96-10.28-28.44-20.11-7.65-27.6 11.68-28.16 12.1s-6.05.7-10.84.7-10 0-10.56-.56S41.19 11.2 23.45 19.36c-16.64 7.67-9.01 26.05-9.29 29.01Z"
                fill="#72B52D"
              />
              <circle cx="95" cy="42" r="3" fill="#FFFFFF" />
              <circle cx="34" cy="42" r="3" fill="#FFFFFF" />
            </svg>
            <small>Screaming Frog</small>
          </div>

          {/* Microsoft Clarity */}
          <div className="tool">
            <svg viewBox="0 0 20 18" fill="none" aria-hidden="true">
              <path d="M10 -1.009L14.483 6.675 3.725 9.749 10 -1.009Z" fill="#41A5EE" />
              <path d="M3.725 9.749L20.758 17.433 14.483 6.675 3.725 9.749Z" fill="#2B7CD3" />
              <path d="M20.758 17.433H-.758L3.725 9.749l17.033 7.684Z" fill="#185ABD" />
            </svg>
            <small>Microsoft Clarity</small>
          </div>
        </div>
        <div className="toolnote mt-7">Strategy • Execution • Optimization • Reporting</div>
      </div>
    </section>
  );
};
