import { ArrowUpRight } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { SiteFooter, SiteHeader } from "@/components/flooring-site";
import { projectPhotos } from "@/lib/flooring-media";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | Micro Screed Flooring" },
      { name: "description", content: "See Micro Screed Flooring project photos, from poolside surfaces to light-filled living spaces." },
      { property: "og:title", content: "Our Projects | Micro Screed Flooring" },
      { property: "og:description", content: "A selection of real flooring work and in-progress finishes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-lead section-wrap project-lead">
          <p className="eyebrow">02 — The work, up close</p>
          <h1>Every finish<br />has a story.</h1>
          <p className="page-lead-copy">A little look at the surfaces and spaces we’ve been working on. Each floor starts with a conversation and a lot of careful preparation.</p>
        </section>
        <section className="project-gallery section-wrap" aria-label="Flooring project photos">
          {projectPhotos.map((project, index) => (
            <figure className={`project-photo project-photo-${index + 1}`} key={project.src}>
              <img src={project.src} alt={project.alt} loading="lazy" />
              <figcaption><span>{project.title}</span><ArrowUpRight aria-hidden="true" /></figcaption>
            </figure>
          ))}
        </section>
        <section className="section-wrap gallery-footnote">
          <p>Have a space in mind? We’d love to see it.</p>
          <Link className="text-link" to="/bookings">Talk about your floor <ArrowUpRight aria-hidden="true" /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}