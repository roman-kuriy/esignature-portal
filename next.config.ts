import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  ...(isDev ? {} : { output: 'export' }), // SSG + CSR only, NO SSR (skip in dev)
  ...(basePath ? { basePath } : {}),
  ...(basePath ? { assetPrefix: `${basePath}/` } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
