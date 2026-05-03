import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-serif font-bold text-xl text-primary hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              CC
            </div>
            <span className="hidden sm:inline">Career Coaching</span>
          </a>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`px-4 py-2 rounded-md transition-all font-serif text-sm ${
                  location === item.href
                    ? "text-primary font-semibold bg-primary/5"
                    : "text-charcoal-600 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact">
          <a>
            <Button className="btn-primary hidden sm:inline-flex">
              Book a Discovery Call
            </Button>
          </a>
        </Link>
      </div>
    </header>
  );
}
