import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
      {/* Decorative gradient orb */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-1/3 -top-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent blur-3xl" />
        <div className="absolute -left-1/2 bottom-0 h-80 w-80 rounded-full bg-gradient-to-t from-primary/5 via-secondary/5 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Next Generation Development
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="text-balance">
            Build Digital Products That
            <span className="ml-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Matter
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
          We craft cutting-edge software solutions that transform businesses. From concept to deployment, we deliver exceptional digital experiences that drive growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-lg font-semibold"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">150+</div>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">98%</div>
            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">50+</div>
            <p className="text-sm text-muted-foreground">Expert Developers</p>
          </div>
        </div>
      </div>
    </section>
  )
}
