import { join, dirname } from "path";


const __dirname = dirname(import.meta.filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        typedRoutes: true,
    },
    sassOptions: {
        loadPaths: [
            join(__dirname, 'styles'),
        ],
    },
};

export default nextConfig;
