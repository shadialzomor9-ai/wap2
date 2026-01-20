import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MapPin, 
  Lightbulb, 
  Clock, 
  UserCheck, 
  Users, 
  TrendingUp, 
  Target, 
  Calculator, 
  Settings, 
  FileText,
  Sparkles
} from "lucide-react";

const CriteriaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const criteria = [
    {
      icon: MapPin,
      title: "نطاق العمل",
      content: "يجب أن تقدّم الشركة الناشئة منتجاتها أو خدماتها داخل اليمن، وأن تكون عملياتها الرئيسية قائمة داخل اليمن.",
    },
    {
      icon: Lightbulb,
      title: "الأثر والابتكار",
      content: "يجب أن تقدّم الشركة الناشئة حلولاً مبتكرة تُحدث أثراً إيجابياً في المجتمع والاقتصاد اليمني، وتتعامل بفعالية مع مشكلة قائمة، تتميز بها عن بقية المنافسين (قيمة تنافسية أو مضافة).",
    },
    {
      icon: Clock,
      title: "التفرغ والالتزام",
      content: "يجب أن يلتزم الفريق المؤسس في الشركة الناشئة بالتفرّغ الكامل والمشاركة في جميع أنشطة المسرّعة بحسب المطلوب إما حضورياً أو أونلاين.",
    },
    {
      icon: UserCheck,
      title: "المؤسسين",
      content: "يجب أن يكون أحد مؤسسي الشركة الناشئة على الأقل يحمل الجنسية اليمنية مع تقديم مستندات إثبات معمدة (سجل تجاري، أو عقد تأسيس، أو عقد شراكة (في حال وجود أكثر من مؤسس) من محامي معتمد أو من الجهات ذات الاختصاص.",
    },
    {
      icon: Users,
      title: "الفريق المؤسس",
      content: "يجب أن تمتلك الشركة الناشئة مؤسساً أو فريقاً مؤسس لديه خبرة ومهارات مناسبة في مجال العمل، مع توزيع أدوار واضحة بين أعضاء الفريق (هيكل إداري تنظيمي واضح) بما يضمن نجاح الشركة الناشئة وقدرتها على النمو والتوسع.",
    },
    {
      icon: TrendingUp,
      title: "قابلية النمو والتوسع",
      content: "يجب أن تقدم الشركة الناشئة نموذجاً يعكس قابليتها للنمو وقدرتها على التوسع وقدرتها على جذب المستثمرين والشركاء.",
    },
    {
      icon: Target,
      title: "قدرة المنتج أو الخدمة على المنافسة (Market Traction)",
      content: "وجود مؤشرات تَقَدُم واضحة مثل اكتساب عملاء، تفاعل المستخدمين، تحقيق إيرادات، أو عقود شراكات استراتيجية.",
    },
    {
      icon: Calculator,
      title: "الجدوى المالية",
      content: "يجب أن تمتلك الشركة الناشئة بيان مالي واضح وصحيح لآخر 6 أشهر على الأقل، ويُفضل أن يكون لدى الشركة الناشئة سجل مالي تقني واضح كتطبيق أو برنامج محاسبي لإدارة عملياتها المحاسبية.",
    },
    {
      icon: Settings,
      title: "القدرة التشغيلية",
      content: "يجب أن يكون للشركة الناشئة قدرة على تسيير وتغطية عملياتها التشغيلية.",
    },
    {
      icon: FileText,
      title: "نموذج العمل والتوقعات المالية",
      content: "يجب أن تقدم الشركة الناشئة نموذج عمل واضح (Business Model) وتوقعات مالية واقعية تشمل الإيرادات والمصروفات واستدامة التدفقات النقدية.",
    },
    {
      icon: Sparkles,
      title: "وضوح أثر البرنامج",
      content: "فهم وقدرة واضحين لكيفية الاستفادة من أنشطة البرنامج، على نمو واستدامة الشركة الناشئة.",
    },
  ];

  return (
    <section id="criteria" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            معايير <span className="text-primary">الاختيار</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            معايير اختيار الشركات الناشئة المحتملة لمسرّعة الأعمال وثبة – الدفعة 2
          </p>
          <div className="divider-glow mx-auto w-32 mb-8" />
        </motion.div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-card rounded-xl p-6 border border-border/50 card-glow relative overflow-hidden">
                {/* Checkmark indicator */}
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-primary/50 flex items-center justify-center"
                  whileHover={{ scale: 1.2, borderColor: "hsl(175, 85%, 50%)" }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </motion.div>

                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 pl-10">
                  {item.title}
                </h3>

                {/* Content */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.content}
                </p>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;