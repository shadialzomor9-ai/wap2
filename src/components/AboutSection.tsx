import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, Users, MapPin } from "lucide-react";
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const infoCards = [
    {
      icon: Building2,
      title: "الممولون",
      desc: "بعثة الاتحاد الأوروبي لدى اليمن ومجموعة هائل سعيد أنعم وشركاه",
      logos: [
        { name: "بعثة الاتحاد الأوروبي", src: "/eu.png", alt: "EU Delegation to Yemen" },
        { name: "مجموعة هائل سعيد أنعم وشركاه", src: "/hsa.png", alt: "HSA Group" }
      ]
    },
    {
      icon: Calendar,
      title: "المنفذون",
      desc: "5 مسرعات خلال 5 سنوات"
    },
    {
      icon: Users,
      title: "المستفيدون",
      desc: "أفضل 10 شركات ناشئة في كل دفعة"
    },
    {
      icon: MapPin,
      title: "التنفيذ",
      desc: "6 أشهر لكل مسرّعة"
    }
  ];

  return (
    <div>
      {/* كود JSX لعرض infoCards */}
    </div>
  );
}

export default infoCards;
  return <section id="about" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            عن <span className="text-primary">مسرّعة الأعمال وثبة</span>
          </h2>
          <div className="divider-glow mx-auto w-32 mb-8" />
        </motion.div>

        {/* Main Description */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 glow-border">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              مسرّعة الأعمال وثبة هو أحد مكونات برنامج وثبة الممول من بعثة الإتحاد الأوروبي لدى اليمن ومجموعة هائل سعيد أنعم وشركاه ويُنفذه مؤسسة روّاد الأعمال بالشراكة مع ديب رووت للاستشارات.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              يضم البرنامج 5 مسرعات خلال 5 سنوات والمدة الفعلية لتنفيذ كل مسرّعة 6 أشهر يستهدف فيه أفضل 10 شركات ناشئة في كل دفعة ضمن المعايير المذكورة أدناه وضمن المحافظات المستهدفة.
            </p>
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.3 + index * 0.1
        }} whileHover={{
          y: -5
        }} className="bg-card rounded-xl p-6 border border-border/50 card-glow text-center">
              <motion.div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center" whileHover={{
            rotate: 360
          }} transition={{
            duration: 0.5
          }}>
                <card.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.desc}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;
