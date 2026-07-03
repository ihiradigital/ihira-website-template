import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Shield, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const savedTop = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (savedTop) {
        window.scrollTo({ top: -parseInt(savedTop, 10), behavior: "instant" });
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
            <span
              className={`font-heading font-bold text-xl md:text-2xl tracking-tight ${
                isScrolled ? "text-navy" : "text-warm-white lg:text-navy"
              } lg:text-navy drop-shadow-sm lg:drop-shadow-none`}
            >
              SummitShield <span className="font-medium">Roofing</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-navy hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
              <a
                href="tel:+10000000000"
                className="flex items-center gap-2 text-navy hover:text-primary transition-colors font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>(800) 555-0199</span>
              </a>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-none shadow-md"
              >
                <a href="#inspection-form">Free Roof Inspection</a>
              </Button>
            </div>
          </nav>

          {/* Mobile hamburger — always on top via header z-50 */}
          <button
            className="lg:hidden p-2 text-navy bg-warm-white/80 backdrop-blur rounded-sm"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile overlay — rendered outside <header> so it lives in the root
          stacking context at z-[60], above every other fixed element (z-50). */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-cream flex flex-col lg:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            {/* Menu header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-warm-white">
              <div className="flex items-center gap-2">
                <Shield className="w-7 h-7 text-primary" />
                <span className="font-heading font-bold text-xl text-navy">
                  SummitShield
                </span>
              </div>
              <button
                className="p-2 text-navy hover:bg-soft-gray rounded-sm transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                    className="text-lg font-medium text-navy py-2 border-b border-border/50 active:text-clay transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 pt-6">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-center gap-2 py-6 text-lg border-navy text-navy rounded-none"
                >
                  <a href="tel:+10000000000" onClick={closeMenu}>
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-bold rounded-none"
                >
                  <a href="#inspection-form" onClick={closeMenu}>
                    Free Roof Inspection
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
