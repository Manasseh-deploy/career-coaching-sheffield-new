import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Blog Page - Career insights and advice
 * Design: 3x3 grid of blog cards with featured article
 */

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: "Mindset",
      title: '"I just haven\'t got the confidence anymore..."',
      excerpt: "Rebuilding professional confidence after a career break or setback. Practical steps to regain your footing.",
      image: "placeholder",
    },
    {
      id: 2,
      category: "Local Markets",
      title: "Where are the jobs in Sheffield?",
      excerpt: "A deep dive into the growing sectors in the region, from advanced manufacturing to digital tech.",
      image: "placeholder",
    },
    {
      id: 3,
      category: "Skills",
      title: "Thinking about a career shift? Why free online courses work as a great first step",
      excerpt: "Before committing to expensive retraining, test the waters with accessible platforms to see if a new direction is right for you.",
      image: "placeholder",
    },
    {
      id: 4,
      category: "Strategy",
      title: "My short guide of how to change careers in Sheffield in 2026",
      excerpt: "A step-by-step roadmap following the local job market, industry trends, and practical complications of shifting industries.",
      image: "placeholder",
    },
    {
      id: 5,
      category: "Work-Life Balance",
      title: "Top family-friendly jobs in Sheffield for Mums",
      excerpt: "Balancing career and family is tough. Here are the top sectors offering the best flexibility and family-friendly policies.",
      image: "placeholder",
    },
    {
      id: 6,
      category: "Applications",
      title: "Top 6 Common mistakes in application forms",
      excerpt: "Don't make these errors on your next application. Interview coaches reveal the most common pitfalls before you submit.",
      image: "placeholder",
    },
    {
      id: 7,
      category: "Salary Data",
      title: "Average salaries in Sheffield. What can you expect?",
      excerpt: "A transparent look at compensation across industries in the region. Understand your market value and negotiate confidently.",
      image: "placeholder",
    },
    {
      id: 8,
      category: "Resources",
      title: "Best Career Services & Support in Sheffield (2025 Guide)",
      excerpt: "A comprehensive directory of local organizations, networks, and services available to support your career journey.",
      image: "placeholder",
    },
    {
      id: 9,
      category: "Experience",
      title: "Making volunteering work for you in Sheffield",
      excerpt: "How giving your time to local causes can dramatically boost your CV, expand your network, and accelerate your career.",
      image: "placeholder",
    },
  ];

  const featuredPost = {
    title: "Sheffield's Labour Market Information",
    excerpt: "Essential reading for anyone job hunting in the region. Understand the microeconomic trends shaping employment opportunities in South Yorkshire.",
    image: "placeholder",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900 mb-6 leading-tight">
            Insights & Advice for Your Career Journey
          </h1>
          <p className="text-lg text-charcoal-600">
            Practical tips, local Sheffield market insights, and guidance to help you navigate your professional path with confidence.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-charcoal-50 border-y border-border py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg bg-gradient-to-br from-primary/10 to-accent/10 order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 flex items-center justify-center">
                <div className="text-center text-charcoal-400">
                  <p className="font-serif text-lg">Featured Article Image</p>
                  <p className="text-sm">Sheffield skyline or market data visualization</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="label-caps text-primary bg-primary/10 px-3 py-1 rounded-full text-xs mb-4 inline-block">
                FEATURED REPORT
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mb-6">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
                Read full report <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
            Want personalized guidance?
          </h2>
          <p className="text-lg text-charcoal-600 mb-8">
            These articles provide general insights, but your situation is unique. Let's discuss how coaching can accelerate your progress.
          </p>
          <Link href="/contact">
            <Button className="btn-primary">Book Your Discovery Call</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post }: { post: { id: number; category: string; title: string; excerpt: string; image: string } }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-md transition-all group">
      {/* Image */}
      <div className="relative rounded-t-xl overflow-hidden aspect-video bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 flex items-center justify-center">
          <div className="text-center text-charcoal-400">
            <p className="font-serif text-sm">Blog Image</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="label-caps text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-3 inline-block">
          {post.category}
        </span>
        <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-charcoal-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold text-sm">
          Read full article <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
