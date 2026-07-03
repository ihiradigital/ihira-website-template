import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
      setVisible(pct > 0.2);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:+10000000000"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="fixed left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-clay text-warm-white font-bold text-base px-6 rounded-full shadow-2xl min-h-[52px] md:hidden"
          style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
          aria-label="Call SummitShield Roofing now"
          data-testid="link-sticky-call"
        >
          <Phone className="w-4 h-4 shrink-0" />
          Call Now — (800) 555-0199
        </motion.a>
      )}
    </AnimatePresence>
  );
}
