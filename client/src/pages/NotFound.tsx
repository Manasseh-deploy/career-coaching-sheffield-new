import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container text-center max-w-2xl">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-charcoal-900 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mb-6">
          Page not found
        </h2>
        <p className="text-lg text-charcoal-600 mb-8">
          Sorry, we couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <Link href="/">
          <a>
            <Button className="btn-primary">Back to Home</Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
