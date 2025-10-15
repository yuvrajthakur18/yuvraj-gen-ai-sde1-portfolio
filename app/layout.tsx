import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yuvraj Singh Thakur | Generative AI Engineer & SDE 1',
  description: 'Generative AI Engineer passionate about building intelligent, production-ready applications. Experienced in LangChain, PyTorch, FastAPI, Next.js, and AI system design.',
  keywords: ['Yuvraj Singh Thakur', 'Generative AI Engineer', 'AI Developer', 'LangChain', 'FastAPI', 'Next.js', 'Python', 'Machine Learning'],
  authors: [{ name: 'Yuvraj Singh Thakur' }],
  openGraph: {
    title: 'Yuvraj Singh Thakur | Generative AI Engineer',
    description: 'Building intelligent AI applications from concept to production',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
