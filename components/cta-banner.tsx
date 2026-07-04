import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary px-6 py-24 text-center text-primary-foreground lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/2 -top-1/2 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div className="absolute -left-1/4 -bottom-1/4 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <h2 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-10 text-lg opacity-90">
          Let&apos;s discuss your project and explore how we can help you achieve your goals.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="rounded-full bg-primary-foreground px-8 text-lg font-semibold text-primary hover:bg-muted"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground px-8 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/10"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  )
}
