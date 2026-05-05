import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Sun, Compass, FileText, MessageSquare, Zap } from "lucide-react";

/**
 * Design Philosophy: Minimalist warmth with editorial style
 * - Generous whitespace for mental clarity
 * - Sage green primary color for growth and renewal
 * - Noto Serif headlines for authority and trust
 * - Manrope body text for approachability
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900 leading-tight">
              Making your ambition, a reality
            </h1>
            <p className="text-lg text-charcoal-600 max-w-lg leading-relaxed">
              Career Coaching Sheffield. You deserve more than just getting through the week. Together, we'll uncover your strengths, clarify your direction, and build the confidence to make a meaningful change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button className="btn-primary">Book a Free Consultation</Button>
              </Link>
              <Link href="/services">
                <Button className="btn-secondary">See how I can help</Button>
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
            <img 
              src="/manus-storage/siteimage-001_ec79a679.png" 
              alt="Jill - Career Coach" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="bg-charcoal-50 border-y border-border py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current Reality */}
            <div className="bg-white p-8 md:p-10 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">
                The Current Reality
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Waking up unfulfilled, scrolling through job boards without direction, and feeling like your potential is trapped behind a wall of indecision and self-doubt.
              </p>
            </div>

            {/* Desired Future */}
            <div className="bg-primary p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                The Desired Future
              </h3>
              <p className="text-white/90 leading-relaxed">
                Waking up with clarity, moving forward with a strategic plan, and confidently stepping into a role that aligns with your values, skills, and life goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-24 md:py-32" id="services">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-4">
            How We Can Work Together
          </h2>
          <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
            Targeted support tailored to where you are in your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Card 1 */}
          <ServiceCard
            icon={<Compass className="w-6 h-6" />}
            title="Career Direction"
            description="Uncover what truly drives you and identify paths that align with your core values."
          />

          {/* Service Card 2 */}
          <ServiceCard
            icon={<FileText className="w-6 h-6" />}
            title="CV Support"
            description="Transform your resume from a list of duties to a compelling narrative of your achievements."
          />

          {/* Service Card 3 */}
          <ServiceCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Interview Coaching"
            description="Build confidence and articulate your value clearly to leave a lasting impression."
          />

          {/* Service Card 4 */}
          <ServiceCard
            icon={<Zap className="w-6 h-6" />}
            title="Career Change"
            description="Strategic guidance for navigating a complete industry pivot with confidence."
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-charcoal-50 border-y border-border py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-4">
              A Simple Path Forward
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              No overwhelming commitments. Just a steady, supported process toward your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <ProcessStep number={1} title="Book a Call" description="We start with a free, no-pressure chat to see if we're a good fit and discuss your current challenges." />

            {/* Step 2 */}
            <ProcessStep number={2} title="Gain Clarity" description="Through thoughtful exercises and deep conversations, we untangle the mess and find your clear direction." />

            {/* Step 3 */}
            <ProcessStep number={3} title="Take Action" description="With a solid plan in place, we tackle your CV, LinkedIn, and interview prep to make the move a reality." />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-24 md:py-32">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-16 text-center">
          Client Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="I cannot praise Jill enough, I was extremely nervous prior and she made me feel at ease straight away. The session helped me to outline the direction I wanted to go and the steps I needed to do to get there."
            author="Sherena Devos"
            role="Career Changer"
          />

          <TestimonialCard
            quote="I'd thoroughly recommend Jill to anyone considering a career change. She's incredibly knowledgeable, supportive and genuinely invested in helping you succeed."
            author="James Langley"
            role="Senior Project Manager"
          />

          <TestimonialCard
            quote="Jill's guidance was transformative. We reshaped my experience to highlight leadership, and within three weeks I had secured interviews for two Senior Project Manager roles."
            author="Fiona Atkinson"
            role="Career Changer"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to find your grounding?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's start with a free 15-minute discovery call to explore if we're a good fit.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-primary hover:bg-charcoal-50 font-semibold px-8 py-3">
              Book Your Discovery Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-border hover:shadow-md transition-all group">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">{title}</h3>
      <p className="text-charcoal-600 leading-relaxed mb-6">{description}</p>
      <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
        Learn more <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center font-serif text-2xl font-bold text-primary mb-6">
        {number}
      </div>
      <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-3">{title}</h3>
      <p className="text-charcoal-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="bg-charcoal-50 p-8 rounded-xl border border-border">
      <p className="text-charcoal-700 leading-relaxed mb-6 italic">"{quote}"</p>
      <div className="pt-6 border-t border-border">
        <p className="font-serif font-semibold text-charcoal-900">{author}</p>
        <p className="text-sm text-charcoal-600">{role}</p>
      </div>
    </div>
  );
}
