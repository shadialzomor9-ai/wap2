import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = () => {
  const startDate = new Date("2026-01-21T00:00:00").getTime();
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
      
      // Check if we haven't started yet
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

      // Check if ended
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

      // Calculate time remaining
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
    { label: "يوم", value: timeLeft.days },
    { label: "ساعة", value: timeLeft.hours },
    { label: "دقيقة", value: timeLeft.minutes },
    { label: "ثانية", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 border border-primary/50 glow-primary">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 justify-center">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            {!timeLeft.hasStarted ? "يبدأ التقديم خلال" : timeLeft.hasEnded ? "انتهى التقديم" : "ينتهي التقديم خلال"}
          </span>
        </div>

        {/* Countdown blocks */}
        {!timeLeft.hasEnded && (
          <div className="flex gap-2">
            {timeBlocks.map((block, index) => (
              <div key={index} className="text-center">
                <motion.div
                  key={block.value}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="bg-secondary rounded-lg px-3 py-2 min-w-[3rem]"
                >
                  <span className="text-xl font-bold text-foreground">
                    {String(block.value).padStart(2, "0")}
                  </span>
                </motion.div>
                <span className="text-xs text-muted-foreground mt-1 block">
                  {block.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;