const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Strips the Next.js basePath prefix from a full browser pathname
 * so the result can be compared with ROUTES constants or passed to router.push().
 */
export function stripBasePath(pathname: string): string {
  if (BASE_PATH && pathname.startsWith(BASE_PATH)) {
    return pathname.slice(BASE_PATH.length) || '/';
  }
  return pathname;
}

/**
 * Prepends the Next.js basePath to a route for use with raw browser APIs
 * (window.location.assign, window.location.href, etc.).
 */
export function withBasePath(route: string): string {
  return `${BASE_PATH}${route}`;
}
