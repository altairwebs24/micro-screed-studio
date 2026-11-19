import { ArrowRight, Check, Layers3, Ruler, Sparkles } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteFooter, SiteHeader } from "@/components/flooring-site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Flooring Services | Micro Screed Flooring" },
      { name: "description", content: "Explore micro screed flooring, floor levelling and decorative finishes for homes and outdoor spaces." },
      { property: "og:title", content: "Flooring Services | Micro Screed Flooring" },
      { property: "og:description", content: "Find the right smooth, seamless finish for your space." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    number: "01",
    icon: Layers3,
    title: "Micro screed flooring",
    description: "A smooth, continuous finish for a fresh, modern feel. Micro screed brings a quiet, tactile surface to everyday rooms.",
    details: ["Living spaces", "Kitchens and dining areas", "Selected outdoor areas"],
  },
  {
    number: "02",
    icon: Ruler,
    title: "Floor levelling",
    description: "A level base is the start of a good-looking floor. We help prepare uneven surfaces for a cleaner, more consistent result.",
    details: ["Surface assessment", "Subfloor preparation", "Levelling for a new finish"],
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Decorative finishes",
    description: "A practical finish can still feel personal. Explore a simple, polished look that complements the rest of your home.",
    details: ["Seamless appearance", "Clean, modern character", "A finish chosen for your space"],
  },
];

function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-lead section-wrap">
          <p className="eyebrow">01 — What we do</p>
          <h1>Floors, finished<br />with care.</h1>
          <p className="page-lead-copy">We help homeowners find a hard-working floor that feels just right at home — from the very first layer to the last detail.</p>
        </section>
        <section className="service-list section-wrap" aria-label="Flooring services">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <Icon className="service-icon" aria-hidden="true" />
                <div className="service-description">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <ul className="service-details">
                  {service.details.map((detail) => <li key={detail}><Check aria-hidden="true" /> {detail}</li>)}
                </ul>
              </article>
            );
          })}
        </section>
        <section className="section-wrap service-note">
          <div>
            <p className="eyebrow">A good place to begin</p>
            <h2>Tell us what you have in mind.</h2>
          </div>
          <Link className="text-link" to="/bookings">Talk through your project <ArrowRight aria-hidden="true" /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}