/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'assets.example.com',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
// }
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: "@svgr/webpack",
      },
      {
        test: /\.mp4$/,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 100000,
      //       name: '[name].[ext]',
      //       esModule: false,
      //     }
      //   },
      // }
      // {
      //   test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      //   // More information here https://webpack.js.org/guides/asset-modules/
      //   type: "asset/resource",
      // },
    )

    return config
  },
}

// nextConfig.webpack = (config, context) => {

//   config.module.rules.push(

//   {
//     test: /\.svg$/,
//     use: "@svgr/webpack",
//   },
//   // {
//   //   test: /\.png/,
//   //   type: 'asset/resource'
//   // },
//   {
//     test: /\.mp4$/,
//     type: 'asset/resource',
//   },
//   // {
//   //   test: /\.svg$/i,
//   //   type: 'asset',
//   //   resourceQuery: /url/, // *.svg?url
//   // },
//   // {
//   //   test: /\.svg$/i,
//   //   issuer: /\.[jt]sx?$/,
//   //   resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
//   //   use: ['@svgr/webpack'],
//   // },
//   // {
//   //   test: /\.css$/i,
//   //   use: ["style-loader", "css-loader"],
//   // },
//   // {
//   //   test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
//   //   // More information here https://webpack.js.org/guides/asset-modules/
//   //   type: "asset/resource",
//   // },
//   );
//   return config;
// };




// module.exports = nextConfig

