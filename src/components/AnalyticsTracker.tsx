"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    trackEvent("page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
    });

    const projectMatch = pathname.match(/^\/work\/([^/]+)$/);
    if (projectMatch) {
      trackEvent("project_view", {
        project_slug: projectMatch[1],
        page_path: pagePath,
      });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button']",
      ) as HTMLElement | null;

      if (!interactive || interactive.dataset.analyticsIgnore === "true") {
        return;
      }

      const anchor =
        interactive.tagName.toLowerCase() === "a"
          ? (interactive as HTMLAnchorElement)
          : (interactive.closest("a") as HTMLAnchorElement | null);

      const rawText =
        interactive.getAttribute("aria-label") ||
        interactive.textContent ||
        anchor?.textContent ||
        "";
      const label = rawText.replace(/\s+/g, " ").trim().slice(0, 120) || "unlabeled";

      const href = anchor?.href;
      const pagePath = `${window.location.pathname}${window.location.search}`;

      let eventName = "ui_click";
      let projectSlug: string | undefined;

      if (href) {
        const url = new URL(href, window.location.origin);
        const isExternal = url.origin !== window.location.origin;

        if (isExternal) {
          eventName = "outbound_link_click";
        } else {
          const match = url.pathname.match(/^\/work\/([^/]+)$/);
          if (match) {
            eventName = "project_link_click";
            projectSlug = match[1];
          }
        }
      }

      trackEvent(eventName, {
        click_label: label,
        element_tag: interactive.tagName.toLowerCase(),
        element_id: interactive.id || undefined,
        link_url: href,
        page_path: pagePath,
        project_slug: projectSlug,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
