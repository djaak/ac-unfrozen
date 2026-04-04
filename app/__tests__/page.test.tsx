import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "../page";

// Mock client components
vi.mock("@/components/AnimatedSection", () => ({
  default: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
}));

vi.mock("@/components/AnimatedHero", () => ({
  AnimatedHeroItem: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  ScrollIndicator: () => <div data-testid="scroll-indicator" />,
}));

vi.mock("@/components/NavBar", () => ({
  default: () => (
    <header>
      <span>AC UNFROZEN</span>
    </header>
  ),
}));

describe("Home page", () => {
  it("renders the brand name", () => {
    render(<Home />);
    expect(screen.getAllByText(/AC UNFROZEN/i).length).toBeGreaterThan(0);
  });

  it("renders the hero tagline", () => {
    render(<Home />);
    expect(
      screen.getByText(/Professional mobile car AC repair/i)
    ).toBeInTheDocument();
  });

  it("renders call links with the correct phone number (066 151 4879)", () => {
    render(<Home />);
    const phoneLinks = screen.getAllByRole("link", { name: /066 151 4879/i });
    expect(phoneLinks.length).toBeGreaterThan(0);
    phoneLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "tel:+27661514879");
    });
  });

  it("renders WhatsApp links", () => {
    render(<Home />);
    const waLinks = screen.getAllByRole("link", { name: /WhatsApp/i });
    expect(waLinks.length).toBeGreaterThan(0);
    waLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "https://wa.me/27661514879");
    });
  });

  it("renders the Services section heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Precision Services/i })
    ).toBeInTheDocument();
  });

  it("renders all 6 service cards", () => {
    render(<Home />);
    const expectedServices = [
      "AC Repair",
      "Regular Maintenance",
      "AC Inspection",
      "Refrigerant Recharge",
      "Compressor Repair",
      "Heater Blower Repair",
    ];
    expectedServices.forEach((service) => {
      expect(
        screen.getAllByRole("heading", { name: service }).length
      ).toBeGreaterThan(0);
    });
  });

  it("renders the stats", () => {
    render(<Home />);
    expect(screen.getByText("10+")).toBeInTheDocument();
    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("24hr")).toBeInTheDocument();
  });

  it("renders the FAQ section with all 5 questions", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Frequently Asked Questions/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/How much does car AC regas cost in Pretoria/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/How long does a car AC regas take/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Do you come to me or do I need to bring my car/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/How do I know if my car AC needs regassing/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/What areas do you service/i)
    ).toBeInTheDocument();
  });

  it("renders the footer with address and service area", () => {
    render(<Home />);
    expect(
      screen.getAllByText(/411 Louis Trichardt Street, Wonderboom, Pretoria/i).length
    ).toBeGreaterThan(0);
    expect(
      screen.getByText(/Serving Wonderboom, Pretoria North, Centurion/i)
    ).toBeInTheDocument();
  });
});
