import { ArrowRight } from 'lucide-react'

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into your business goals, market landscape, and user needs to understand the big picture.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our team crafts a detailed roadmap, selecting the right technology stack and approach for your project.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'We create beautiful, intuitive interfaces that users love while ensuring optimal performance.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Our developers build your product with clean code, best practices, and rigorous quality assurance.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Comprehensive testing across all platforms and scenarios ensures a flawless user experience.',
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'We deploy your product and provide ongoing support to ensure continued success and growth.',
    },
  ]

  return (
    <section id="process" className="relative bg-muted/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Our Development Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="rounded-2xl border border-border bg-card p-8 transition hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                {/* Number */}
                <div className="mb-6 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow - Hidden on last item */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-primary/30 lg:block">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Ready to start your journey?{' '}
            <a href="#contact" className="font-semibold text-primary hover:underline">
              Let&apos;s talk
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
