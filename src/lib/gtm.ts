interface GtmEvent {
  event: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer?: GtmEvent[];
  }
}

const GTM_CONTAINER_ID = 'GTM-MNBVPQFL';

export function isGtmLoaded(): boolean {
  return typeof window !== 'undefined' && Array.isArray(window.dataLayer);
}

function initDataLayer(): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
}

export function pushEvent(event: GtmEvent): void {
  initDataLayer();
  window.dataLayer!.push(event);
}

export function trackPageView(path: string = window.location.pathname): void {
  initDataLayer();
  window.dataLayer!.push({
    event: 'page_view',
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackVirtualPageView(path: string): void {
  trackPageView(path);
}

export function trackClick(eventName: string, params: Record<string, unknown> = {}) {
  pushEvent({ event: eventName, ...params });
}

export function trackConversion(eventName: string, params: Record<string, unknown> = {}) {
  pushEvent({ event: eventName, conversion: true, ...params });
}

export function trackOutboundLink(url: string, label = ''): void {
  trackClick('outbound_link', { click_url: url, click_label: label });
}

export function trackWhatsAppClick(source = '', value?: number | string): void {
  trackConversion('whatsapp_click', {
    whatsapp_source: source,
    ...(value !== undefined && { whatsapp_value: value }),
  });
}