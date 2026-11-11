import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    // parcerisa.dev is the only public URL. The legacy .xyz hosts still reach
    // the app (see infra/variables.tf legacy_hosts) and get a permanent (308)
    // redirect to the same path on the canonical host; the query is kept.
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "(?:www\\.)?parcerisa\\.xyz" }],
                destination: "https://www.parcerisa.dev/:path*",
                permanent: true,
            },
        ]
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.shields.io",
                port: "",
                pathname: "/**",
            },
        ],
    },
}

export default nextConfig
