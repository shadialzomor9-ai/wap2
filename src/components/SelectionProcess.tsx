import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileEdit, Search, Video, ShieldCheck, Trophy } from "lucide-react";

const SelectionProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: FileEdit,
      title: "التقديم",
      content: "يتم عبر هذه الاستمارة تقديم طلب التحاق الشركة بالمسرّعة، وتتضمن الاستمارة أسئلة حول فريق عمل الشركة ومجال عملها وفرصة السوق والمرحلة الحالية من نمو الشركة.",
    },
    {
      icon: Search,
      title: "الفحص",
      content: "يقوم فريق البرنامج بمراجعة الطلبات وتحديد قائمة مختصرة للشركات الناشئة الواعدة بناءً على معايير الاختيار المذكورة آنفاً.",
    },
    {
      icon: Video,
      title: "المقابلات",
      content: "سيتم دعوة الشركات الناشئة المدرجة في القائمة المختصرة لإجراء عدد من المقابلات، إما شخصيًا أو عبر مكالمات الفيديو.",
    },
    {
      icon: ShieldCheck,
      title: "التحقق من صحة البيانات",
      content: "سيجري فريق البرنامج مزيدًا من التحقق من صحة البيانات.",
    },
    {
      icon: Trophy,
      title: "الاختيار النهائي",
      content: "بناءً على عملية التقييم، سيتم اختيار 10 من الشركات الناشئة للمشاركة في البرنامج.",
    },
  ];

  return (
    <section className="py-24 relative" ref={ref}>
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
            عملية <span className="text-primary">الاختيار</span>
          </h2>
          <div className="divider-glow mx-auto w-32 mb-8" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute right-4 md:right-1/2 md:-translate-x-1/2 z-10"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
                  <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                </div>
              </motion.div>

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] mr-16 md:mr-0 ${
                index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl p-6 border border-border/50 card-glow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.content}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;