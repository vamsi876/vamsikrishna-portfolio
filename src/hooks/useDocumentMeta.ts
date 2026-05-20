import { useEffect } from 'react';

const SITE_URL = 'https://vamsikrishnakollipara.vercel.app';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const BREADCRUMB_ELEMENT_ID = 'breadcrumb-schema';

type Breadcrumb = { name: string; path: string };

type DocumentMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  breadcrumbs?: Breadcrumb[];
};

function setMetaTag(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setBreadcrumbSchema(breadcrumbs: Breadcrumb[] | undefined) {
  const existing = document.getElementById(BREADCRUMB_ELEMENT_ID);
  if (!breadcrumbs || breadcrumbs.length === 0) {
    existing?.remove();
    return;
  }
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: `${SITE_URL}${b.path}`,
    })),
  };
  const content = JSON.stringify(json);
  if (existing) {
    existing.textContent = content;
    return;
  }
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = BREADCRUMB_ELEMENT_ID;
  script.textContent = content;
  document.head.appendChild(script);
}

export function useDocumentMeta({ title, description, path, ogImage = DEFAULT_OG_IMAGE, breadcrumbs }: DocumentMeta) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMetaTag('name', 'description', description);
    setCanonical(url);

    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:image', ogImage);

    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    setBreadcrumbSchema(breadcrumbs);
  }, [title, description, path, ogImage, breadcrumbs]);
}
