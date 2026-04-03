import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Home from '../page'

// framer-motion uses browser APIs not available in jsdom
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props}>{children}</p>,
  },
}))

describe('Home page', () => {
  it('renders the brand name', () => {
    render(<Home />)
    expect(screen.getAllByText(/AC Unfrozen/i).length).toBeGreaterThan(0)
  })

  it('renders the hero tagline', () => {
    render(<Home />)
    expect(screen.getByText(/Professional car air conditioning repair/i)).toBeInTheDocument()
  })

  it('renders a call-now link with the correct phone number', () => {
    render(<Home />)
    const phoneLinks = screen.getAllByRole('link', { name: /082 451 9555/i })
    expect(phoneLinks.length).toBeGreaterThan(0)
    phoneLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'tel:+27824519555')
    })
  })

  it('renders the Services section heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Home />)
    const expectedServices = [
      'AC Repair',
      'Regular Maintenance',
      'AC Inspection',
      'Refrigerant Recharge',
      'Compressor Repair',
      'Heater Blower Repair',
    ]
    expectedServices.forEach(service => {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument()
    })
  })

  it('renders the Why Choose Us stats', () => {
    render(<Home />)
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('24hr')).toBeInTheDocument()
  })

  it('renders the footer with tagline', () => {
    render(<Home />)
    const matches = screen.getAllByText(/Pretoria's trusted car AC specialists/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })
})
