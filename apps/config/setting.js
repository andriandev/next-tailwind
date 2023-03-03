const site_base_url = 'http://localhost:3000';
const site_favicon_url = '/favicon.ico';
const site_title = 'Next App';
const site_description = 'Next App Starter Template';
const site_index = 'index'; // index or noindex

export function siteBaseUrl(base_url = site_base_url) {
  return process.env.NEXT_PUBLIC_BASE_URL || base_url;
}

export function siteFaviconUrl(favicon_url = site_favicon_url) {
  return process.env.NEXT_PUBLIC_FAVICON_URL || favicon_url;
}

export function siteTitle(title = site_title) {
  return process.env.NEXT_PUBLIC_TITLE || title;
}

export function siteDescription(description = site_description) {
  return process.env.NEXT_PUBLIC_DESCRIPTION || description;
}

export function siteIndex(index = site_index) {
  if (process.env.NEXT_PUBLIC_INDEX) {
    index =
      process.env.NEXT_PUBLIC_INDEX == 'index'
        ? 'index, follow'
        : 'noindex, nofollow';
  } else {
    index = index == 'index' ? 'index, follow' : 'noindex, nofollow';
  }
  return index;
}
