import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Contact Page - Booking and inquiry form
 * Design: Two-column layout with calendar placeholder and contact form
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900 mb-6 leading-tight">
            Take the first step toward a career you love.
          </h1>
          <p className="text-lg text-charcoal-600">
            No pressure, just a chat to see if we're a good fit. Choose a time that works for you or send a message below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Booking Section */}
          <div className="bg-charcoal-50 p-8 md:p-12 rounded-xl border border-border">
            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">
              Book a Discovery Call
            </h2>
            <p className="text-charcoal-600 mb-8">
              Schedule a free 15-minute consultation to discuss your career goals.
            </p>

            {/* Calendar Placeholder */}
            <div className="bg-white rounded-lg border-2 border-dashed border-charcoal-300 p-12 text-center mb-6">
              <div className="text-charcoal-400 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="font-serif text-lg text-charcoal-600 mb-2">
                [Booking Calendar Widget Placeholder]
              </p>
              <p className="text-sm text-charcoal-500">
                Select a date and time to secure your slot.
              </p>
            </div>

            <p className="text-sm text-charcoal-600 text-center">
              Calendar integration coming soon. In the meantime, email or call to book.
            </p>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">
              Other Inquiries
            </h2>
            <p className="text-charcoal-600 mb-8">
              Have a specific question before booking? Reach out below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-caps text-charcoal-900 mb-2 block">
                    First Name
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="label-caps text-charcoal-900 mb-2 block">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="label-caps text-charcoal-900 mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  required
                  className="w-full"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="label-caps text-charcoal-900 mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="btn-primary w-full"
                disabled={submitted}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-charcoal-50 border-y border-border py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Location */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-semibold text-charcoal-900 mb-2">
                Location
              </h3>
              <p className="text-charcoal-600 mb-2">Sheffield, UK</p>
              <p className="text-sm text-charcoal-500">
                Available globally via Zoom
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-semibold text-charcoal-900 mb-2">
                Email
              </h3>
              <a
                href="mailto:jillvalentinecareers@gmail.com"
                className="text-charcoal-600 hover:text-primary transition-colors"
              >
                jillvalentinecareers@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-semibold text-charcoal-900 mb-2">
                Phone
              </h3>
              <a
                href="tel:+447964387825"
                className="text-charcoal-600 hover:text-primary transition-colors"
              >
                07964 387825
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="container py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-4">
            Response Time
          </h2>
          <p className="text-charcoal-600">
            I aim to respond to all inquiries within 24 hours. If you have an urgent matter, please call or send a message marked "urgent" in the subject line.
          </p>
        </div>
      </section>
    </div>
  );
}
