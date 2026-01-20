import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Clock, ArrowLeft } from "lucide-react";

interface CountdownCTASectionProps {
  applicationUrl?: string;
}

const CountdownCTASection = ({ applicationUrl = "#" }: CountdownCTASectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const startDate = new Date("2026-01-22T00:00:00").getTime();
  const endDate = new Date("2026-02-22T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasStarted: false,
    hasEnded: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();

      if (now < startDate) {
        const distance = startDate - now;
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          hasStarted: false,
          hasEnded: false,
        });
        return;
      }

      if (now >= endDate) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          hasStarted: true,
          hasEnded: true,
        });
        clearInterval(timer);
        return;
      }

      const distance = endDate - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        hasStarted: true,
        hasEnded: false,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  const timeBlocks = [
    { label: "ثانية", value: timeLeft.seconds },
    { label: "دقيقة", value: timeLeft.minutes },
    { label: "ساعة", value: timeLeft.hours },
    { label: "يوم", value: timeLeft.days },
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* Unified Countdown + CTA Block */}
          <div className="relative">
            {/* Glowing border effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-50 blur-sm"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="relative bg-gradient-to-br from-card via-card/95 to-card rounded-3xl p-8 md:p-12 border border-primary/40 backdrop-blur-sm">
              {/* Inner glow effects */}
              <motion.div
                className="absolute top-6 left-6 w-24 h-24 rounded-full bg-primary/20 blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-6 right-6 w-32 h-32 rounded-full bg-accent/20 blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />

              <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Countdown Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Clock className="w-6 h-6 text-primary" />
                  </motion.div>
                  <span className="text-lg md:text-xl font-semibold text-primary">
                    {!timeLeft.hasStarted
                      ? "يبدأ التقديم خلال"
                      : timeLeft.hasEnded
                      ? "انتهى التقديم"
                      : "ينتهي التقديم خلال"}
                  </span>
                </motion.div>

                {/* Countdown Timer */}
                {!timeLeft.hasEnded && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-row-reverse gap-3 md:gap-6"
                  >
                    {timeBlocks.map((block, index) => (
                      <div key={index} className="text-center">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* Pulse effect behind each block */}
                          <motion.div
                            className="absolute inset-0 bg-primary/20 rounded-xl blur-md"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          />
                          <div className="relative bg-secondary/80 backdrop-blur-sm rounded-xl px-4 md:px-6 py-4 md:py-5 min-w-[4rem] md:min-w-[5.5rem] border border-primary/30">
                            <motion.span
                              key={block.value}
                              initial={{ scale: 1.2, opacity: 0.5 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="text-2xl md:text-4xl font-black text-foreground tabular-nums"
                            >
                              {String(block.value).padStart(2, "0")}
                            </motion.span>
                          </div>
                        </motion.div>
                        <span className="text-xs md:text-sm text-muted-foreground mt-2 block font-medium">
                          {block.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Separator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                />

                {/* Floating CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  {/* Button glow effect */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-60 blur-lg"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <motion.a
                    href={applicationUrl}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 0 40px hsl(var(--primary) / 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent px-10 md:px-14 py-5 md:py-6 rounded-2xl font-bold text-lg md:text-xl text-primary-foreground shadow-2xl"
                  >
                    <span>قدّم الآن</span>
                    <motion.div
                      animate={{ x: [0, -5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </motion.div>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownCTASection;
