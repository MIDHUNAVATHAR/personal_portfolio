import withMDX from '@next/mdx'

const basePath = '/';

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
