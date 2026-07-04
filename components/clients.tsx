export function Clients() {
  const companies = [
    'TechVenture',
    'CloudSync',
    'DataFlow',
    'NeuralAI',
    'QuantumLeap',
    'PrimeScale',
  ]

  return (
    <section className="bg-background px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by Forward-Thinking Companies
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center rounded-xl border border-border bg-muted/30 px-4 py-6 transition hover:border-primary/30 hover:bg-muted/50"
            >
              <span className="text-sm font-semibold text-foreground">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
