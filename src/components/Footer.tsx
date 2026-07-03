import { Shield, ExternalLink, CheckCircle } from "lucide-react";

export function Footer() {
  const services = [
    "Roof Repair",
    "Roof Replacement",
    "Storm Damage",
    "Emergency Roofing",
    "Roof Inspection",
    "Gutter Installation",
  ];

  const trustItems = [
    "Licensed & Insured",
    "Free Roof Inspections",
    "Warranty-Backed Work",
    "5-Star Rated Service",
  ];

  return (
    <footer className="bg-navy pt-20 pb-8 text-warm-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-copper" />
              <span className="font-heading font-bold text-2xl tracking-tight">
                SummitShield
              </span>
            </a>
            <p className="text-soft-gray mb-8 leading-relaxed">
              Honest inspections. Durable materials. Clean professional work.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate flex items-center justify-center hover:bg-copper transition-colors">
                <ExternalLink className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate flex items-center justify-center hover:bg-copper transition-colors">
                <ExternalLink className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate flex items-center justify-center hover:bg-copper transition-colors">
                <ExternalLink className="w-5 h-5" />
                <span className="sr-only">Google</span>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-warm-white">Roofing Services</h3>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a href="#services" className="text-soft-gray hover:text-copper transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-warm-white">Contact</h3>
            <ul className="space-y-4 text-soft-gray">
              <li>
                <a href="tel:+10000000000" className="hover:text-copper transition-colors font-bold text-warm-white">
                  Phone: (800) 555-0199
                </a>
              </li>
              <li>
                <a href="mailto:info@summitshieldroofing.com" className="hover:text-copper transition-colors">
                  Email: info@summitshieldroofing.com
                </a>
              </li>
              <li>
                Address: Austin, TX (serving surrounding areas)
              </li>
              <li className="pt-4">
                Hours: Mon&ndash;Fri 7am&ndash;6pm<br />
                Sat 8am&ndash;2pm<br />
                <span className="text-clay font-semibold">Emergency: 24/7</span>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-warm-white">Trust</h3>
            <ul className="space-y-4">
              {trustItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-soft-gray">
                  <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-soft-gray text-sm">
          <p>&copy; {new Date().getFullYear()} SummitShield Roofing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-warm-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-warm-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
