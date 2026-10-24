import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ویا — سفر بعدی خود را کشف کنید',
  description:
    'با ویا، مقاصد نفس‌گیر و اقامتگاه‌های دست‌چین‌شده را از سراسر جهان پیدا کنید.',
  openGraph: {
    title: 'ویا — سفر بعدی خود را کشف کنید',
    description:
      'با ویا، مقاصد نفس‌گیر و اقامتگاه‌های دست‌چین‌شده را از سراسر جهان پیدا کنید.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
