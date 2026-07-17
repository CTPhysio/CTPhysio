import { useEffect, useState } from 'react';

type ConsentLevel = 'preferences' | 'statistics' | 'marketing';
type ConsentMap = Record<ConsentLevel, boolean>;

declare global {
  interface Window {
    Cookiebot?: {
      consent: ConsentMap;
      hasConsented?: boolean;
      onConsentReady?: () => void;
    };
    CookieConsent?: {
      consent: ConsentMap;
    };
  }
}

const STORAGE_KEY = 'CookieConsent';

function readConsent(): ConsentMap | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return {
        preferences: !!parsed.preferences,
        statistics: !!parsed.statistics,
        marketing: !!parsed.marketing,
      };
    }
  } catch {
    // ignore malformed stored consent
  }
  return null;
}

export function useConsent() {
  const [consent, setConsent] = useState<ConsentMap | null>(() => readConsent());

  useEffect(() => {
    const update = () => setConsent(readConsent());

    window.addEventListener('CookiebotOnConsentReady', update);
    window.addEventListener('CookiebotOnLoad', update);
    window.addEventListener('storage', update);
    return () => {
      window.removeEventListener('CookiebotOnConsentReady', update);
      window.removeEventListener('CookiebotOnLoad', update);
      window.removeEventListener('storage', update);
    };
  }, []);

  const hasConsent = (level: ConsentLevel) => {
    if (consent) return consent[level];
    return false;
  };

  return { consent, hasConsent };
}
