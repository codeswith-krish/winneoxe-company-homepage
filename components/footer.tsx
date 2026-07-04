export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Synapse</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming ideas into exceptional digital products.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition hover:text-primary">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Backend Systems
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-primary">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Synapse. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                GH
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                LI
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold transition hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                TW
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
