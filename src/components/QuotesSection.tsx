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
  const quotes = [{
    id: 1,
    text: "اقتباس من أحد رواد الأعمال المشاركين في البرنامج سيتم إضافته لاحقاً",
    author: "اسم المشارك",
    role: "المنصب - اسم الشركة",
    image: null
  }, {
    id: 2,
    text: "اقتباس من أحد رواد الأعمال المشاركين في البرنامج سيتم إضافته لاحقاً",
    author: "اسم المشارك",
    role: "المنصب - اسم الشركة",
    image: null
  }, {
    id: 3,
    text: "اقتباس من أحد رواد الأعمال المشاركين في البرنامج سيتم إضافته لاحقاً",
    author: "اسم المشارك",
    role: "المنصب - اسم الشركة",
    image: null
  }];
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % quotes.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + quotes.length) % quotes.length);
  };
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
          
          <div className="divider-glow mx-auto w-32 mb-8" />
        </motion.div>

        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          الشركات الناشئة المشاركة في الدفعة الاولى 2025
        </motion.h2>

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