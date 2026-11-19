import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { media } from "@/lib/flooring-media";

const navigation = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "About", to: "/about" as const },
  { label: "Bookings", to: "/bookings" as const },
];

export function SiteHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-link" to="/" aria-label="Micro Screed Flooring home" onClick={() => setMenuOpen(false)}>
          <img src={media.logo} alt="Micro Screed Flooring — smooth finish, lasting quality" />
          <span>MICRO SCREED<br /><b>FLOORING</b></span>
        </Link>
        <nav className={`site-nav${menuOpen ? " site-nav-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.to}
              className={`site-nav-link${location.pathname === item.to ? " site-nav-active" : ""}`}
              to={item.to}
              aria-current={location.pathname === item.to ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="header-book-button"><Link to="/bookings">Let’s talk <ArrowUpRight aria-hidden="true" /></Link></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <img src={media.logo} alt="" />
          <p>Good floors, made<br />for living.</p>
        </div>
        <div className="footer-column">
          <p className="eyebrow eyebrow-light">Come say hello</p>
          <a href="tel:+27796099667">079 609 9667</a>
          <a href="mailto:microscreedflooring@gmail.com">microscreedflooring@gmail.com</a>
          <span>Riverside View, Fourways</span>
        </div>
        <div className="footer-column footer-pages">
          <p className="eyebrow eyebrow-light">Find your way</p>
          {navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
      </div>
      <div className="section-wrap footer-bottom"><span>Micro Screed Flooring</span><span>Fourways · Johannesburg</span></div>
    </footer>
  );
}