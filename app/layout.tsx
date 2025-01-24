import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { NextIntlClientProvider } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIBank Investments Blog',
  description: 'Explore the future of AI-driven investments',
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const defaultLocale = 'pt-BR'; 
  const currentLocale = locale || defaultLocale;
 
  let messages;

  try {
    messages = (await import(`../messages/${currentLocale}.json`)).default;
  } catch (error) {
    // Handle the error gracefully, e.g., log the error and provide a fallback 
    console.error(`Error loading messages for currentLocale ${currentLocale}:`, error);
    messages = {}; // Or provide default messages
  }

  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem 
            disableTransitionOnChange 
          >
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}