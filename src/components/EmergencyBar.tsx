export function EmergencyBar() {
  return (
    <div className="bg-slate py-8 w-full border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="max-w-xl">
          <h2 className="text-2xl font-heading font-bold text-warm-white mb-2">
            Need Emergency Roof Help?
          </h2>
          <p className="text-soft-gray">
            If your roof is leaking or storm damage needs urgent attention, call our team now for fast support.
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="tel:+10000000000"
            className="inline-flex items-center justify-center bg-clay hover:bg-clay/90 text-warm-white font-bold h-14 px-8 text-lg min-h-[48px] rounded-none shadow-lg transition-transform hover:-translate-y-1"
          >
            Call Emergency Roofing Team
          </a>
        </div>
      </div>
    </div>
  );
}
