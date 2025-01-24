'use client'

import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('common'); 

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('notFoundTitle')}</h1> 
      <p className="text-lg mb-4">{t('notFoundDescription')}</p> 
    </div>
  );
}