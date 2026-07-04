import { Check } from 'lucide-react'

export function WhyUs() {
  const benefits = [
    'Award-winning design and development team',
    'Proven track record with enterprise clients',
    'Cutting-edge technology stack',
    'Agile development methodology',
    'Transparent communication throughout',
    'Post-launch support and maintenance',
    'Competitive pricing without compromising quality',
    'Custom solutions tailored to your needs',
  ]

  return (
    <section id="why" className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Why Choose Us?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We&apos;re not just a development company. We&apos;re your technology partner dedicated to your success.
            </p>

            {/* Benefits Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Highlight */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent p-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Innovation at Scale
              </h3>
              <p className="text-muted-foreground">
                We combine cutting-edge technology with strategic thinking to deliver solutions that scale with your business. Our approach ensures your digital products remain competitive and future-proof.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/5 via-primary/5 to-transparent p-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Partnership Approach
              </h3>
              <p className="text-muted-foreground">
                Your success is our success. We work closely with your team to understand your vision and deliver exactly what you need, not what&apos;s easiest to build.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent p-8">
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Proven Results
              </h3>
              <p className="text-muted-foreground">
                Our portfolio speaks for itself. We&apos;ve helped startups scale to unicorn status and established companies modernize their technology stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
