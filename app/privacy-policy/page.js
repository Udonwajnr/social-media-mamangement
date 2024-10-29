import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Introduction</h2>
            <p>Welcome to SocialMediaSaaS. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights and how the law protects you.</p>
            
            <h2>2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul>
              <li>Identity Data: first name, last name, username</li>
              <li>Contact Data: email address, telephone numbers</li>
              <li>Technical Data: internet protocol (IP) address, login data, browser type and version</li>
              <li>Usage Data: information about how you use our website and services</li>
              <li>Marketing and Communications Data: your preferences in receiving marketing from us and our third parties</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>We use your data to provide and improve our services, including:</p>
            <ul>
              <li>To register you as a new customer</li>
              <li>To process and deliver your service</li>
              <li>To manage our relationship with you</li>
              <li>To improve our website, products/services, marketing, and customer relationships</li>
              <li>To make recommendations to you about goods or services which may interest you</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>

            <h2>5. Your Legal Rights</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.</p>

            <h2>6. Third-party Links</h2>
            <p>This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>

            <h2>7. Changes to the Privacy Policy</h2>
            <p>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: privacy@socialmediasaas.com</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}