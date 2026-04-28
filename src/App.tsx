/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  ExternalLink, 
  MessageCircle, 
  Share2,
  Ghost,
  MoreVertical
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#030303] overflow-hidden">
      {/* Optimized Background Orbs - Using static gradients to save GPU */}
      <div className="glow-orb w-[500px] h-[500px] from-brand-primary/10 top-[-20%] left-[-10%]" />
      <div className="glow-orb w-[500px] h-[500px] from-brand-accent/5 bottom-[-10%] right-[-10%]" />
      <div className="glow-orb w-[400px] h-[400px] from-yellow-600/5 top-[30%] left-[50%]" />
      
      {/* Sparkles (Stars) - Reduced for performance */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full will-change-gpu"
          initial={{ opacity: Math.random() * 0.3, scale: 0.5 }}
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <div className="relative z-10 flex flex-col items-center pt-10 pb-8 px-4 text-center">
      {/* Floating Logo Container - Circular again as requested */}
      <motion.div 
        className="relative group will-change-gpu"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass-card w-40 h-40 rounded-full border-4 border-brand-primary/30 p-3 relative z-10 overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)] flex items-center justify-center bg-black/60">
          <img 
            src="https://i.ibb.co/qY7Jq8Fk/logo.png" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://i.ibb.co/vzG7ZzQY/logo.png';
            }}
            alt="HAWRY BRAND Logo" 
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 will-change-gpu"
            style={{ 
              filter: 'invert(87%) sepia(45%) saturate(800%) hue-rotate(350deg) brightness(105%) contrast(105%)'
            }}
          />
        </div>
        {/* Gold Glow effect around logo */}
        <div className="absolute inset-[-10px] rounded-full bg-brand-primary/20 blur-3xl -z-0 group-hover:bg-brand-primary/40 transition-colors duration-700" />
      </motion.div>

      {/* Business Name */}
      <div className="mt-8 space-y-2">
        <motion.h1 
          className="text-4xl md:text-5xl font-arabic font-bold text-gradient tracking-tight drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          HAWRY BRAND
        </motion.h1>
      </div>

      {/* Address Badges */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <motion.div 
          className="glass-card px-5 py-2.5 rounded-full inline-flex items-center gap-2.5 text-xs md:text-sm text-white/90 border-brand-primary/30 active:scale-95 transition-transform cursor-default"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <MapPin size={16} className="text-brand-accent animate-bounce" />
          <span className="font-arabic font-medium">لقا ئێك / بازارێ کـەڤـنـێ زاخـو دوکـانـا E11</span>
        </motion.div>

        <motion.div 
          className="glass-card px-5 py-2.5 rounded-full inline-flex items-center gap-2.5 text-xs md:text-sm text-white/90 border-brand-primary/30 active:scale-95 transition-transform cursor-default"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        >
          <MapPin size={16} className="text-brand-accent animate-bounce" />
          <span className="font-arabic font-medium text-right">لقا دووێ / تـلـکـبـر فـلـکـا مەم و زین</span>
        </motion.div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon: Icon, label, username, url, colors, customIcon }: { icon?: any, label: string, username: string, url: string, colors: string, customIcon?: string }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card w-full p-4 rounded-[2rem] flex items-center justify-between group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] active:scale-[0.98] will-change-gpu"
      whileHover={{ y: -4 }}
    >
      {/* Hover Background Shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full" />
      
      <div className="flex items-center gap-4 relative z-10">
        <div className={`w-14 h-14 rounded-2xl ${colors} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden`}>
          {customIcon ? (
            <img src={customIcon} alt={label} className="w-full h-full object-contain p-2" />
          ) : (
            Icon && <Icon size={28} />
          )}
        </div>
        <div className="text-right">
          <p className="text-base font-arabic font-bold text-white/95 group-hover:text-brand-secondary transition-colors">{label}</p>
          <p className="text-xs text-white/40 group-hover:text-white/60 font-medium">{username}</p>
        </div>
      </div>
      
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20 group-hover:text-white/80 group-hover:bg-white/10 transition-all duration-300">
        <ExternalLink size={16} />
      </div>

      {/* Decorative side glow */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors} opacity-0 group-hover:opacity-100 transition-opacity`} />
    </motion.a>
  );
};

const LinksList = () => {
  const links = [
    {
      icon: Instagram,
      label: "ئینستاگرام",
      username: "hawry.brandd",
      url: "https://instagram.com/hawry.brandd",
      colors: "bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
    },
    {
      label: "سناپچات",
      username: "hawry.brandd",
      url: "https://snapchat.com/add/hawry.brandd",
      colors: "bg-[#FFFC00] text-black",
      customIcon: "https://i.ibb.co/5Wq9QsCS/snapchat.png"
    },
    {
      label: "تیکتۆک",
      username: "hawry.product",
      url: "https://tiktok.com/@hawry.product",
      colors: "bg-[#000000] border border-white/20",
      customIcon: "https://i.ibb.co/qLvQBz8b/tiktok.png"
    },
    {
      label: "واتسئاپ",
      username: "07512083761",
      url: "https://wa.me/9647512083761",
      colors: "bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.3)]",
      customIcon: "https://i.ibb.co/CSFHWPQ/whatsapp.png"
    }
  ];

  return (
    <div className="relative z-10 w-full max-w-md px-6 flex flex-col gap-5 mt-4">
      {links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
        >
          <SocialLink {...link} />
        </motion.div>
      ))}
    </div>
  );
};

const QuoteSection = () => {
  return (
    <div className="relative z-10 w-full max-w-md px-8 mt-16 mb-12 text-center">
      {/* Decorative Line */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex-1 h-[1px] bg-linear-to-r from-transparent to-brand-primary opacity-30" />
        <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
        <div className="flex-1 h-[1px] bg-linear-to-l from-transparent to-brand-primary opacity-30" />
      </div>
      
      <motion.div 
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl md:text-3xl font-arabic font-bold text-brand-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          "برانـدەکـێ ناڤـخـویـی
        </p>
        <p className="text-lg md:text-xl font-arabic font-medium text-white/80 tracking-widest mt-1">
          بۆ ساخـلـەمـییا تەیـا بەردەوام"
        </p>
      </motion.div>
    </div>
  );
};

const FooterBranding = () => {
  return (
    <footer className="relative z-10 w-full max-w-md px-6 pb-12 mt-12">
      <div className="flex flex-col items-center gap-8">
        {/* Shimmer Text - Subtle */}
        <a 
          href="https://chaplin-chap.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group"
        >
          <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="shimmer bg-clip-text text-transparent bg-white font-arabic text-[10px]">
              DEVELOPED BY
            </span>
            <ExternalLink size={8} className="text-white/30" />
          </div>
        </a>

        {/* Chaplin Chap Logo & Button Branding */}
        <div className="flex flex-col items-center gap-6">
          <motion.a 
            href="https://chaplin-chap.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-24 rounded-[2rem] bg-black border border-white/10 p-4 shadow-2xl flex items-center justify-center group relative overflow-hidden"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/15 via-transparent to-transparent opacity-50" />
            <div className="w-full h-full rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center relative z-10 p-2">
               <img 
                 src="https://i.ibb.co/7NNMczJt/chaplin.png" 
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://i.ibb.co/p6C0hXJ/chaplin.png';
                 }}
                 alt="Chaplin Chap Logo" 
                 className="w-full h-full object-contain brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
               />
            </div>
            {/* Ambient Glow */}
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-1/2 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          
          <motion.a
            href="https://chaplin-chap.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full glass-card border-brand-primary/20 flex flex-col items-center gap-1 group transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] active:scale-95"
            whileHover={{ y: -4 }}
          >
            <span className="text-[10px] tracking-[0.4em] text-brand-primary/60 font-bold uppercase">Digital Solution</span>
            <span className="text-sm font-arabic font-bold text-white group-hover:text-brand-primary transition-colors">
              دروستکراوە لە لایەن (چـاپـلـین چـاپ)
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center overflow-x-hidden relative">
      <Background />
      
      {/* Scrollable Content */}
      <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
        <div className="w-full flex-grow flex flex-col items-center max-w-xl">
          <Header />
          <LinksList />
          <QuoteSection />
        </div>

        <FooterBranding />
      </div>

      {/* Subtle Bottom vignette */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none z-0" />
    </div>
  );
}
