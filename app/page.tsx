import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const blogPosts = [
    { href: '/blog/ai-revolution', title: 'The AI Revolution in Finance' },
    { href: '/blog/smart-investing', title: 'Smart Investing Strategies for 2023' },
    { href: '/blog/blockchain-future', title: 'The Future of Blockchain in Banking' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to AIBank Investments</h1>
      <p className="text-xl mb-8">Discover the power of AI-driven investments and secure your financial future.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
          <ul className="space-y-4">
            {blogPosts.map((post) => (
              <li key={post.href}> {/* Adicionado key */}
                <Link href={post.href} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Why Choose AIBank?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered investment strategies</li>
            <li>Personalized financial advice</li>
            <li>Cutting-edge security measures</li>
            <li>Transparent and low fees</li>
          </ul>
          <Link href="/interest" className="mt-6 inline-block">
            <Button>Start Investing Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}