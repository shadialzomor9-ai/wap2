import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, ArrowLeft } from "lucide-react";

interface CTASectionProps {
  applicationUrl?: string;
}

const CTASection = ({ applicationUrl = "#" }: CTASectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-primary/20 via-card to-accent/20 rounded-3xl p-12 md:p-16 border border-primary/30 overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/10 blur-xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-8"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Rocket className="w-10 h-10 text-primary-foreground" />
                </motion.div>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-black mb-6 glow-text">
                هل أنت مستعد للانطلاق؟
              </h2>

              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                انضم إلى مسرّعة الأعمال وثبة وحوّل شركتك الناشئة إلى قصة نجاح
              </p>

              <motion.a
                href={applicationUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 btn-glow px-12 py-5 rounded-xl font-bold text-xl text-primary-foreground"
              >
                <span>قدّم الآن</span>
                <ArrowLeft className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;