import { IntlProvider, useTranslations } from 'next-intl';
import { notFound } from 'next/navigation'; // Importe notFound
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

// Componente para carregar as mensagens (Client Component)
const MessagesProvider = async ({ children, locale }: { children: React.ReactNode; locale: string }) => {
  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Erro ao carregar mensagens para o locale ${locale}:`, error);
    notFound(); // Redireciona para 404 em caso de erro
    // Ou, como alternativa menos ideal: messages = {};
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

// Layout principal (Server Component)
function MyLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const defaultLocale = 'pt-BR';
  const currentLocale = locale || defaultLocale;

  return (
    <MessagesProvider locale={currentLocale}> {/* Envolve com o provider */}
      {children}
    </MessagesProvider>
  );
}

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About AIBank Investments</h1>
      <div className="prose max-w-none">
        <p>{t('title')}</p>
        <h2>{t('mission')}</h2>
        <p>{t('team')}</p>
        <p>{t('teamText')}</p>
        <p>{t('technology')}</p>
        <p>{t('technologyText')}</p>
        <p>{t('join')}</p>
        <p>{t('joinText')}</p>
      </div>
    </div>
  );
}