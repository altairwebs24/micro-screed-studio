import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/flooring-site";
import { bookingSchema, createWhatsAppBookingUrl, type BookingDetails } from "@/lib/booking";

export const Route = createFileRoute("/bookings")({
  head: () => ({
    meta: [
      { title: "Book a Flooring Consultation | Micro Screed Flooring" },
      { name: "description", content: "Tell Micro Screed Flooring about your space. Your details open in a WhatsApp message so we can take it from there." },
      { property: "og:title", content: "Book a Flooring Consultation | Micro Screed Flooring" },
      { property: "og:description", content: "Share a few details about your flooring project and start a conversation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookingsPage,
});

const fieldLabels: Record<string, string> = {
  name: "Please enter your name.",
  phone: "Please enter a valid phone number.",
  email: "Please enter a valid email address.",
  location: "Please enter the project location.",
  projectType: "Please choose the type of space.",
  area: "Please add an approximate area.",
};

function BookingsPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const result = bookingSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string") nextErrors[key] = fieldLabels[key] ?? issue.message;
      }
      setErrors(nextErrors);
      event.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }

    setErrors({});
    window.location.assign(createWhatsAppBookingUrl(result.data as BookingDetails));
  }

  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-lead section-wrap booking-lead">
          <p className="eyebrow">04 — Your project starts here</p>
          <h1>Tell us a little<br />about your space.</h1>
          <p className="page-lead-copy">A few details help us understand what you’re looking for. When you send the form, it’ll open as a message in WhatsApp — ready for you to send.</p>
        </section>
        <section className="booking-layout section-wrap">
          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading"><span>01</span><div><h2>Your details</h2><p>So we know who we’re speaking with.</p></div></div>
            <div className="form-fields">
              <label className="form-field">
                <span>Your name <b aria-hidden="true">*</b></span>
                <input autoComplete="name" name="name" required maxLength={80} placeholder="Name and surname" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "error-name" : undefined} />
                {errors.name && <small id="error-name" className="field-error">{errors.name}</small>}
              </label>
              <label className="form-field">
                <span>Phone number <b aria-hidden="true">*</b></span>
                <input autoComplete="tel" name="phone" type="tel" required maxLength={30} placeholder="e.g. 082 123 4567" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "error-phone" : undefined} />
                {errors.phone && <small id="error-phone" className="field-error">{errors.phone}</small>}
              </label>
              <label className="form-field">
                <span>Email <small>(if you prefer)</small></span>
                <input autoComplete="email" name="email" type="email" maxLength={254} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "error-email" : undefined} />
                {errors.email && <small id="error-email" className="field-error">{errors.email}</small>}
              </label>
            </div>
            <div className="form-heading form-heading-spaced"><span>02</span><div><h2>Your space</h2><p>We can work out the details together.</p></div></div>
            <div className="form-fields">
              <label className="form-field">
                <span>Where is the project? <b aria-hidden="true">*</b></span>
                <input name="location" required maxLength={120} placeholder="Area or suburb" aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "error-location" : undefined} />
                {errors.location && <small id="error-location" className="field-error">{errors.location}</small>}
              </label>
              <label className="form-field">
                <span>What kind of space? <b aria-hidden="true">*</b></span>
                <select name="projectType" required defaultValue="" aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? "error-projectType" : undefined}>
                  <option value="" disabled>Choose a space</option>
                  <option>Indoor living area</option>
                  <option>Kitchen or dining room</option>
                  <option>Patio or outdoor space</option>
                  <option>Floor levelling</option>
                  <option>Something else</option>
                </select>
                {errors.projectType && <small id="error-projectType" className="field-error">{errors.projectType}</small>}
              </label>
              <label className="form-field">
                <span>Approximate floor area <small>(if known)</small></span>
                <input name="area" maxLength={40} placeholder="e.g. about 35 square metres" aria-invalid={Boolean(errors.area)} aria-describedby={errors.area ? "error-area" : undefined} />
                {errors.area && <small id="error-area" className="field-error">{errors.area}</small>}
              </label>
              <label className="form-field">
                <span>When are you hoping to start? <small>(optional)</small></span>
                <input name="startDate" type="date" />
              </label>
              <label className="form-field form-field-wide">
                <span>Anything else you’d like us to know? <small>(optional)</small></span>
                <textarea name="message" rows={4} maxLength={1000} placeholder="A little about the space or the finish you have in mind…" />
              </label>
            </div>
            <div className="form-submit-row">
              <p>Your details will open in WhatsApp for you to send.</p>
              <Button type="submit" className="form-submit">Continue to WhatsApp <ArrowRight aria-hidden="true" /></Button>
            </div>
          </form>
          <aside className="booking-aside">
            <div className="aside-note">
              <MessageCircle aria-hidden="true" />
              <p className="eyebrow">No pressure, just a chat</p>
              <h2>Not sure where to start?</h2>
              <p>Tell us what’s on your mind. We’ll help you figure out the next step and whether micro screed feels right for your home.</p>
              <a className="text-link" href="https://wa.me/27796099667" target="_blank" rel="noreferrer">Message us directly <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="contact-details">
              <p><Phone aria-hidden="true" /><span><small>Give us a call</small><a href="tel:+27796099667">079 609 9667</a></span></p>
              <p><MapPin aria-hidden="true" /><span><small>Find us around</small><span>Riverside View, Fourways</span></span></p>
              <p><CalendarDays aria-hidden="true" /><span><small>Happy to talk it through</small><Link to="/about">A little more about us</Link></span></p>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}