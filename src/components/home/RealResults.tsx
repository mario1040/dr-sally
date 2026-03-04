"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, Scissors, Sparkles, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// --- 1. تعريف الأنواع ---
interface Case {
  before: string;
  after: string;
}

interface Service {
  id: string;
  labelEn: string;
  labelAr: string;
  case: Case;
  link: string;
}

interface Specialty {
  id: string;
  labelEn: string;
  labelAr: string;
  icon: React.ReactNode;
  mainLink: string;
  services: Service[];
}

// --- 2. البيانات ---
const specialties: Specialty[] = [
  {
    id: "surgical",
    labelEn: "Surgical Aesthetics",
    labelAr: "التجميل الجراحي",
    icon: <Scissors className="w-5 h-5 md:w-6 md:h-6" />, 
    mainLink: "/services/plastic-surgery",
    services: [
      { id: "breast-red", labelEn: "Breast Reduction", labelAr: "تصغير الثدي", link: "/services/plastic-surgery", case: { before: "/images/imagecb12.png", after: "/images/imageca12.png" } },
      { id: "breast-aug", labelEn: "Breast Augmentation", labelAr: "تكبير الثدي", link: "/services/plastic-surgery", case: { before: "/images/imagecb13.png", after: "/images/imageca13.png" } },
      { id: "lipo", labelEn: "Lipo & Injection", labelAr: "شفط وحقن الدهون", link: "/services/plastic-surgery", case: { before: "/images/cases/lipo-before.jpg", after: "/images/cases/lipo-after.jpg" } },
      { id: "body-contour", labelEn: "Body Contouring", labelAr: "نحت الجسم", link: "/services/plastic-surgery", case: { before: "/images/cases/contour-before.jpg", after: "/images/cases/contour-after.jpg" } },
      { id: "buttock", labelEn: "Buttock Augmentation", labelAr: "تكبير المؤخرة", link: "/services/plastic-surgery", case: { before: "/images/cases/buttock-before.jpg", after: "/images/cases/buttock-after.jpg" } },
    ]
  },
  {
    id: "non-surgical",
    labelEn: "Non-Surgical",
    labelAr: "التجميل اللاجراحي",
    icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />, 
    mainLink: "/services/dermatology",
    services: [
      { id: "fillers", labelEn: "Fillers", labelAr: "الفيلر", link: "/services/dermatology", case: { before: "/images/imagecb1.png", after: "/images/imageca1.png" } },
      { id: "botox", labelEn: "Botox", labelAr: "البوتوكس", link: "/services/dermatology", case: { before: "/images/imagecb5.png", after: "/images/imageca5.png" } },
      { id: "skin-booster", labelEn: "Skin Booster", labelAr: "إسكين بوستر", link: "/services/dermatology", case: { before: "/images/imagecb8.png", after: "/images/imageca8.png" } },
    ]
  },
];

// --- 3. مكون السلايدر ---
const BeforeAfterSlider = ({ beforeImage, afterImage, language }: { beforeImage: string, afterImage: string, language: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 25 });
  
  const clipWidth = useTransform(springX, (val) => {
    if (containerWidth === 0) return 50;
    return ((val + containerWidth / 2) / containerWidth) * 100;
  });

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div ref={containerRef} className="relative aspect-[3/4] md:aspect-[16/10] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden cursor-ew-resize shadow-2xl border-[6px] md:border-[10px] border-white group bg-slate-100">
      <div className="absolute inset-0">
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
        <div className={cn("absolute top-4 md:top-6 px-3 py-1 md:px-4 md:py-2 rounded-full bg-slate-900/60 backdrop-blur-xl border border-white/20", language === 'ar' ? 'right-4 md:right-6' : 'left-4 md:left-6')}>
          <span className="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-widest">{language === "en" ? "Before" : "قبل"}</span>
        </div>
      </div>

      <motion.div 
        className="absolute inset-0 overflow-hidden bg-slate-100" 
        style={{ clipPath: useTransform(clipWidth, (w) => `inset(0 0 0 ${w}%)`) }}
      >
        <img src={afterImage} alt="After" className="w-full h-full object-cover" />
        <div className={cn("absolute top-4 md:top-6 px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg", language === 'ar' ? 'left-4 md:left-6' : 'right-4 md:right-6')}>
          <span className="text-[8px] md:text-[10px] font-bold text-slate-900 uppercase tracking-widest">{language === "en" ? "After" : "بعد"}</span>
        </div>
      </motion.div>

      <motion.div 
        drag="x" 
        dragConstraints={{ left: -containerWidth / 2, right: containerWidth / 2 }} 
        dragElastic={0} 
        dragMomentum={false} 
        style={{ x, left: "50%", translateX: "-50%" }} 
        className="absolute inset-y-0 z-30 flex items-center justify-center touch-none"
      >
        <div className="w-[2px] h-full bg-white backdrop-blur-md relative shadow-[0_0_10px_rgba(0,0,0,0.2)]">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform border border-slate-100">
              <div className="flex gap-0.5 text-amber-500">
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- 4. المكون الرئيسي ---
const RealResults = () => {
  const { language, isRTL } = useLanguage();
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0]);
  const [activeService, setActiveService] = useState(specialties[0].services[0]);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const header = {
    subtitle: language === "en" ? "Transformative Journeys" : "رحلات التحول الحقيقية",
    title1: language === "en" ? "REAL" : "نتائج",
    title2: language === "en" ? "RESULTS" : "حقيقية"
  };

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="real-results">
      
      {/* شبكة ناعمة وإضاءات خلفية مطابقة للهيرو */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-slate-200/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Responsive */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="text-amber-600 flex items-center gap-2 text-sm md:text-lg mb-4 font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              {header.subtitle}
            </span>
            <h2 className="text-5xl md:text-[9rem] font-serif font-black tracking-tighter leading-[0.9] uppercase text-slate-900">
              {header.title1} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 italic md:ml-4">
                {header.title2}
              </span>
            </h2>
          </motion.div>
          
          <p className={cn("text-slate-500 text-xs md:text-sm max-w-xs uppercase font-bold tracking-[0.2em] md:tracking-[0.3em] leading-relaxed", language === 'ar' && "text-right")}>
            {language === 'en' 
              ? "Witness the biological mastery and artistic precision of Dr. Sara." 
              : "شاهدوا الإتقان الطبي والدقة الفنية في لمسات دكتورة سارة."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Sidebar - Categories with View Page Button */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 overflow-x-auto sm:overflow-visible pb-4 md:pb-0">
            {specialties.map((specialty) => {
              const isActive = activeSpecialty.id === specialty.id;
              return (
                <div key={specialty.id} className="relative flex flex-col gap-3 flex-shrink-0 w-full sm:w-[48%] lg:w-full">
                  <motion.button
                    onClick={() => { setActiveSpecialty(specialty); setActiveService(specialty.services[0]); }}
                    className={cn(
                      "w-full p-5 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center gap-4 md:gap-6 transition-all duration-500 border relative z-10 backdrop-blur-md",
                      isActive 
                        ? "bg-white border-amber-200/60 shadow-xl" 
                        : "bg-white/50 border-slate-100 opacity-70 hover:opacity-100 hover:bg-white"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center transition-all flex-shrink-0",
                      isActive ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-400"
                    )}>
                      {specialty.icon}
                    </div>
                    <div className="text-start flex-1">
                      <span className={cn("text-sm md:text-xl font-serif font-bold tracking-tight block transition-colors", isActive ? "text-slate-900" : "text-slate-600")}>
                        {language === "en" ? specialty.labelEn : specialty.labelAr}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 block">
                         {specialty.services.length} {language === "en" ? "Cases" : "حالات"}
                      </span>
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex justify-center md:justify-start"
                      >
                        <Link 
                          to={specialty.mainLink}
                          className="bg-white border border-slate-200 text-slate-600 text-[9px] md:text-[10px] px-6 py-2 rounded-full uppercase tracking-widest flex items-center gap-2 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm active:scale-95"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {language === "en" ? "View Page" : "عرض الصفحة"}
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Main Stage */}
          <div className="lg:col-span-8">
            {/* Filter Pills */}
            <div className="flex gap-2 mb-8 md:mb-12 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeSpecialty.id}
                  className="flex gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {activeSpecialty.services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service)}
                      className={cn(
                        "px-4 py-2 md:px-6 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border",
                        activeService.id === service.id 
                          ? "bg-slate-900 text-white border-slate-900 shadow-lg" 
                          : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                      )}
                    >
                      {language === "en" ? service.labelEn : service.labelAr}
                    </button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative">
              <BeforeAfterSlider 
                beforeImage={activeService.case.before} 
                afterImage={activeService.case.after} 
                language={language} 
              />

              {/* Bottom Info */}
              <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-200 pt-8 md:pt-10">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold italic text-slate-900">
                    {language === "en" ? activeService.labelEn : activeService.labelAr}
                  </h3>
                  
                  <Link 
                    to={activeService.link}
                    className="flex items-center gap-2 group w-fit"
                  >
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-400 group-hover:text-amber-600 transition-colors">
                      {language === "en" ? "Procedure Details" : "تفاصيل الإجراء"}
                    </span>
                    <ArrowIcon className="w-3 h-3 text-slate-400 group-hover:text-amber-600" />
                  </Link>
                </div>
                
                <Link to="/contact-us" className="w-full md:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group w-full md:w-auto"
                  >
                    <button className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full bg-slate-900 text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all border border-slate-700">
                       {language === 'en' ? 'Book Similar Result' : 'احجزي نتيجة مماثلة'}
                       <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </button>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealResults;