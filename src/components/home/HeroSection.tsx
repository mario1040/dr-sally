import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

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
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-white overflow-hidden pt-32 pb-16 lg:pt-40">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-amber-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-slate-200/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-start order-2 lg:order-1"
          >
            <motion.div variants={fadeUp} className="mb-6">
               <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm text-amber-700 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
                 <Sparkles className="w-4 h-4 text-amber-500" />
                 {isRTL ? 'خبرة تدي ثقة من أول زيارة' : 'Trusted Expertise from the First Visit'}
               </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-slate-900 leading-[1.1] mb-6 font-cairo tracking-tight">
              {isRTL ? (
                <>
                  د. سالي العدوي <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-gradient-x">
                    خبرة طبية... ونتائج تفرق
                  </span>
                </>
              ) : (
                <>
                  Dr. Sally El Adawy <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 animate-gradient-x">
                    Medical Expertise... Results That Matter
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              {isRTL 
                ? 'رعاية طبية متخصصة في الجلدية والتجميل والليزر، مع خطط علاج بتتحدد حسب احتياجات كل حالة، وباستخدام أحدث التقنيات للحصول على نتائج طبيعية وآمنة.'
                : 'Specialized medical care in dermatology, cosmetics, and laser, with treatment plans tailored to each case, using the latest techniques for natural and safe results.'}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-5 w-full">
              <a href="tel:01551820062" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 group active:scale-95 border border-slate-700">
                   <span className="font-bold tracking-wide">{isRTL ? 'احجز استشارتك' : 'Book Consultation'}</span>
                   <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </button>
              </a>

              <Link to="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 text-slate-600 font-bold hover:text-slate-900 transition-colors flex items-center justify-center gap-2 relative after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-slate-900 hover:after:w-1/2 after:transition-all after:duration-300">
                  {isRTL ? 'استكشفي خدماتنا' : 'Explore Services'}
                </button>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4 bg-white/60 backdrop-blur-sm py-3 px-5 rounded-2xl border border-slate-100 shadow-sm">
               <div className="flex -space-x-3 rtl:space-x-reverse">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                       <img src={`https://i.pravatar.cc/150?img=${10+i}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                 ))}
               </div>
               <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-500 mb-1">
                     {[1,2,3,4,5].map(i => (
                       <Star key={i} className="w-3.5 h-3.5 fill-current" />
                     ))}
                  </div>
                  <p className="text-slate-600 text-xs font-bold">
                     {isRTL ? 'دقة في كل خطوة · نتائج طبيعية · رعاية تستحق الثقة' : 'Precision · Natural Results · Trusted Care'}
                  </p>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="relative h-[550px] lg:h-[700px] w-full flex items-center justify-center order-1 lg:order-2"
          >
             <div className="absolute inset-0 border border-amber-200/50 rounded-t-[15rem] rounded-b-[2.5rem] scale-[1.05] -z-10 transition-transform duration-700 hover:scale-[1.08]" />

             <div className="relative w-full h-full max-w-md rounded-t-[15rem] rounded-b-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/60 ring-1 ring-black/5">
                <div className="absolute inset-0 bg-slate-900/10 z-10 transition-opacity duration-500 hover:opacity-0" />
                <img 
                   src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                   alt="SF Touch Clinic Premium" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className={`absolute bottom-10 ${isRTL ? '-right-6' : '-left-6'} z-20 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white`}
                >
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-amber-600" />
                     </div>
                     <div>
                        <p className="text-slate-900 font-extrabold text-xl">100%</p>
                        <p className="text-slate-500 text-xs font-medium mt-0.5">{isRTL ? 'رعاية متخصصة بمعايير طبية عالية' : 'Specialized Care with High Medical Standards'}</p>
                     </div>
                   </div>
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;