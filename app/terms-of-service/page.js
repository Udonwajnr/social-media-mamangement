import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the SocialMediaSaaS service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.</p>

            <h2>2. Description of Service</h2>
            <p>SocialMediaSaaS provides tools and services for managing social media accounts and campaigns. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.</p>

            <h2>3. User Accounts</h2>
            <p>You must create an account to use our service. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>

            <h2>4. User Conduct</h2>
            <p>You agree not to use the service to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Distribute spam or malicious content</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>The service and its original content, features, and functionality are owned by SocialMediaSaaS and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

            <h2>6. Termination</h2>
            <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.</p>

            <h2>7. Limitation of Liability</h2>
            <p>In no event shall SocialMediaSaaS, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>

            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes to the Terms, but it is your responsibility to review these Terms periodically.</p>

            <h2>9. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: terms@socialmediasaas.com</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}