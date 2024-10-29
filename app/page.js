import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BarChart, Globe, Users } from 'lucide-react'
import FacebookLoginButton from './components/FacbookLogin'
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Manage Your Social Media with Ease</h1>
          <p className="text-xl mb-8">Streamline your social media workflow and boost your online presence</p>
          <Button size="lg" className="font-semibold">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
    <FacebookLoginButton/>
        <section className="grid md:grid-cols-3 gap-8 py-12">
          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Unified Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              Manage all your social media accounts from a single, intuitive dashboard.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Advanced Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              Gain valuable insights with our comprehensive analytics and reporting tools.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Team Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              Seamlessly collaborate with your team members and manage user roles.
            </CardContent>
          </Card>
        </section>

        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Media Strategy?</h2>
          <p className="text-xl mb-8">Join thousands of businesses already using our platform</p>
          <Button size="lg" variant="outline" className="font-semibold">
            <Link href="/about">Learn More</Link>
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