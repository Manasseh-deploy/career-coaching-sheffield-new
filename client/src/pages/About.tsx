import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb } from "lucide-react";

/**
 * About Page - Jill's biography and coaching philosophy
 * Design: Long-form narrative with personal touches
 */

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900 mb-6 leading-tight">
              Making your ambition, a reality
            </h1>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Hi, I'm Jill Valentine. I'm a career coach based in Sheffield who believes that your career should be a source of fulfillment, not just a paycheck.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 flex items-center justify-center">
              <div className="text-center text-charcoal-400">
                <p className="font-serif text-lg">Jill's Portrait</p>
                <p className="text-sm">Professional headshot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="bg-charcoal-50 border-y border-border py-20 md:py-28">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-8">My Story</h2>
          <div className="space-y-6 text-charcoal-700 leading-relaxed">
            <p>
              For over a decade, I worked in corporate HR and talent development, helping organizations build stronger teams and supporting individuals through career transitions. What I discovered was that most people don't need a corporate playbook—they need someone who genuinely listens, asks the right questions, and helps them trust their own judgment.
            </p>
            <p>
              I've sat across from hundreds of professionals at crossroads: the mid-career pivot, the confidence crisis after redundancy, the quiet desperation of being in the wrong role. And I've learned that the most transformative conversations happen when someone feels truly seen and supported.
            </p>
            <p>
              That's why I became a coach. I wanted to create a space where people could explore their ambitions without judgment, where their fears were acknowledged, and where practical strategies met genuine encouragement. I've worked with career changers, professionals stepping into leadership, and people simply asking, "Is this it?"
            </p>
            <p>
              My approach is grounded in empathy, psychology, and pragmatism. I don't believe in one-size-fits-all advice. Instead, I work with you to understand your unique values, strengths, and circumstances—and then help you build a path that feels authentic and achievable.
            </p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="container py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 flex items-center justify-center">
              <div className="text-center text-charcoal-400">
                <p className="font-serif text-lg">Sheffield Skyline</p>
                <p className="text-sm">City image placeholder</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
              Rooted in Sheffield, open to the world
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
              I'm based in Sheffield, a city with a rich heritage of innovation and resilience. I work with clients locally, nationally, and internationally—whether that's face-to-face in Sheffield or via Zoom from anywhere in the world.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-charcoal-700">
                  <strong>In-person coaching:</strong> Available in Sheffield for local clients
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-charcoal-700">
                  <strong>Virtual coaching:</strong> Available globally via Zoom
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span className="text-charcoal-700">
                  <strong>Flexible scheduling:</strong> Early mornings, evenings, and weekends available
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outside of Work */}
      <section className="bg-charcoal-50 border-y border-border py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
                Outside of Work
              </h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                I'm a keen runner and have completed several marathons, which taught me a lot about resilience, pacing, and the importance of the right support system. I'm also passionate about reading, cooking, and spending time in nature—especially the Peak District, which is right on Sheffield's doorstep.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                I believe that the best coaching comes from someone who understands that life is multifaceted. Your career matters, but so does your wellbeing, your relationships, and your sense of purpose. That's the lens through which I approach every conversation.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 flex items-center justify-center">
                <div className="text-center text-charcoal-400">
                  <p className="font-serif text-lg">Personal Photo</p>
                  <p className="text-sm">Lifestyle image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="container py-20 md:py-28">
        <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-16 text-center">
          My Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ApproachCard
            icon={<Heart className="w-8 h-8" />}
            title="Holistic Review"
            description="I don't just look at your CV or job title. I explore your values, strengths, lifestyle preferences, and long-term vision to ensure your next move aligns with who you really are."
          />

          <ApproachCard
            icon={<Lightbulb className="w-8 h-8" />}
            title="Actionable Clarity"
            description="Coaching isn't about endless reflection. We move from insight to action, creating concrete steps and strategies you can implement immediately."
          />
        </div>
      </section>

      {/* Contributing Author */}
      <section className="bg-charcoal-50 border-y border-border py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
                Contributing Author
              </h2>
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                I've contributed to several publications on career development, resilience, and professional growth. My writing focuses on practical, empathetic guidance for people navigating career transitions.
              </p>
              <p className="text-charcoal-600 mb-6 leading-relaxed">
                I'm also a regular contributor to career development blogs and have been featured in local and national media discussing workplace trends and career coaching.
              </p>
              <Link href="/contact">
                <Button className="btn-primary">Get in Touch</Button>
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 flex items-center justify-center">
                <div className="text-center text-charcoal-400">
                  <p className="font-serif text-lg">Book Cover</p>
                  <p className="text-sm">Publication image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
            Ready to find your grounding?
          </h2>
          <p className="text-lg text-charcoal-600 mb-8">
            Let's start with a free 15-minute discovery call to explore if we're a good fit for working together.
          </p>
          <Link href="/contact">
            <Button className="btn-primary">Book Your Discovery Call</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ApproachCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 md:p-10 rounded-xl border border-border hover:shadow-md transition-all">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">
        {title}
      </h3>
      <p className="text-charcoal-600 leading-relaxed">{description}</p>
    </div>
  );
}
