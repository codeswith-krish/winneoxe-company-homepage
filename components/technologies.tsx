export function Technologies() {
  const categories = [
    {
      name: 'Frontend',
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
      name: 'Backend',
      techs: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      name: 'Mobile',
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
    },
    {
      name: 'Cloud & DevOps',
      techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Vercel'],
    },
  ]

  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Technologies We Specialize In
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We stay at the forefront of technology innovation
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-muted/30 p-8"
            >
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
