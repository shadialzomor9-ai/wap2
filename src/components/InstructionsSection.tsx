import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const InstructionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section className="relative py-[38px]" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        
      </div>
    </section>;
};
export default InstructionsSection;