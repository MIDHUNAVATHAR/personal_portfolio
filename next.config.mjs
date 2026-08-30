import withMDX from '@next/mdx'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath,
    assetPrefix: basePath,
    images: {
        unoptimized: true,
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMDX()(nextConfig)
