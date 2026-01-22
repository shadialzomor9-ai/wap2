import { motion } from "framer-motion";
interface HeaderProps {
  applicationUrl?: string;
}
const Header = ({
  applicationUrl = "#"
}: HeaderProps) => {
  return <motion.header initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-3">
          
          <span className="text-xl font-bold glow-text">مسرّعة وثبة</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            عن البرنامج
          </a>
          <a href="#objectives" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            الأهداف
          </a>
          <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            المزايا
          </a>
          <a href="#criteria" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            معايير الاختيار
          </a>
        </nav>

        {/* CTA Button */}
        <motion.a href={applicationUrl} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="btn-glow px-6 py-2.5 rounded-lg font-bold text-primary-foreground">
          قدّم الآن
        </motion.a>
      </div>
    </motion.header>;
};
export default Header;