import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Compass, GraduationCap, Users, Banknote, Wrench, ChevronDown } from "lucide-react";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const benefits = [
    {
      icon: Compass,
      title: "إرشاد وتوجيه الخبراء",
      content: "ستحصل على إرشادات قيّمة من مرشدين متخصصين دوليين ومحليين في مختلف المجالات لمساعدتك على اتخاذ القرارات الصحيحة وتجنب الأخطاء الشائعة.",
    },
    {
      icon: GraduationCap,
      title: "برامج تدريبية متقدمة",
      content: "سنزودك بالمهارات والمعرفة اللازمة لتطوير نموذج عملك، وتحسين استراتيجيات التسويق والمبيعات، وإدارة الشؤون المالية بكفاءة، رفع الجاهزية الاستثمارية.",
    },
    {
      icon: Users,
      title: "فرص للوصول للمستثمرين",
      content: "سنساعدك على التواصل مع شبكة واسعة من المستثمرين المحتملين وعرض مشروعك عليهم.",
    },
    {
      icon: Banknote,
      title: "منح مالية",
      content: "دعم مالي لتنفيذ خططك التوسعية وتحقيق أهدافك الطموحة.",
    },
    {
      icon: Wrench,
      title: "مساعدة فنية",
      content: "تعزيز جاهزية شركتك الناشئة للاستثمار.",
    },
  ];

  return (
    <section id="benefits" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            ماذا يقدم <span className="text-primary">البرنامج؟</span>
          </h2>
          <div className="divider-glow mx-auto w-32 mb-8" />
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`bg-card rounded-xl border overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "border-primary glow-border" : "border-border/50"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-right"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        openIndex === index
                          ? "bg-gradient-to-br from-primary to-accent"
                          : "bg-secondary"
                      }`}
                      animate={openIndex === index ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <benefit.icon
                        className={`w-6 h-6 ${
                          openIndex === index ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pr-20">
                        <p className="text-muted-foreground leading-relaxed">
                          {benefit.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;