'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRouter, usePathname } from 'next/navigation'

type ButtonVariants = 
  | 'link' 
  | 'default' 
  | 'destructive' 
  | 'outline' 
  | 'secondary' 
  | 'ghost' 
  | 'primary' 
  | null 
  | undefined; 

interface ButtonProps {
  variant?: ButtonVariants;
  // ... other props
}



export function Header() {
  const t = useTranslations('common')
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (value: string) => {
    router.push((pathname ?? '').replace(/^\/[a-z]{2}/, `/${value}`)); 
  };

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">AIBank Investments</Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link href="/"><Button variant="ghost">{t('home')}</Button></Link></li>
            <li><Link href="/about"><Button variant="ghost">{t('about')}</Button></Link></li>
            <li><Link href="/whitepaper"><Button variant="ghost">{t('whitepaper')}</Button></Link></li>
            <li><Link href="/contact"><Button variant="ghost">{t('contact')}</Button></Link></li>
            <li><Link href="/interest"><Button variant="default">{t('joinNow')}</Button></Link></li>
          </ul>
          <Select onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  )
}