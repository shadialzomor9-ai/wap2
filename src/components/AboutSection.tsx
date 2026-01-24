import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Rocket } from "lucide-react";
import executorsLogo from "@/assets/executors-logo.png";
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const institutionalCards = [{
    icon: Landmark,
    title: "الممولون",
    desc: "بعثة الاتحاد الأوروبي لدى اليمن ومجموعة هائل سعيد أنعم وشركاه",
    logos: [{
      src: "https://rowad.org/public/EU-08.png",
      alt: "EU Delegation to Yemen"
    }, {
      src: "https://rowad.org/public/hsa.png",
      alt: "HSA Group"
    }]
  }, {
    icon: Rocket,
    title: "المنفذون",
    desc: "مؤسسة روّاد الاعمال بالشراكة مع ديب روت للاستشارات",
    logos: [{
      src: executorsLogo,
      alt: "Rowad & Deep Root"
    }]
  }];
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
              مسرّعة الأعمال وثبة هو أحد مكونات برنامج وثبة الممول من بعثة الإتحاد الأوروبي لدى اليمن ومجموعة هائل سعيد أنعم وشركاه وتُنفذه مؤسسة روّاد الأعمال بالشراكة مع ديب رووت للاستشارات.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              يضم البرنامج 5 مسرعات خلال 5 سنوات والمدة الفعلية لتنفيذ كل مسرّعة 6 أشهر يستهدف فيه أفضل 10 شركات ناشئة في كل دفعة ضمن المعايير المذكورة أدناه وضمن المحافظات المستهدفة.
            </p>
          </div>
        </motion.div>

        {/* Institutional Cards - 2 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {institutionalCards.map((card, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.7,
          delay: 0.3 + index * 0.15
        }} className="group relative">
              {/* Card Container */}
              <div className="relative bg-card/60 backdrop-blur-md rounded-2xl p-8 border border-border/40 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_hsl(var(--primary)/0.2)]" whileHover={{
                  scale: 1.05
                }} transition={{
                  duration: 0.3
                }}>
                      <card.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground">{card.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    {card.desc}
                  </p>

                  {/* Logos Section */}
                  <div className="pt-6 border-t border-border/30">
                    <div className={`flex items-center justify-center gap-8 ${card.logos.length === 1 ? '' : 'flex-wrap'}`}>
                      {card.logos.map((logo, i) => <motion.div key={i} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300 px-[17px]" whileHover={{
                    scale: 1.03,
                    y: -2
                  }} transition={{
                    duration: 0.3
                  }}>
                          <img src={logo.src} alt={logo.alt} className="h-45 md:h-50 w-auto object-contain" />
                        </motion.div>)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;