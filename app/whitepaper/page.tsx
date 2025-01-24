

import Link from 'next/link'
import { Button } from '@/components/ui/button'




export default function Whitepaper() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">AIBank Investments Whitepaper</h1>
      <div className="prose max-w-none mb-8">
        <p>Our comprehensive whitepaper details the technology, methodology, and vision behind AIBank Investments. Dive deep into how we're revolutionizing the world of finance with AI.</p>
        <h2>Contents</h2>
        <ul>
          <li>Executive Summary</li>
          <li>The AI Revolution in Finance</li>
          <li>AIBank's Proprietary Technology</li>
          <li>Investment Strategies and Methodologies</li>
          <li>Risk Management and Security Measures</li>
          <li>Regulatory Compliance and Ethical Considerations</li>
          <li>Roadmap and Future Developments</li>
          <li>Team and Advisors</li>
        </ul>
      </div>
      <Button size="lg">
        <Link href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
          Download Whitepaper (PDF)
        </Link>
      </Button>
    </div>
  )
}

