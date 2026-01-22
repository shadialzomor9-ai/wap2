import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import companiesLogos from "@/assets/companies-logos.png";
const QuotesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder quotes - content to be added later

  return <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">الشركات الناشئة المشاركة في
  <span className="text-primary">الدفعة الاولى 2025</span>
          </h2>
          <div className="divider-glow mx-auto w-32 mb-8" />
        </motion.div>

        {/* Companies Logos */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="max-w-5xl mx-auto mb-16">
          <img src={companiesLogos} alt="شركات المشاركين في البرنامج" className="w-full h-auto rounded-2xl" />
        </motion.div>

        {/* Carousel */}
        
      </div>
    </section>;
};
export default QuotesSection;
