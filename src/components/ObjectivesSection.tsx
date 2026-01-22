import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Leaf, UserCircle, TrendingUp } from "lucide-react";

const ObjectivesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const objectives = [
    {
      icon: Briefcase,
      text: "تسريع نمو الشركات الناشئة:\nمساعدة الشركات على الانتقال بسرعة من مرحلة الفكرة أو النمو المبكر إلى مرحلة أكثر نضجًا واستقرارًا.",
      color: "from-primary to-accent",
    },
    {
      icon: Leaf,
      text: "زيادة فرص الاستدامة والتوسع مساعدة الشركات على وضع خطط واضحة للنمو، والتوسع في الأسواق، وتحقيق الاستدامة المالية.",
      color: "from-accent to-primary",
    },
    {
      icon: UserCircle,
      text: "بناء القدرات الريادية للمؤسسين ورفع الجاهزية الاستثمارية لشركاتهم رفع كفاءة المؤسسين في مجالات مثل الإدارة، التسويق، التمويل، القيادة، وبناء الفرق.",
      color: "from-primary to-accent",
    },
    {
      icon: TrendingUp,
      text: "توسيع الشبكات والعلاقات تمكين الشركات من بناء علاقات مع شركاء محتملين، عملاء، مستثمرين، ومؤسسات داعمة ضمن منظومة ريادة الأعمال.",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="objectives" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            أهداف <span className="text-primary">البرنامج</span>
          </h2>
          <div className="divider-glow mx-auto w-32 mb-8" />
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card rounded-2xl p-8 border border-border/50 card-glow overflow-hidden">
                {/* Animated background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${objective.color} opacity-5 rounded-full blur-2xl`} />
                
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${objective.color} flex items-center justify-center`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <objective.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  {/* Text */}
                  <p className="text-lg text-foreground/90 leading-relaxed flex-1">
                    {objective.text}
                  </p>
                </div>

                {/* Number indicator */}
                <div className="absolute bottom-4 left-4 text-6xl font-black text-primary/10">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
