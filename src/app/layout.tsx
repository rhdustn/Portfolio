import { BaseLayout } from '@/components';
import type { Metadata } from 'next';
import { fonts } from '@/fonts';

import 'normalize.css';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Carrieverse',
  description: 'Carrieverse',
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.map((font) => `${font.variable}`).join(' ')}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
