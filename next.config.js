/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains:['links.papareact.com'],

//     },
// }
const nextConfig = {
    images:{

        remotePatterns:[
            {
                protocol:'https',
                hostname:'links.papareact.com',
                port: '',
                pathname: '/**',

            }
        ]

    },
}

module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }
module.exports = nextConfig
