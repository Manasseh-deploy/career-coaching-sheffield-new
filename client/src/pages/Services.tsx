import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

/**
 * Services Page - Detailed coaching offerings
 * Design: Alternating image + text layout with testimonials
 */

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900 mb-6 leading-tight">
            Invest in Your Professional Path
          </h1>
          <p className="text-lg text-charcoal-600">
            Tailored coaching services designed to bring clarity to your career choices, strengthen your personal brand, and equip you with the confidence to secure the role you deserve.
          </p>
        </div>
      </section>

      {/* Service 1: Career Direction Coaching */}
      <ServiceSection
        title="Career Direction Coaching"
        badge="CORE SERVICE"
        description="Deep-dive into your values, strengths, and aspirations to chart a clear, actionable path forward."
        features={[
          "Deep-dive values and strengths assessment",
          "Identification of potential career pathways",
          "Actionable roadmap for your next steps",
        ]}
        buttonText="Book Career Direction"
        imagePosition="right"
      />

      {/* Service 2: CV & Application Support */}
      <ServiceSection
        title="CV & Application Support"
        badge="POPULAR"
        description="Transform your professional documents from a list of duties to a compelling narrative of your achievements that captures the attention of recruiters and hiring managers."
        features={[
          "Comprehensive CV review and restructure",
          "Cover letter strategy and templates",
          "LinkedIn profile optimization",
        ]}
        buttonText="Book CV Support"
        imagePosition="left"
      />

      {/* Service 3: Interview Coaching */}
      <ServiceSection
        title="Interview Coaching"
        badge="CONFIDENCE BUILDER"
        description="Turn interview anxiety into quiet confidence. We'll practice answering tough questions, structuring your responses, and presenting your authentic self effectively."
        features={[
          "Mock interview sessions tailored to your industry",
          "Constructive, detailed feedback on delivery and content",
          "Strategies for managing nerves and building rapport",
        ]}
        buttonText="Book Interview Coaching"
        imagePosition="right"
      />

      {/* Service 4: Career Change Coaching */}
      <ServiceSection
        title="Career Change Coaching"
        badge="TRANSFORMATION"
        description="A comprehensive, longer-term program for those looking to pivot entirely. We'll navigate the emotional complexities of shifting industries and practical complications of career transitions."
        features={[
          "In-depth skills auditing for transferability",
          "Market research and networking strategies",
          "Step-by-step transition action plan",
        ]}
        buttonText="Book Career Change Program"
        imagePosition="left"
      />

      {/* Testimonial */}
      <section className="bg-charcoal-50 border-y border-border py-16 md:py-20">
        <div className="container max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-serif italic text-charcoal-700 mb-8">
            "The CV support was transformative. We reshaped my experience to highlight leadership, and within three weeks I had secured interviews for two Senior Project Manager roles. I accepted an offer last week!"
          </blockquote>
          <div>
            <p className="font-serif font-semibold text-charcoal-900">Sarah T.</p>
            <p className="text-charcoal-600">Executive Senior Project Manager Role</p>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="container py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-4">
            Flexible Packages
          </h2>
          <p className="text-lg text-charcoal-600">
            Choose the support that fits your needs and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Single Session */}
          <PricingCard
            title="Single Session"
            price="£75"
            duration="1 hour"
            description="Perfect for a focused conversation or specific challenge."
            features={["1-hour session", "Tailored to your needs", "Email follow-up"]}
          />

          {/* 3-Session Package */}
          <PricingCard
            title="3-Session Package"
            price="£195"
            duration="3 hours"
            description="Build momentum with ongoing support."
            features={["3 one-hour sessions", "Structured progression", "Between-session support", "15% savings"]}
            featured
          />

          {/* Career Change Program */}
          <PricingCard
            title="Career Change Program"
            price="£450"
            duration="8 weeks"
            description="Comprehensive transformation for a complete career pivot."
            features={["6 one-hour sessions", "Weekly accountability", "CV & interview prep", "Networking guidance", "20% savings"]}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-charcoal-600 mb-6">
            All packages include a free 15-minute discovery call to ensure we're a good fit.
          </p>
          <Link href="/contact">
            <Button className="btn-primary">Book Your Discovery Call</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to invest in yourself?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's explore which service is right for your current situation.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-charcoal-50 font-semibold px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceSection({
  title,
  badge,
  description,
  features,
  buttonText,
  imagePosition,
}: {
  title: string;
  badge: string;
  description: string;
  features: string[];
  buttonText: string;
  imagePosition: "left" | "right";
}) {
  const content = (
    <div className="flex flex-col justify-center">
      <div className="inline-block mb-4">
        <span className="label-caps text-primary bg-primary/10 px-3 py-1 rounded-full text-xs">
          {badge}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal-900 mb-6">
        {title}
      </h2>
      <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-charcoal-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact">
        <Button className="btn-primary w-fit">{buttonText}</Button>
      </Link>
    </div>
  );

  const image = (
    <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 flex items-center justify-center">
        <div className="text-center text-charcoal-400">
          <p className="font-serif text-lg">Service Image</p>
          <p className="text-sm">High-quality coaching image</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container py-16 md:py-24 border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {imagePosition === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  duration,
  description,
  features,
  featured = false,
}: {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-8 transition-all ${
        featured
          ? "bg-primary text-white border-primary shadow-lg scale-105"
          : "bg-white border-border hover:shadow-md"
      }`}
    >
      {featured && (
        <div className="inline-block mb-4 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
          MOST POPULAR
        </div>
      )}
      <h3 className={`text-2xl font-serif font-bold mb-2 ${featured ? "text-white" : "text-charcoal-900"}`}>
        {title}
      </h3>
      <p className={`text-sm mb-4 ${featured ? "text-white/80" : "text-charcoal-600"}`}>
        {description}
      </p>
      <div className="mb-6 pb-6 border-b border-current border-opacity-20">
        <p className={`text-4xl font-bold ${featured ? "text-white" : "text-charcoal-900"}`}>
          {price}
        </p>
        <p className={`text-sm ${featured ? "text-white/80" : "text-charcoal-600"}`}>
          {duration}
        </p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={
          featured
            ? "w-full bg-white text-primary hover:bg-charcoal-50 font-semibold"
            : "w-full btn-primary"
        }
      >
        Get Started
      </Button>
    </div>
  );
}
