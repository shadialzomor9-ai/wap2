import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";

const QuotesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder quotes - content to be added later
  const quotes = [
    {
      id: 1,
      text: "اقتباس من أحد رواد الأعمال المشاركين في البرنامج سيتم إضافته لاحقاً",
      author: "اسم المشارك",
      role: "المنصب - اسم الشركة",
      image: null,
    },
    {
      id: 2,
      text: "اقتباس من أحد رواد الأعمال المشاركين في البرنامج سيتم إضافته لاحقاً",
      author: "اسم المشارك",
      role: "المنصب - اسم الشركة",
      image: null,
    },
    {
      id: 3,
      text: "اقتباس من أحد رواد الأعمال المشاركين في البرنامج سيتم إضافته لاحقاً",
      author: "اسم المشارك",
      role: "المنصب - اسم الشركة",
      image: null,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

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
            قالوا عن <span className="text-primary">البرنامج</span>
          </h2>
          <div className="divider-glow mx-auto w-32 mb-8" />
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Quote Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 glow-border relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-20 h-20 text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 italic">
                  "{quotes[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/50">
                    <span className="text-2xl font-bold text-primary">؟</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {quotes[currentIndex].author}
                    </h4>
                    <p className="text-muted-foreground">
                      {quotes[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center card-glow"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary glow-primary w-6"
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center card-glow"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;