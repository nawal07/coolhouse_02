import React, { useEffect, useState } from 'react';
import { LOGO_3_NO_BG } from '../constants/images';
import { useLanguage } from '../i18n/LanguageContext';

function PageLoader() {
  const { t } = useLanguage();
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start fade after 1.4s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1400);
    // Fully remove from DOM after fade completes
    const hideTimer = setTimeout(() => setHidden(true), 1900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0d1b2a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Logo */}
      <img
        src={LOGO_3_NO_BG}
        alt="Cool House"
        style={{
          height: '90px',
          animation: 'loaderPulse 1.6s ease-in-out infinite',
        }}
      />

      {/* Spinner dots */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#40c4ff',
              display: 'inline-block',
              animation: `loaderDot 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Tagline */}
      <p
        style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.85rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          margin: 0,
          animation: 'loaderFadeText 1.4s ease forwards',
        }}
      >
        {t.pageLoader.tagline}
      </p>

      <style>{`
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.06); opacity: 0.85; }
        }
        @keyframes loaderDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes loaderFadeText {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 0.5; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default PageLoader;
