"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowLeft, Sparkles, Star, ShieldCheck } from "lucide-react";

const VideoHeroSection = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // --- أنيميشن الظهور الفخم للقسمين ---
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-black pt-32 pb-16 lg:pt-40">
      
      {/* 1. الفيديو الخلفي (YouTube) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[177.77vh] h-[56.25vw] min-w-full min-h-full scale-110 brightness-[0.5]"
          src="https://www.youtube.com/embed/UXLG0gJMx8k?autoplay=1&mute=1&loop=1&playlist=UXLG0gJMx8k&controls=0&rel=0&modestbranding=1&playsinline=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>

      {/* 2. طبقات الإضاءة والظلال - لضمان وضوح المحتوى فوق الفيديو */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-[2]" />

      {/* 3. المحتوى الرئيسي (Grid Layout) */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ================= القسم الأيسر / الأيمن (النصوص) ================= */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-start order-2 lg:order-1"
          >
            {/* Premium Tagline */}
            <motion.div variants={fadeUp} className="mb-6">
               <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-black/40 backdrop-blur-md text-amber-400 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
                 <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                 {isRTL ? 'التجربة الرائدة في العناية بالجمال' : 'The Premier Beauty Experience'}
               </span>
            </motion.div>

            {/* Main Heading (تم حل مشكلة الـ titleHighlight هنا) */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[1.1] mb-6 font-cairo tracking-tight">
              {isRTL ? (
                <>
                  اكتشفي جمالكِ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
                    الحقيقي
                  </span>
                </>
              ) : (
                <>
                  Reveal Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
                    True Beauty
                  </span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg font-light">
              {t.hero.description || (isRTL 
                ? 'رحلة من العناية الفاخرة تبدأ هنا. نجمع بين الخبرة الطبية المتقدمة واللمسة الفنية لنمنحك الثقة والجاذبية التي تستحقينها.'
                : 'A journey of luxury care starts here. Combining advanced medical expertise with an artistic touch to give you the confidence you deserve.')}
            </motion.p>

            {/* Buttons (تم دمج أزرار الـ VideoHero الفخمة وتم حل خطأ ctaSecondary) */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-5 w-full">
              
              {/* Magnetic Golden Button */}
              <Link to="/contact-us" className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-amber-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full text-black font-bold text-sm tracking-widest uppercase overflow-hidden shadow-[0_10px_30px_rgba(245,158,11,0.3)]"
                >
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:left-[100%] transition-all duration-1000" />
                  {t.hero.cta || (isRTL ? 'احجزي استشارتك الآن' : 'Book Consultation')}
                  <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2" />
                </motion.div>
              </Link>

              {/* Glass Outline Button (تم تصحيح الخاصية إلى secondaryCta) */}
              <Link to="/services" className="w-full sm:w-auto">
                <motion.div 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border border-white/30 backdrop-blur-md text-white font-bold text-sm tracking-widest uppercase flex items-center justify-center transition-all"
                >
                  {t.hero.secondaryCta || (isRTL ? 'استكشفي خدماتنا' : 'Explore Services')}
                </motion.div>
              </Link>

            </motion.div>

            {/* Premium Trust Indicator (تم تعديله ليناسب الخلفية الداكنة) */}
            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4 bg-white/5 backdrop-blur-md py-3 px-5 rounded-2xl border border-white/10 shadow-lg">
               <div className="flex -space-x-3 rtl:space-x-reverse">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-800 overflow-hidden shadow-sm">
                       <img src={`https://i.pravatar.cc/150?img=${10+i}`} alt="Client" className="w-full h-full object-cover opacity-90" />
                    </div>
                 ))}
               </div>
               <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                     {[1,2,3,4,5].map(i => (
                       <Star key={i} className="w-3.5 h-3.5 fill-current" />
                     ))}
                  </div>
                  <p className="text-white/80 text-xs font-bold">
                     {isRTL ? 'نخبة من العملاء الراضين' : 'Elite Satisfied Clients'}
                  </p>
               </div>
            </motion.div>

          </motion.div>

          {/* ================= القسم الأيمن / الأيسر (الصورة) ================= */}
          <motion.div 
             initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             className="relative h-[550px] lg:h-[700px] w-full flex items-center justify-center order-1 lg:order-2"
          >
             {/* Decorative Elements */}
             <div className="absolute inset-0 border border-amber-500/30 rounded-t-[15rem] rounded-b-[2.5rem] scale-[1.05] -z-10 transition-transform duration-700 hover:scale-[1.08]" />
             
             {/* Main Image Container */}
             <div className="relative w-full h-full max-w-md rounded-t-[15rem] rounded-b-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 hover:opacity-0" />
                {/* <img 
                   src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                   alt="SF Touch Clinic Premium" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s] ease-out"
                /> */}
                
                {/* Premium Floating Badge (تم تعديله ليناسب الستايل الداكن) */}
                {/* <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className={`absolute bottom-10 ${isRTL ? '-right-6' : '-left-6'} z-20 bg-black/70 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10`}
                >
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                        <ShieldCheck className="w-6 h-6 text-amber-400" />
                     </div>
                     <div>
                        <p className="text-white font-extrabold text-xl">100%</p>
                        <p className="text-white/70 text-xs font-medium mt-0.5">{isRTL ? 'ضمان الجودة والرعاية' : 'Quality & Care'}</p>
                     </div>
                   </div>
                </motion.div> */}
             </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default VideoHeroSection;