import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white border-t border-charcoal-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold">
                CC
              </div>
              <span className="font-serif font-bold">Career Coaching Sheffield</span>
            </div>
            <p className="text-charcoal-300 text-sm">
              Empowering professionals to find clarity, confidence, and purpose in their careers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-charcoal-300 hover:text-white transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-charcoal-300 hover:text-white transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-charcoal-300 hover:text-white transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-charcoal-300 hover:text-white transition-colors">Blog</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:jillvalentinecareers@gmail.com"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  jillvalentinecareers@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447964387825"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  07964 387825
                </a>
              </li>
              <li className="text-charcoal-300">Sheffield, UK</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Follow</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-charcoal-400">
          <p>&copy; {currentYear} Career Coaching Sheffield. Grounded in growth.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
