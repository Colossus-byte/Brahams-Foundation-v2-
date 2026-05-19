import { Cormorant_Garamond, Outfit } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: 'Brahams Foundation — Empowering Globally. Uniting. Changing Lives.',
  description:
    'Brahams Foundation is a globally-focused NGO dedicated to sports, social economic empowerment, cultural advancement, girl child empowerment, and education.',
  keywords: [
    'NGO',
    'Kenya',
    'empowerment',
    'sports',
    'education',
    'Brahams Foundation',
    'Siaya',
    'Ugenya',
    'girl child',
    'disability',
    'cultural',
  ],
  authors: [{ name: 'Brahams Foundation' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brahamsfoundation.org',
    siteName: 'Brahams Foundation',
    title: 'Brahams Foundation — Empowering Globally. Uniting. Changing Lives.',
    description:
      'Brahams Foundation is a globally-focused NGO dedicated to sports, social economic empowerment, cultural advancement, girl child empowerment, and education.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Colossus-byte/Brahams-Foundation/main/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Brahams Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brahams Foundation — Empowering Globally. Uniting. Changing Lives.',
    description:
      'Brahams Foundation is a globally-focused NGO dedicated to sports, social economic empowerment, cultural advancement, girl child empowerment, and education.',
    images: [
      'https://raw.githubusercontent.com/Colossus-byte/Brahams-Foundation/main/logo.jpg',
    ],
    creator: '@BrahamsFoundtn',
  },
  icons: {
    icon: 'https://raw.githubusercontent.com/Colossus-byte/Brahams-Foundation/main/logo.jpg',
    shortcut:
      'https://raw.githubusercontent.com/Colossus-byte/Brahams-Foundation/main/logo.jpg',
    apple:
      'https://raw.githubusercontent.com/Colossus-byte/Brahams-Foundation/main/logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
