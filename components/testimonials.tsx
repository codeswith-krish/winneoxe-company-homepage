import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      quote: 'Working with this team transformed our entire digital presence. They understood our vision perfectly.',
      author: 'Sarah Chen',
      role: 'CEO, FinanceHub',
      rating: 5,
    },
    {
      quote: 'The level of expertise and professionalism was outstanding. They delivered ahead of schedule.',
      author: 'Michael Rodriguez',
      role: 'Founder, RetailMax',
      rating: 5,
    },
    {
      quote: 'Exceptional team that cares about the product quality. Highly recommend them for any project.',
      author: 'Emma Thompson',
      role: 'Product Manager, HealthConnect',
      rating: 5,
    },
    {
      quote: 'Their innovative approach and attention to detail made all the difference. Truly world-class team.',
      author: 'David Park',
      role: 'CTO, EduLearn',
      rating: 5,
    },
    {
      quote: 'Transparent communication, on-time delivery, and exceptional code quality. Everything you need.',
      author: 'Jessica Martinez',
      role: 'Co-founder, LogisticsPro',
      rating: 5,
    },
    {
      quote: 'They don\'t just build products, they build long-term partnerships. A true extension of our team.',
      author: 'Alex Johnson',
      role: 'Head of Product, SocialHub',
      rating: 5,
    },
  ]

  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hear from the companies we&apos;ve partnered with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-muted/30 p-8 backdrop-blur-sm"
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
