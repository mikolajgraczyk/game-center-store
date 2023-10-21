/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

const withNextIntl = require("next-intl/plugin")(
  // To jest domyślna lokalizacja (również obsługiwany jest folder `src` na starcie)
  "src/i18n.ts"
);

module.exports = withNextIntl(nextConfig);
