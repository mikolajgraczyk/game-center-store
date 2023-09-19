import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      inputs: {
        placeholder: "#8D8D8D",
      },
      backgrounds: {
        main: "#2B2B2B",
        header: "#282828",
        loginTab: "#525252",
        loginInput: "#D9D9D9",
        loginButton: "#CF67B2",
        socialButton: "#CF67B2",
      },
      buttons: {
        login: "#FFFFFF",
        accountAccess: "#FFFFFF",
      },
    },
    extend: {
      boxShadow: {
        loginTab: "0px 4px 6px 0px rgba(0, 0, 0, 0.38)",
      },
    },
  },
  plugins: [],
};
export default config;
