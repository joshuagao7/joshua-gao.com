const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hosting moved from GitHub Pages (static export) to Vercel so the Trip Planner
  // can use serverless route handlers. `output: 'export'` is intentionally removed —
  // re-adding it would disable the /api routes. See DEPLOYMENT.md.
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
}

module.exports = nextConfig



