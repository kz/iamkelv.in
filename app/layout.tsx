import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://iamkelv.in'),
  title: 'Kelvin Zhang',
  keywords: ['Kelvin Zhang', 'London', 'UK', 'United Kingdom'],
  openGraph: {
    title: 'Kelvin Zhang',
    siteName: 'Kelvin Zhang',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Kelvin Zhang',
    site: '@kelvzhan',
    creator: '@kelvzhan',
    images: ['assets/profile.jpg'],
  },
  authors: [
    {
      name: 'Kelvin Zhang',
      url: 'https://twitter.com/kelvzhan',
    },
  ],
  other: {
    'profile:first_name': 'Kelvin',
    'profile:last_name': 'Zhang',
    'profile:gender': 'male',
    'google-site-verification': 'RCwOYF1-eyx1jS6gJpJYB-c_hRHVj80xqZ18yFON6U0',
    'msvalidate.01': '65F472794949AB030275F6A0FB8446A5',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='mx-auto mb-12 mt-6 max-w-screen-sm px-4'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
