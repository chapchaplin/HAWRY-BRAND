/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MapPin, 
  ExternalLink, 
  Share2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
  Globe
} from 'lucide-react';

// --- Types ---
interface Branch {
  id: string;
  name: string;
  detail: string;
  address: string;
}

const BRANCHES: Branch[] = [
  {
    id: 'branch-1',
    name: 'لقا ئێك',
    detail: 'بازارێ کـەڤـنـێ زاخـو',
    address: 'لقا ئێك / بازارێ کـەڤـنـێ زاخـو دوکـانـا E11'
  },
  {
    id: 'branch-2',
    name: 'لقا دووێ',
    detail: 'تـلـکـبـر، فـلـکـا مەم و زین',
    address: 'لقا دووێ / تـلـکـبـر فـلـکـا مەم و زین'
  }
];

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      showToast(`${label} بە سەرکەوتوویی کۆپیکرا`);
    } catch {
      showToast('نەتوانرا کۆپی بکرێت');
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'HAWRY BRAND | براندەکێ ناڤخویی',
      text: 'HAWRY BRAND - براندەکێ ناڤخویی بۆ ساخلەمییا تەیا بەردەوام',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed, fallback silently
      }
    } else {
      copyToClipboard(window.location.href, 'بەستەری وێبسایت');
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center relative overflow-x-hidden selection:bg-amber-500/30 selection:text-white">
      {/* Ambient Visual Lighting (Ultra Lightweight, Safe for iOS Safari) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] ambient-glow-top opacity-70" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[300px] bg-amber-600/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-yellow-500/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-5 z-50 px-5 py-2.5 rounded-full bg-neutral-900/95 border border-amber-500/40 text-amber-200 text-xs md:text-sm font-medium shadow-2xl flex items-center gap-2.5 backdrop-blur-md"
          >
            <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-lg px-4 pt-8 pb-16 flex flex-col items-center">
        
        {/* Top Floating Action Bar */}
        <header className="w-full flex items-center justify-between mb-6 px-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-amber-300/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              بەردەوامین لە خزمەتتان
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              aria-label="هاوبەشکردنی کارد"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/10 text-white/80 hover:text-white transition-all"
              title="هاوبەشکردن"
            >
              <Share2 size={17} />
            </button>
          </div>
        </header>

        {/* Hero Section: Avatar Logo */}
        <div className="flex flex-col items-center text-center w-full">
          <div className="relative group cursor-pointer" onClick={handleShare}>
            {/* Concentric Gold Halo Ring */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-500/30 via-yellow-200/20 to-amber-700/30 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full p-2 bg-[#0c0c10] border-2 border-amber-400/40 shadow-[0_0_35px_rgba(212,175,55,0.18)] flex items-center justify-center overflow-hidden">
              <img 
                src="https://i.ibb.co/qY7Jq8Fk/logo.png" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i.ibb.co/vzG7ZzQY/logo.png';
                }}
                alt="HAWRY BRAND Logo" 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                style={{ 
                  filter: 'invert(87%) sepia(45%) saturate(800%) hue-rotate(350deg) brightness(105%) contrast(105%)'
                }}
              />
            </div>
            {/* Verified Badge */}
            <div className="absolute bottom-1 right-2 w-8 h-8 rounded-full bg-[#0a0a0d] border border-amber-400/60 p-1 flex items-center justify-center shadow-lg text-amber-400">
              <BadgeCheck size={20} className="fill-amber-400 text-black" />
            </div>
          </div>

          {/* Brand Name */}
          <div className="mt-5 space-y-1">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight gold-gradient-text drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
              HAWRY BRAND
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-200/60 font-sans font-semibold">
              Official Digital Hub
            </p>
          </div>
        </div>

        {/* Address & Branch Information (Compact, Unboxed, Non-clickable) */}
        <section className="w-full mt-5 mb-2 flex flex-col items-center">
          <div className="flex items-center justify-center gap-1.5 mb-2 text-xs font-medium text-amber-300/70">
            <MapPin size={13} className="text-amber-400" />
            <span>ناونیشانەکان / زاخۆ</span>
          </div>

          <div className="flex flex-col items-center gap-1.5 w-full">
            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="w-full max-w-sm flex items-center justify-center gap-2 py-1 px-3 text-center text-xs md:text-sm text-white/85 select-text"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 shrink-0" />
                <span className="font-medium text-white/90 leading-relaxed">
                  {branch.address}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Primary Social & Direct Contact Links */}
        <section className="w-full mt-7 flex flex-col gap-3">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-semibold text-amber-300/80">
              تۆڕە کۆمەڵایەتییە فەرمییەکان
            </span>
            <span className="text-[10px] text-white/40">بەستەرە پەسەندکراوەکان</span>
          </div>

          <div className="flex flex-col gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com/hawry.brandd"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-glass luxury-card-hover touch-feedback p-4 rounded-2xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram size={24} />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      ئینستاگرام
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/60 font-sans font-medium">
                      Instagram
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-sans mt-0.5">@hawry.brandd</p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/[0.08] transition-all">
                <ExternalLink size={15} />
              </div>
            </a>

            {/* Snapchat */}
            <a
              href="https://snapchat.com/add/hawry.brandd"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-glass luxury-card-hover touch-feedback p-4 rounded-2xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#FFFC00] flex items-center justify-center shadow-lg shrink-0 p-2 group-hover:scale-105 transition-transform">
                  <img 
                    src="https://i.ibb.co/5Wq9QsCS/snapchat.png" 
                    alt="Snapchat" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      سناپچات
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/60 font-sans font-medium">
                      Snapchat
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-sans mt-0.5">@hawry.brandd</p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/[0.08] transition-all">
                <ExternalLink size={15} />
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@hawry.product"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-glass luxury-card-hover touch-feedback p-4 rounded-2xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-black border border-white/20 flex items-center justify-center shadow-lg shrink-0 p-2 group-hover:scale-105 transition-transform">
                  <img 
                    src="https://i.ibb.co/qLvQBz8b/tiktok.png" 
                    alt="TikTok" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      تیکتۆک
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/60 font-sans font-medium">
                      TikTok
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-sans mt-0.5">@hawry.product</p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/[0.08] transition-all">
                <ExternalLink size={15} />
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9647512083761"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-glass luxury-card-hover touch-feedback p-4 rounded-2xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.25)] shrink-0 p-2 group-hover:scale-105 transition-transform">
                  <img 
                    src="https://i.ibb.co/CSFHWPQ/whatsapp.png" 
                    alt="WhatsApp" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      واتسئاپ
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-sans font-medium border border-emerald-500/20">
                      بەردەستە
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-sans mt-0.5" dir="ltr">+964 751 208 3761</p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/[0.08] transition-all">
                <ExternalLink size={15} />
              </div>
            </a>

            {/* Sulaymaniyah Branch Website */}
            <a
              href="https://hawry-slemani.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-glass luxury-card-hover touch-feedback p-4 rounded-2xl flex items-center justify-between group border border-amber-500/20 hover:border-amber-400/40"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600/30 via-amber-500/20 to-yellow-400/30 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] shrink-0 group-hover:scale-105 transition-transform">
                  <Globe size={22} />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      لقی هەوری لە سلێمانی
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 font-medium border border-amber-500/20">
                      وێبسایت
                    </span>
                  </div>
                  <p className="text-xs text-white/50 font-sans mt-0.5">hawry-slemani.vercel.app</p>
                </div>
              </div>

              <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/40 group-hover:text-amber-300 group-hover:bg-amber-500/10 transition-all">
                <ExternalLink size={15} />
              </div>
            </a>
          </div>
        </section>

        {/* Brand Slogan Section (Elevated Luxury Card) */}
        <section className="w-full mt-9">
          <div className="luxury-glass rounded-3xl p-6 text-center relative overflow-hidden border border-amber-500/20 shadow-[0_10px_35px_rgba(212,175,55,0.08)]">
            <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            <div className="flex flex-col gap-1.5 items-center pt-1">
              <h2 className="text-xl md:text-2xl font-bold gold-gradient-text">
                "برانـدەکـێ ناڤـخـویـی
              </h2>
              <h2 className="text-lg md:text-xl font-semibold text-white/90">
                بۆ ساخـلـەمـییا تەیـا بەردەوام"
              </h2>
            </div>

            {/* Subtle Divider */}
            <div className="w-16 h-[1px] bg-amber-400/30 mx-auto my-4" />

            <div className="flex items-center justify-center gap-4 text-[11px] text-white/60">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-amber-400" />
                کواڵیتی و متمانە
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-amber-400" />
                خزمەتگوزاری ڕۆژانە
              </span>
            </div>
          </div>
        </section>

        {/* Footer & Chaplin Chap Agency Branding */}
        <footer className="w-full mt-10 mb-2 flex flex-col items-center gap-5 text-center">
          
          {/* Chaplin Chap Signature (Compact, Subtle & Elegant) */}
          <div className="flex justify-center">
            <a 
              href="https://chaplin-chap.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 transition-all duration-300 group active:scale-95 shadow-sm"
            >
              <div className="w-7 h-7 rounded-lg bg-black border border-white/15 p-1 flex items-center justify-center shrink-0 group-hover:border-amber-400/40 transition-colors">
                <img 
                  src="https://i.ibb.co/7NNMczJt/chaplin.png" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://i.ibb.co/p6C0hXJ/chaplin.png';
                  }}
                  alt="Chaplin Chap Logo" 
                  className="w-full h-full object-contain brightness-110" 
                />
              </div>

              <span className="text-xs font-medium text-white/70 group-hover:text-amber-200 transition-colors">
                دروستکراوە لە لایەن <span className="font-bold text-white/90 group-hover:text-amber-300">(چـاپـلـین چـاپ)</span>
              </span>

              <ExternalLink size={12} className="text-white/30 group-hover:text-amber-300 transition-colors shrink-0" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[11px] text-white/40 space-y-1">
            <p>© {new Date().getFullYear()} HAWRY BRAND. هەموو مافەکان پارێزراون.</p>
            <p className="font-sans text-[10px] text-white/30">Zakho, Kurdistan Region</p>
          </div>
        </footer>

      </main>
    </div>
  );
}
