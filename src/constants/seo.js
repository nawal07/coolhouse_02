export const SITE_NAME = 'Cool House Trading';
export const SITE_URL = 'https://coolhousetrading.com';
export const DEFAULT_DESCRIPTION =
  'Cool House Trading is the authorized Saudi distributor of General Deluxe commercial refrigeration — upright fridges, freezers and showcase chillers for HORECA, retail and F&B businesses.';

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

export function buildBreadcrumbJsonLd(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
