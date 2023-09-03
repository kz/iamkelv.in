import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: () => ({
        lg: {
          css: {
            p: {
              marginTop: '1em',
              marginBottom: '1em',
              lineHeight: '1.6',
            },
            h2: {
              marginTop: '0.7em',
              marginBottom: '0.7em',
              lineHeight: '1.4',
            },
            h3: {
              marginTop: '0.83em',
              marginBottom: '0.83em',
              lineHeight: '1.4',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
