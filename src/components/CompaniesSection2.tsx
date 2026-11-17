import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import companiesLogos from "@/assets/companies-logos.png";

const CompaniesSection2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

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
      </div>
    </section>;
};
export default CompaniesSection2;
