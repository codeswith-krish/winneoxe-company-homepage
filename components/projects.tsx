import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Projects() {
  const projects = [
    {
      title: 'FinanceHub',
      category: 'Financial Technology',
      description: 'A comprehensive financial management platform serving 50K+ users with real-time analytics.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      stats: { users: '50K+', growth: '+300%' },
    },
    {
      title: 'HealthConnect',
      category: 'Healthcare',
      description: 'Telemedicine platform connecting patients with healthcare providers seamlessly.',
      tags: ['Next.js', 'GraphQL', 'Cloud Functions'],
      stats: { consultations: '100K+', rating: '4.8★' },
    },
    {
      title: 'RetailMax',
      category: 'E-Commerce',
      description: 'Multi-vendor marketplace processing $10M+ in annual transactions.',
      tags: ['Vue.js', 'Python', 'Elasticsearch'],
      stats: { vendors: '500+', transactions: '$10M+' },
    },
    {
      title: 'EduLearn',
      category: 'EdTech',
      description: 'Interactive learning platform with 1M+ courses and adaptive learning algorithms.',
      tags: ['React Native', 'Firebase', 'Machine Learning'],
      stats: { courses: '1M+', engagement: '85%' },
    },
    {
      title: 'LogisticsPro',
      category: 'Supply Chain',
      description: 'Real-time logistics management optimizing delivery routes and inventory.',
      tags: ['Flutter', 'Microservices', 'IoT'],
      stats: { shipments: '100K/mo', savings: '25%' },
    },
    {
      title: 'SocialHub',
      category: 'Social Media',
      description: 'Community platform with AI-powered content recommendations.',
      tags: ['Next.js', 'Node.js', 'Redis'],
      stats: { users: '2M+', DAU: '500K+' },
    },
  ]

  return (
    <section id="projects" className="bg-muted/20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A selection of products we&apos;ve built for innovative companies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Header Background */}
              <div className="h-32 bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent" />

              {/* Content */}
              <div className="relative -mt-16 px-6 pb-6 pt-20">
                {/* Category Badge */}
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="mb-4 flex gap-4 border-t border-border pt-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex-1">
                      <div className="text-sm font-semibold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary hover:gap-2 gap-1 transition-all">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
