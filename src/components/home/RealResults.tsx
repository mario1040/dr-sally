"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, Scissors, Sparkles, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// Palette — same identity as the navbar / services section, so the
// page reads as one atelier rather than three separately-styled blocks.
// ----------------------------------------------------------------------
const VARS: React.CSSProperties = {
  "--ink": "#0E0D0A",
  "--ink-soft": "#18140D",
  "--panel": "#201A11",
  "--gold": "#BE9A5A",
  "--gold-light": "#E9D6A6",
  "--ivory": "#F5EFE2",
  "--hairline": "rgba(190,154,90,0.22)",
};

// --- 1. Types ---
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

// --- 2. Data (unchanged) ---
const specialties: Specialty[] = [
  {
    id: "non-surgical",
    labelEn: "Non-Surgical",
    labelAr: "التجميل اللاجراحي",
    icon: <Sparkles className="w-5 h-5" />,
    mainLink: "/services/dermatology",
    services: [
      { id: "fillers", labelEn: "Fillers", labelAr: "الفيلر", link: "/services/dermatology", case: { before: "/images/imagecb1.png", after: "/images/imageca1.png" } },
      { id: "botox", labelEn: "Botox", labelAr: "البوتوكس", link: "/services/dermatology", case: { before: "/images/imagecb5.png", after: "/images/imageca5.png" } },
      { id: "skin-booster", labelEn: "Skin Booster", labelAr: "إسكين بوستر", link: "/services/dermatology", case: { before: "/images/imagecb8.png", after: "/images/imageca8.png" } },
    ],
  },
  {
    id: "surgical",
    labelEn: "Surgical Aesthetics",
    labelAr: "التجميل الجراحي",
    icon: <Scissors className="w-5 h-5" />,
    mainLink: "/services/plastic-surgery",
    services: [
      { id: "breast-red", labelEn: "Breast Reduction", labelAr: "تصغير الثدي", link: "/services/plastic-surgery", case: { before: "/images/imagecb12.png", after: "/images/imageca12.png" } },
      { id: "breast-aug", labelEn: "Breast Augmentation", labelAr: "تكبير الثدي", link: "/services/plastic-surgery", case: { before: "/images/imagecb13.png", after: "/images/imageca13.png" } },
      { id: "lipo", labelEn: "Lipo & Injection", labelAr: "شفط وحقن الدهون", link: "/services/plastic-surgery", case: { before: "/images/cases/lipo-before.jpg", after: "/images/cases/lipo-after.jpg" } },
      { id: "body-contour", labelEn: "Body Contouring", labelAr: "نحت الجسم", link: "/services/plastic-surgery", case: { before: "/images/cases/contour-before.jpg", after: "/images/cases/contour-after.jpg" } },
      { id: "buttock", labelEn: "Buttock Augmentation", labelAr: "تكبير المؤخرة", link: "/services/plastic-surgery", case: { before: "/images/cases/buttock-before.jpg", after: "/images/cases/buttock-after.jpg" } },
    ],
  },
  
];

// ----------------------------------------------------------------------
// 3. The gallery stage — before/after slider inside a museum-style gold
// frame with corner brackets and brass plaque labels. The drag mechanic
// is preserved; only the shell around it changed. A gold "reveal" wipe
// plays once when a new case mounts, echoing the drag-to-reveal idea.
// ----------------------------------------------------------------------
const CornerBracket = ({ className }: { className: string }) => (
  <svg viewBox="0 0 32 32" className={cn("absolute w-6 h-6 md:w-8 md:h-8 pointer-events-none", className)}>
    <path d="M1 1 H16 M1 1 V16" stroke="var(--gold)" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const BeforeAfterSlider = ({ beforeImage, afterImage, language }: { beforeImage: string; afterImage: string; language: string }) => {
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

  useEffect(() => {
    x.set(0);
  }, [beforeImage, afterImage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative p-[3px] rounded-[2rem] md:rounded-[3rem]" style={{ background: "linear-gradient(135deg, var(--gold), transparent 30%, transparent 70%, var(--gold))" }}>
      <div
        ref={containerRef}
        className="relative aspect-[3/4] md:aspect-[16/10] rounded-[calc(2rem-3px)] md:rounded-[calc(3rem-3px)] overflow-hidden cursor-ew-resize group"
        style={{ background: "var(--panel)" }}
      >
        <div className="absolute inset-0">
          <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
          <div
            className={cn("absolute top-5 md:top-7 px-3 py-1.5 md:px-4 md:py-2 border backdrop-blur-md", language === "ar" ? "right-5 md:right-7" : "left-5 md:left-7")}
            style={{ background: "rgba(14,13,10,0.65)", borderColor: "var(--hairline)" }}
          >
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--ivory)" }}>
              {language === "en" ? "Before" : "قبل"}
            </span>
          </div>
        </div>

        <motion.div className="absolute inset-0 overflow-hidden" style={{ clipPath: useTransform(clipWidth, (w) => `inset(0 0 0 ${w}%)`), background: "var(--panel)" }}>
          <img src={afterImage} alt="After" className="w-full h-full object-cover" />
          <div
            className={cn("absolute top-5 md:top-7 px-3 py-1.5 md:px-4 md:py-2 border", language === "ar" ? "left-5 md:left-7" : "right-5 md:right-7")}
            style={{ background: "var(--gold)", borderColor: "var(--gold-light)" }}
          >
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--ink)" }}>
              {language === "en" ? "After" : "بعد"}
            </span>
          </div>
        </motion.div>

        {/* drag handle — a slim gold blade with a diamond grip */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -containerWidth / 2, right: containerWidth / 2 }}
          dragElastic={0}
          dragMomentum={false}
          style={{ x, left: "50%", translateX: "-50%" }}
          className="absolute inset-y-0 z-30 flex items-center justify-center touch-none"
        >
          <div className="w-px h-full relative" style={{ background: "var(--gold)", boxShadow: "0 0 12px rgba(190,154,90,0.6)" }}>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rotate-45 border flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ background: "var(--ink)", borderColor: "var(--gold)" }}
            >
              <div className="-rotate-45 flex gap-0.5" style={{ color: "var(--gold-light)" }}>
                <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* one-time gold reveal wipe on case change */}
        <motion.div
          key={beforeImage + afterImage}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{ background: "var(--gold)", transformOrigin: language === "ar" ? "left" : "right" }}
          className="absolute inset-0 z-40 pointer-events-none"
        />
      </div>

      {/* corner brackets — museum frame cue */}
      <CornerBracket className="top-0 left-0" />
      <CornerBracket className="top-0 right-0 rotate-90" />
      <CornerBracket className="bottom-0 right-0 rotate-180" />
      <CornerBracket className="bottom-0 left-0 -rotate-90" />
    </div>
  );
};

// ----------------------------------------------------------------------
// 4. Specialty rail — a vertical (horizontal on mobile) track with a
// gold dot that glides to the active node via shared layout animation.
// ----------------------------------------------------------------------
const SpecialtyRail = ({
  active,
  onSelect,
  language,
}: {
  active: Specialty;
  onSelect: (s: Specialty) => void;
  language: string;
}) => (
  <div className="relative flex lg:flex-col gap-2 lg:gap-1">
    <div className="absolute lg:left-[27px] top-1/2 lg:top-0 left-0 lg:bottom-0 right-0 lg:right-auto h-px lg:h-full lg:w-px -translate-y-1/2 lg:translate-y-0" style={{ background: "var(--hairline)" }} />
    {specialties.map((specialty) => {
      const isActive = active.id === specialty.id;
      return (
        <button
          key={specialty.id}
          onClick={() => onSelect(specialty)}
          className="relative z-10 flex items-center gap-4 py-3 lg:py-4 px-2 lg:px-0 flex-shrink-0 group text-left rtl:text-right"
        >
          <span className="relative flex items-center justify-center w-14 h-14 rounded-full border shrink-0 transition-colors duration-500" style={{ borderColor: isActive ? "var(--gold)" : "var(--hairline)", background: "var(--ink)" }}>
            {isActive && (
              <motion.span layoutId="specialty-dot" className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 0 1px var(--gold), 0 0 18px rgba(190,154,90,0.45)" }} transition={{ type: "spring", stiffness: 300, damping: 28 }} />
            )}
            <span style={{ color: isActive ? "var(--gold-light)" : "rgba(245,239,226,0.4)" }} className="transition-colors duration-500">
              {specialty.icon}
            </span>
          </span>
          <span className="hidden sm:flex flex-col">
            <span className="text-sm md:text-base font-semibold tracking-tight transition-colors duration-500" style={{ color: isActive ? "var(--ivory)" : "rgba(245,239,226,0.45)" }}>
              {language === "en" ? specialty.labelEn : specialty.labelAr}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] transition-colors duration-500" style={{ color: isActive ? "var(--gold)" : "rgba(245,239,226,0.25)" }}>
              {specialty.services.length} {language === "en" ? "Cases" : "حالات"}
            </span>
          </span>
        </button>
      );
    })}
  </div>
);

// ----------------------------------------------------------------------
// 5. Case tabs — engraved-plaque tabs with a shared-layout underline,
// the same "gold rule slides between items" motif used in the navbar.
// ----------------------------------------------------------------------
const CaseTabs = ({
  services,
  active,
  onSelect,
  language,
}: {
  services: Service[];
  active: Service;
  onSelect: (s: Service) => void;
  language: string;
}) => (
  <div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
    {services.map((service) => {
      const isActive = active.id === service.id;
      return (
        <button
          key={service.id}
          onClick={() => onSelect(service)}
          className="relative px-4 py-3 md:px-5 md:py-3.5 whitespace-nowrap text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300"
          style={{ color: isActive ? "var(--gold-light)" : "rgba(245,239,226,0.45)" }}
        >
          {language === "en" ? service.labelEn : service.labelAr}
          {isActive && (
            <motion.span layoutId="case-underline" className="absolute left-3 right-3 -bottom-[1px] h-px" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }} />
          )}
        </button>
      );
    })}
  </div>
);

// --- 6. Main component ---
const RealResults = () => {
  const { language, isRTL } = useLanguage();
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0]);
  const [activeService, setActiveService] = useState(specialties[0].services[0]);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const header = {
    subtitle: language === "en" ? "Transformative Journeys" : "رحلات التحول الحقيقية",
    title1: language === "en" ? "REAL" : "نتائج",
    title2: language === "en" ? "RESULTS" : "حقيقية",
  };

  const handleSpecialty = (s: Specialty) => {
    setActiveSpecialty(s);
    setActiveService(s.services[0]);
  };

  return (
    <section id="real-results" style={VARS} className="relative py-20 md:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--ink)" }} />
      <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(to_right,#BE9A5A_1px,transparent_1px),linear-gradient(to_bottom,#BE9A5A_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* soft overhead spotlight on the gallery stage */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 w-[70vw] max-w-[900px] aspect-square rounded-full opacity-[0.10] blur-[100px]"
        style={{ background: "var(--gold)" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-24 gap-6 md:gap-10">
          <motion.div initial={{ opacity: 0, x: isRTL ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <span className="flex items-center gap-2 text-sm md:text-base mb-4 font-bold tracking-[0.25em] uppercase" style={{ color: "var(--gold-light)" }}>
              <Sparkles className="w-4 h-4" style={{ color: "var(--gold)" }} />
              {header.subtitle}
            </span>
            <h2 className="text-5xl md:text-8xl lg:text-[8.5rem] font-serif font-black tracking-tighter leading-[0.88] uppercase" style={{ color: "var(--ivory)" }}>
              {header.title1} <br className="hidden md:block" />
              <span
                className="italic md:ml-4"
                style={{
                  WebkitTextStroke: "1.5px var(--gold)",
                  color: "transparent",
                }}
              >
                {header.title2}
              </span>
            </h2>
          </motion.div>

          <p className={cn("text-xs md:text-sm max-w-xs uppercase font-bold tracking-[0.2em] md:tracking-[0.3em] leading-relaxed", isRTL && "text-right")} style={{ color: "rgba(245,239,226,0.45)" }}>
            {language === "en" ? "Witness the biological mastery and artistic precision of Dr. Sara." : "شاهدوا الإتقان الطبي والدقة الفنية في لمسات دكتورة سارة."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* ================= SPECIALTY RAIL ================= */}
          <div className="lg:col-span-3">
            <SpecialtyRail active={activeSpecialty} onSelect={handleSpecialty} language={language} />
            <AnimatePresence mode="wait">
              <motion.div key={activeSpecialty.id} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="mt-4 ml-2 lg:ml-[72px]">
                <Link
                  to={activeSpecialty.mainLink}
                  className="inline-flex items-center gap-2 border text-[9px] md:text-[10px] px-5 py-2.5 uppercase tracking-widest transition-colors duration-300"
                  style={{ borderColor: "var(--hairline)", color: "rgba(245,239,226,0.6)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--hairline)";
                    e.currentTarget.style.color = "rgba(245,239,226,0.6)";
                  }}
                >
                  <ExternalLink className="w-3 h-3" />
                  {language === "en" ? "View Page" : "عرض الصفحة"}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= MAIN STAGE ================= */}
          <div className="lg:col-span-9">
            <div className="mb-8 md:mb-10">
              <CaseTabs services={activeSpecialty.services} active={activeService} onSelect={setActiveService} language={language} />
            </div>

            <BeforeAfterSlider beforeImage={activeService.case.before} afterImage={activeService.case.after} language={language} />

            {/* ================= INFO ROW ================= */}
            <div className="mt-9 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t pt-8 md:pt-10" style={{ borderColor: "var(--hairline)" }}>
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-serif font-bold italic" style={{ color: "var(--ivory)" }}>
                  {language === "en" ? activeService.labelEn : activeService.labelAr}
                </h3>
                <Link to={activeService.link} className="flex items-center gap-2 group w-fit">
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300" style={{ color: "rgba(245,239,226,0.4)" }}>
                    {language === "en" ? "Procedure Details" : "تفاصيل الإجراء"}
                  </span>
                  <ArrowIcon className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" style={{ color: "var(--gold)" }} />
                </Link>
              </div>

              <Link to="/contact-us" className="w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 md:px-10 md:py-5 text-[9px] md:text-[10px] font-black uppercase tracking-widest border transition-colors duration-300"
                  style={{ borderColor: "var(--gold)", color: "var(--gold-light)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--gold)";
                    e.currentTarget.style.color = "var(--ink)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--gold-light)";
                  }}
                >
                  {language === "en" ? "Book Similar Result" : "احجزي نتيجة مماثلة"}
                  <ArrowIcon className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealResults;