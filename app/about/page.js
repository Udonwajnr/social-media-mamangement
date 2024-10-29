import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">About SocialMediaSaaS</h1>
          <p className="text-xl mb-8">Empowering businesses to succeed in the digital world</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At SocialMediaSaaS, we're on a mission to simplify social media management for businesses of all sizes. 
              We believe that effective social media presence is crucial for success in today's digital landscape, 
              and we're here to make it accessible to everyone.
            </p>
            <p className="text-lg mb-4">
              Our platform is designed to streamline your social media workflow, provide valuable insights, 
              and help you connect with your audience more effectively.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Easy to Use</CardTitle>
              </CardHeader>
              <CardContent>
                Our intuitive interface makes social media management a breeze, even for beginners.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Powerful Features</CardTitle>
              </CardHeader>
              <CardContent>
                From scheduling posts to advanced analytics, we offer all the tools you need to succeed.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Excellent Support</CardTitle>
              </CardHeader>
              <CardContent>
                Our dedicated support team is always ready to help you make the most of our platform.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of businesses already using SocialMediaSaaS</p>
          <Button size="lg" className="font-semibold">
            <Link href="/">Start Your Free Trial</Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SocialMediaSaaS. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="hover:underline mr-4">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}