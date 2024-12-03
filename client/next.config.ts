import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    env: {
        REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    },
    async headers() {
        return [
            {
                source: "/_next/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" },
                ],
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/uploads/:path*',
                destination: 'http://localhost:5001/uploads/:path*',
            },
        ];
    },
};

export default nextConfig;