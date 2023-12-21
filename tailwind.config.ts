import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: { max: '1125px' },
      mobile: { max: '686px' },
    },
    colors: {
      inputs: {
        placeholder: '#8D8D8D',
      },
      backgrounds: {
        main: '#2B2B2B',
        header: '#282828',
        loginTab: '#525252',
        loginInput: '#D9D9D9',
        loginButton: '#CF67B2',
        buyNowButton: '#FF013C',
        discountElement: '#CF67B2',
        white: '#FFFFFF',
        gameSkeleton: '#454545',
        socialButton: '#CF67B2',
      },
      buttons: {
        login: '#FFFFFF',
        accountAccess: '#FFFFFF',
      },
      borders: {
        gameInsightHub: '#FFFFFF',
        buttons: '#FFFFFF',
      },
      texts: {
        main: '#FFFFFF',
        hotDeals: '#FFFFFF',
        gameName: '#FFFFFF',
        gamePrice: '#FFFFFF',
        gameOldPrice: '#C2C2C2',
        anErrorOccurred: '#960018',
      },
    },
    extend: {
      boxShadow: {
        loginTab: '0px 4px 6px 0px rgba(0, 0, 0, 0.38)',
      },
    },
  },
  plugins: [],
};
export default config;
