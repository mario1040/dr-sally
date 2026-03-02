import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { CalendarCheck, Linkedin, Instagram, Sparkles, Award, GraduationCap, Star } from 'lucide-react';

const DoctorProfile = () => {
  const { t, isRTL } = useLanguage();

  // إعدادات حركة فاخرة مع حل مشكلة TypeScript باستخدام Variants وتحديد نوع المصفوفة
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="relative min-h-screen bg-slate-50 overflow-hidden pt-32 pb-24 lg:pt-40">
      
      {/* ================= BACKGROUND ELEMENTS ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* إضاءات خلفية بلون ذهبي/عنبري لإبراز الفخامة */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-amber-100/50 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-slate-200/50 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ================= RIGHT/LEFT: IMAGE SPOTLIGHT (5 Cols) ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end order-1"
          >
            {/* إطار هندسي زخرفي خلف الصورة */}
            <div className="absolute inset-0 border border-amber-200/60 rounded-t-[20rem] rounded-b-[4rem] scale-[1.05] -z-10 transition-transform duration-700 hover:scale-[1.08]" />

            <div className="relative w-full max-w-md h-[600px] lg:h-[750px] rounded-t-[20rem] rounded-b-[4rem] overflow-hidden shadow-2xl shadow-slate-300/60 ring-1 ring-black/5 group">
               {/* مسار صورة الدكتورة فريحان */}
               <img 
                 src="images/sally2.png" 
                 alt={isRTL ? "د. سالي العدوي" : "Dr. Sally El Adawy"} 
                 className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop";
                 }}
               />
               
               {/* Overlay تدرج لوني ناعم من الأسفل */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-60" />

               {/* الشارة العائمة (التقييم) */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className={`absolute bottom-10 ${isRTL ? 'right-6' : 'left-6'} bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white z-20 flex items-center gap-3`}
               >
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                     <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                  </div>
                  <div>
                     <p className="text-slate-900 font-extrabold text-lg">5.0 / 5</p>
                     <p className="text-slate-500 text-xs font-medium">{isRTL ? 'تقييم العملاء' : 'Patients Rating'}</p>
                  </div>
               </motion.div>

               {/* روابط التواصل الاجتماعي على الصورة */}
               <div className={`absolute top-10 ${isRTL ? 'left-6' : 'right-6'} flex flex-col gap-3 z-20`}>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 hover:scale-110 shadow-lg">
                     <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 hover:scale-110 shadow-lg">
                     <Linkedin className="w-4 h-4" />
                  </a>
               </div>
            </div>
          </motion.div>

          {/* ================= LEFT/RIGHT: TEXT CONTENT (7 Cols) ================= */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-start order-2"
          >
            {/* الشارة العلوية (Badge) */}
            <motion.div variants={fadeUp} className="mb-6">
               <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/60 bg-amber-50/50 backdrop-blur-sm text-amber-700 text-sm font-bold tracking-widest uppercase shadow-sm">
                 <Sparkles className="w-4 h-4 text-amber-500" />
                 {isRTL ? 'المؤسس والمدير الطبي' : 'Founder & Medical Director'}
               </span>
            </motion.div>

            {/* الاسم والتخصص */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-slate-900 leading-[1.1] mb-4 font-cairo">
              {isRTL ? 'د. سالي العدوي' : 'Dr. Sally El Adawy'}
            </motion.h1>
            
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 mb-8 font-cairo">
               {isRTL ? 'استشاري الجلدية والتجميل' : 'Dermatology & Aesthetics Consultant'}
            </motion.h2>

            {/* نبذة عن الدكتورة */}
            <motion.p variants={fadeUp} className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl font-medium">
               {isRTL 
                  ? 'تُعد الدكتورة سالي العدوي من أبرز الأسماء في عالم التجميل والعناية بالبشرة. بخبرة تمتد لسنوات طويلة، تجمع بين الدقة الطبية واللمسة الفنية لإبراز الجمال الطبيعي لكل حالة. تؤمن بأن التجميل ليس مجرد إجراء، بل هو رحلة لاستعادة الثقة بالنفس والظهور بأفضل صورة ممكنة.'
                  : 'Dr. Sally El Adawy is one of the most prominent names in the world of aesthetics and skin care. With years of experience, she combines medical precision with an artistic touch to highlight the natural beauty of each case.'}
            </motion.p>

            {/* مؤهلات الدكتورة (Cards) */}
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl mb-12">
               <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4 group hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                     <GraduationCap className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                     <h4 className="text-slate-900 font-bold mb-1 font-cairo">{isRTL ? 'الشهادات العليا' : 'Higher Education'}</h4>
                     <p className="text-sm text-slate-500 font-medium">{isRTL ? 'زميل الأكاديمية الأمريكية للطب التجميلي' : 'Fellow of the American Academy of Aesthetic Medicine'}</p>
                  </div>
               </div>

               <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4 group hover:border-amber-200 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                     <Award className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                     <h4 className="text-slate-900 font-bold mb-1 font-cairo">{isRTL ? 'الخبرة العملية' : 'Practical Experience'}</h4>
                     <p className="text-sm text-slate-500 font-medium">{isRTL ? '+10 سنوات من الخبرة والآلاف من الحالات الناجحة' : '+10 Years of experience & thousands of successful cases'}</p>
                  </div>
               </div>
            </motion.div>

            {/* أزرار الحجز */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
               <a href="tel:0572260062">
                  <button className="px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/20 flex items-center gap-3 group active:scale-95 border border-slate-700">
                     <CalendarCheck className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                     <span className="font-bold tracking-wide">{isRTL ? 'احجزي استشارتك مع الدكتورة' : 'Book Consultation'}</span>
                  </button>
               </a>
            </motion.div>
            
            {/* اقتباس أو توقيع (لمسة فاخرة) */}
            <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-slate-200/60 w-full max-w-2xl">
               <p className="text-2xl text-slate-400 italic font-cairo leading-relaxed">
                  "{isRTL ? 'هدفي الأساسي هو أن تنظري في المرآة وتري النسخة الأجمل والأكثر ثقة من نفسك.' : 'My ultimate goal is for you to look in the mirror and see the most beautiful, confident version of yourself.'}"
               </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;