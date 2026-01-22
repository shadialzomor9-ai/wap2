import { motion } from "framer-motion";
const Footer = () => {
  return <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold">و</span>
            </div>
            <span className="text-lg font-bold">مسرّعة الأعمال وثبة</span>
          </div>

          {/* Partners */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>
          </span>
            <div className="flex items-center gap-6">
              {/* Partner logos placeholders */}
              <div className="w-24 h-8 rounded bg-card border border-border/50 flex items-center justify-center text-xs">
            </div>
              <div className="w-24 h-8 rounded bg-card border border-border/50 flex items-center justify-center text-xs">
            </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} مسرّعة الأعمال وثبة. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;