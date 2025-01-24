'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'
import { IntlProvider } from 'next-intl';

function MyLayout({ children }) {
  return (
    <IntlProvider locale="pt-BR">  {/* Replace with your desired locale */}
      {children}
    </IntlProvider>
  )
}
<MyLayout>
  <Interest />
</MyLayout>

export default function Interest() {
  const t = useTranslations('interest')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [token, setToken] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setToken('AIB' + Math.random().toString(36).substr(2, 9))
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>{t('success')}</AlertTitle>
          <AlertDescription>
            {t('thankYou')}
          </AlertDescription>
        </Alert>
        <div className="mt-4">
          <p>{t('tokenMessage')} <strong>{token}</strong></p>
          <p>{t('tokenInstructions')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
      <p className="mb-6">{t('description')}</p>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="flex gap-4">
          <Input
            type="email"
            placeholder={t('placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">{t('submit')}</Button>
        </div>
      </form>
    </div>
  )


  
}

