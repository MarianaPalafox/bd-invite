import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/bd-invite',
    output: "export",  // <=== enables static exports
    images: { unoptimized: true },
    reactStrictMode: true,
};

export default nextConfig;
