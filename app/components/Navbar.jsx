import Link from 'next/link'
import { Home, Info, Shield, FileText } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">SocialMediaSaaS</Link>
          <div className="flex space-x-4">
            <Link href="/" className="flex items-center space-x-1 hover:text-secondary-foreground">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link href="/about" className="flex items-center space-x-1 hover:text-secondary-foreground">
              <Info size={18} />
              <span>About</span>
            </Link>
            <Link href="/privacy-policy" className="flex items-center space-x-1 hover:text-secondary-foreground">
              <Shield size={18} />
              <span>Privacy Policy</span>
            </Link>
            <Link href="/terms-of-service" className="flex items-center space-x-1 hover:text-secondary-foreground">
              <FileText size={18} />
              <span>Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}