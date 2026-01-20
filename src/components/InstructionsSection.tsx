import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, AlertCircle } from "lucide-react";

const InstructionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Instructions Card */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 glow-border mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">تعليمات للمتقدمين</h3>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  تعبئة جميع أقسام هذه الاستمارة كخطوة أولى ستمكنك من الانتقال إلى المرحلة الثانية من عملية التقييم.
                </p>
              </div>
            </div>
          </div>

          {/* Note Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/50 rounded-2xl p-6 border border-primary/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">ملاحظة</h4>
                <p className="text-muted-foreground leading-relaxed">
                  إن هذه المعلومات تساعدنا لفهم فريقك بشكل أفضل، وخططك، وكيف يمكن لبرنامجنا دعم النمو الذي تحتاجه لنجاح شركتك الناشئة.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructionsSection;