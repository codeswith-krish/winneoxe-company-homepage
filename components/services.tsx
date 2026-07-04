import { Code2, Smartphone, Database, Zap, Shield, Headphones } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for performance.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions that deliver seamless user experiences.',
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Scalable server architectures and APIs designed for growth and reliability.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimization and acceleration for lightning-fast digital products.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security implementations and compliance solutions.',
    },
    {
      icon: Headphones,
      title: 'Support',
      description: 'Ongoing maintenance and dedicated support for your digital infrastructure.',
    },
  ]

  return (
    <section id="services" className="relative bg-muted/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card p-8 transition hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
