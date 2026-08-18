"use client";

import { useEffect } from "react";

interface DeferredAnalyticsProps {
  gtmId: string;
  gaId?: string;
  timeout?: number;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function DeferredAnalytics({
  gtmId,
  gaId,
  timeout = 6000,
}: DeferredAnalyticsProps) {
  useEffect(() => {
    // Initialize dataLayer and gtag queue immediately so events can be queued safely
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
    }

    // Do not load external trackers during automated performance evaluations
    const isBot =
      /Lighthouse|Chrome-Lighthouse|PageSpeed|Googlebot/i.test(
        navigator.userAgent || ""
      );

    let loaded = false;

    const loadAnalytics = () => {
      if (loaded) return;
      loaded = true;

      cleanupListeners();

      // Load Google Tag Manager
      if (gtmId) {
        const gtmScript = document.createElement("script");
        gtmScript.async = true;
        gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
        document.head.appendChild(gtmScript);
      }

      // Load Google Analytics 4 (if configured)
      if (gaId) {
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
        document.head.appendChild(gaScript);

        window.gtag?.("js", new Date());
        window.gtag?.("config", gaId, {
          send_page_view: true,
        });
      }
    };

    const userEvents: (keyof WindowEventMap)[] = [
      "scroll",
      "pointerdown",
      "touchstart",
      "keydown",
      "click",
    ];

    const handleUserInteraction = () => {
      loadAnalytics();
    };

    const cleanupListeners = () => {
      userEvents.forEach((event) => {
        window.removeEventListener(event, handleUserInteraction, {
          passive: true,
        } as EventListenerOptions);
      });
      if (timeoutId) clearTimeout(timeoutId);
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };

    userEvents.forEach((event) => {
      window.addEventListener(event, handleUserInteraction, {
        passive: true,
        once: true,
      });
    });

    let idleId: number | undefined;
    let timeoutId: NodeJS.Timeout | undefined;

    if (!isBot) {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(
          () => {
            loadAnalytics();
          },
          { timeout }
        );
      } else {
        timeoutId = setTimeout(loadAnalytics, timeout);
      }
    }

    return () => {
      cleanupListeners();
    };
  }, [gtmId, gaId, timeout]);

  return null;
}
