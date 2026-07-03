import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ClipboardCheck } from "lucide-react";

const SESSION_KEY = "summitshield_qq_dismissed";

export function QuickQuoteBanner() {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firedRef = useRef(false);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  const goToForm = () => {
    dismiss();
    const el = document.getElementById("free-inspection");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const show = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      setVisible(true);
    };

    timerRef.current = setTimeout(show, 30_000);

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (pct >= 0.5) show();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="qq-overlay"
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          <motion.div
            key="qq-banner"
            role="dialog"
            aria-modal="true"
            aria-label="Get a free roof inspection"
            initial={{ y: 160, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 160, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="
              fixed z-50
              left-4 right-4
              sm:left-1/2 sm:right-auto sm:-translate-x-1/2
              sm:w-[440px]
              bottom-[10.5rem] md:bottom-24
              rounded-2xl overflow-hidden
              shadow-2xl
            "
          >
            <div className="h-1.5 w-full bg-clay" />

            <div className="bg-warm-white px-6 pt-5 pb-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-clay/10">
                    <ClipboardCheck className="w-5 h-5 text-clay" />
                  </span>
                  <p className="text-xs font-semibold tracking-widest uppercase text-clay">
                    Limited-Time Offer
                  </p>
                </div>

                <button
                  onClick={dismiss}
                  aria-label="Close"
                  className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-slate hover:bg-soft-gray transition-colors -mt-0.5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h2 className="text-navy font-bold text-xl leading-snug mb-1">
                Get Your Free Roof Inspection
              </h2>
              <p className="text-slate text-sm mb-5 leading-relaxed">
                Takes&nbsp;60&nbsp;seconds to request. No obligation,
                no&nbsp;pressure — just an honest assessment from
                SummitShield's certified inspectors.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={goToForm}
                  className="flex-1 bg-clay hover:bg-[#9e3626] active:scale-95 text-warm-white font-bold text-sm py-3 px-5 rounded-xl transition-all duration-200 shadow-md"
                >
                  Request My Free Inspection →
                </button>
                <button
                  onClick={dismiss}
                  className="text-slate text-sm font-medium py-3 px-4 rounded-xl hover:bg-soft-gray transition-colors"
                >
                  Maybe later
                </button>
              </div>

              <p className="text-xs text-slate/60 text-center mt-4">
                ✓ Licensed &amp; insured &nbsp;·&nbsp; ✓ No-cost estimate
                &nbsp;·&nbsp; ✓ Same-day response
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
