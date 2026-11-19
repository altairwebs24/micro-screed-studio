import { ArrowRight, HeartHandshake, MapPin, Wrench } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteFooter, SiteHeader } from "@/components/flooring-site";
import { media } from "@/lib/flooring-media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Micro Screed Flooring" },
      { name: "description", content: "Meet Micro Screed Flooring, a Fourways flooring team committed to careful workmanship and thoughtful service." },
      { property: "og:title", content: "About Us | Micro Screed Flooring" },
      { property: "og:description", content: "Good flooring starts with listening, preparation, and care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-lead section-wrap about-lead">
          <p className="eyebrow">03 — A little about us</p>
          <h1>Good work.<br />Good people.</h1>
          <p className="page-lead-copy">We believe a good floor should feel easy to live with — and getting there should feel just as straightforward.</p>
        </section>
        <section className="about-story section-wrap">
          <div className="about-photo">
            <img src={media["floor-preparation"]} alt="A flooring specialist carefully preparing a room before the new surface is applied" loading="lazy" />
            <span className="image-caption">The work begins before the finish</span>
          </div>
          <div className="about-story-copy">
            <p className="eyebrow">Care in every layer</p>
            <h2>It’s the details you don’t see that matter, too.</h2>
            <p>Micro Screed Flooring works with homes and everyday spaces to create smooth, seamless surfaces. We take time to understand the room, prepare the floor, and finish the job with care.</p>
            <p>We’re based around Fourways, and we’re always happy to talk through the options before you decide.</p>
          </div>
        </section>
        <section className="about-values-band">
          <div className="section-wrap about-values">
            <article><HeartHandshake aria-hidden="true" /><h3>People first</h3><p>Friendly conversations and clear next steps, from the beginning.</p></article>
            <article><Wrench aria-hidden="true" /><h3>Careful hands</h3><p>Good preparation and attention to the finish are part of the job.</p></article>
            <article><MapPin aria-hidden="true" /><h3>Close to home</h3><p>Based in Fourways, serving homes across the area.</p></article>
          </div>
        </section>
        <section className="closing-strip section-wrap">
          <div><p className="eyebrow">Your space, your plans</p><h2>Tell us what you’re thinking.</h2></div>
          <Link className="button-link button-link-dark" to="/bookings">Get in touch <ArrowRight aria-hidden="true" /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}