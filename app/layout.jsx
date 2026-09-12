import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CompareProvider } from '@/components/comparison/CompareContext';
import CompareBar from '@/components/comparison/CompareBar';

export const metadata = {
  title: {
    default: 'College Leadership | Top Colleges, Admissions & Direct Counselling 2026',
    template: '%s | College Leadership',
  },
  description:
    'Discover top engineering, MBA, medical, and law colleges in India with verified fees, NIRF cutoffs, realistic placement audits, and 1-on-1 admission counselling.',
  metadataBase: new URL('https://collegeleadership.in'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'College Leadership | College Discovery & Counselling Platform',
    description: 'Find the right college. Build the right future with 100% verified fees, cutoffs, and expert guidance.',
    url: 'https://collegeleadership.in',
    siteName: 'College Leadership',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'College Leadership Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-brand-dark antialiased">
        <Header />
        <CompareProvider>
          <main className="flex-1">
            {children}
          </main>
          <CompareBar />
        </CompareProvider>
        <Footer />
      </body>
    </html>
  );
}
