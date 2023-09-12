import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kelvin Zhang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='mx-auto mt-6 max-w-screen-sm px-4'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
