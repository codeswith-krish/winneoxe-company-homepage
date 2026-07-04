'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Synapse</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a href="#services" className="text-sm font-medium text-foreground transition hover:text-primary">
              Services
            </a>
          </li>
          <li>
            <a href="#why" className="text-sm font-medium text-foreground transition hover:text-primary">
              Why Us
            </a>
          </li>
          <li>
            <a href="#process" className="text-sm font-medium text-foreground transition hover:text-primary">
              Process
            </a>
          </li>
          <li>
            <a href="#projects" className="text-sm font-medium text-foreground transition hover:text-primary">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm font-medium text-foreground transition hover:text-primary">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden gap-4 md:flex">
          <Button
            variant="outline"
            className="rounded-full px-6"
          >
            Sign In
          </Button>
          <Button className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 hover:shadow-lg hover:shadow-primary/20">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="space-y-3">
            <li>
              <a href="#services" className="block text-sm font-medium text-foreground">
                Services
              </a>
            </li>
            <li>
              <a href="#why" className="block text-sm font-medium text-foreground">
                Why Us
              </a>
            </li>
            <li>
              <a href="#process" className="block text-sm font-medium text-foreground">
                Process
              </a>
            </li>
            <li>
              <a href="#projects" className="block text-sm font-medium text-foreground">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-sm font-medium text-foreground">
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <Button variant="outline" className="flex-1 rounded-full">
              Sign In
            </Button>
            <Button className="flex-1 rounded-full bg-gradient-to-r from-primary to-secondary">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
