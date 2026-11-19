import { ArrowDownRight, ArrowRight, Check, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteFooter, SiteHeader } from "@/components/flooring-site";
import { media } from "@/lib/flooring-media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Micro Screed Flooring | Smooth finish. Lasting quality." },
      {
        name: "description",
        content:
          "Micro Screed Flooring creates smooth, seamless floors for homes and outdoor spaces across Fourways and Johannesburg.",
      },
      { property: "og:title", content: "Micro Screed Flooring | Smooth finish. Lasting quality." },
      {
        property: "og:description",
        content: "Thoughtful micro screed finishes for the spaces you live in.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: media.hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: media.hero },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <img className="home-hero-image" src={media.hero} alt="A new smooth concrete patio beside a swimming pool" />
          <div className="home-hero-shade" />
          <div className="home-hero-copy">
            <p className="eyebrow eyebrow-light">MICRO SCREED FLOORING · FOURWAYS</p>
            <h1>Good floors make a house feel like home.</h1>
            <p className="hero-intro">
              Seamless, hard-wearing finishes made for real life — from slow mornings in the kitchen to
              long afternoons outside.
            </p>
            <Link className="button-link button-link-light" to="/bookings">
              Tell us about your space <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <span className="hero-index">01 / A smoother starting point</span>
        </section>

        <section className="intro-band section-wrap">
          <div>
            <p className="eyebrow">A fresh way to finish your floor</p>
            <h2>A clean, continuous finish.<br />Nothing fussy. Everything considered.</h2>
          </div>
          <Link className="text-link" to="/services">Get to know micro screed <ArrowRight aria-hidden="true" /></Link>
        </section>

        <section className="benefit-band" aria-label="What matters to us">
          <div className="section-wrap benefit-grid">
            <article className="benefit-item">
              <Layers3 aria-hidden="true" />
              <h3>One seamless surface</h3>
              <p>Fewer joins, a calmer look, and a finish that lets the room breathe.</p>
            </article>
            <article className="benefit-item">
              <ShieldCheck aria-hidden="true" />
              <h3>Made to be lived on</h3>
              <p>Durable, practical flooring for the little everyday moments.</p>
            </article>
            <article className="benefit-item">
              <Sparkles aria-hidden="true" />
              <h3>Thoughtful workmanship</h3>
              <p>Good preparation and careful finishing make all the difference.</p>
            </article>
          </div>
        </section>

        <section className="featured-project section-wrap">
          <div className="featured-image-wrap">
            <img src={media["open-plan-floor"]} alt="Open-plan living space with a light, continuous concrete floor" />
            <span className="image-caption">A lighter feel, from room to room</span>
          </div>
          <div className="featured-copy">
            <p className="eyebrow">A look at the work</p>
            <h2>Made to fit the way you live.</h2>
            <p>Every space is a little different. Take a closer look at real floors, real rooms, and finishes made by hand.</p>
            <Link className="text-link" to="/projects">See the projects <ArrowRight aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="closing-strip section-wrap">
          <div>
            <p className="eyebrow">Let’s start with a conversation</p>
            <h2>What could your floor feel like?</h2>
          </div>
          <Link className="button-link button-link-dark" to="/bookings">Arrange a chat <ArrowDownRight aria-hidden="true" /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}