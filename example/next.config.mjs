/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Allow network devices to connect to Fast Refresh safely
  allowedDevOrigins: ['192.168.68.102:3000', '192.168.68.102'],

  // 2. Put Turbopack at the top level (NOT inside experimental)
  turbopack: {
    // 3. Force the project directory as the absolute root to fix the lockfile warning
    root: process.cwd(), 
  },
};

export default nextConfig;
