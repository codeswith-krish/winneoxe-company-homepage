'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a project in mind? We&apos;d love to hear about it
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-foreground">
                Contact Information
              </h3>
              <p className="mb-8 text-muted-foreground">
                Reach out to us through any of these channels. We&apos;re here to help and answer any questions.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:hello@synapse.com"
                className="flex items-start gap-4 rounded-xl border border-border bg-muted/30 p-6 transition hover:border-primary/30 hover:bg-muted/50"
              >
                <Mail className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">hello@synapse.com</p>
                </div>
              </a>

              <a
                href="tel:+1-555-123-4567"
                className="flex items-start gap-4 rounded-xl border border-border bg-muted/30 p-6 transition hover:border-primary/30 hover:bg-muted/50"
              >
                <Phone className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-border bg-muted/30 p-6">
                <MapPin className="mt-1 h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Office</h4>
                  <p className="text-muted-foreground">
                    123 Innovation Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-muted/30 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary font-semibold hover:shadow-lg hover:shadow-primary/30"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
